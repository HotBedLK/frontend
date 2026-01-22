import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import VerifySuccessModal from "../../components/state/VerifySuccessModel";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import { ROUTES } from "../../routes/routePaths";

const RESEND_DELAY_SECONDS = 120;
type VerifyLocationState = { mobile_number?: string; email?: string } | null;

export default function VerifyPhoneNumber() {
  const verifyPhone = useAuthStore((s) => s.verifyPhone);
  const resendOtp = useAuthStore((s) => s.resendOtp);
  const isLoading = useAuthStore((s) => s.isLoading);
  const apiError = useAuthStore((s) => s.error);

  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as VerifyLocationState;
  const mobileNumber = locationState?.mobile_number ?? "";
  const email = locationState?.email ?? "";

  const [verificationCode, setVerificationCode] = useState("");
  const [codeError, setCodeError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(RESEND_DELAY_SECONDS);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }
    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [secondsLeft]);

  const handleResend = async () => {
    if (secondsLeft > 0) {
      return;
    }

    setFormError(null);

    if (!mobileNumber && !email) {
      setFormError("Phone number or email is required to resend.");
      return;
    }

    const success = await resendOtp({
      mobile_number: mobileNumber || null,
      email: email || null,
    });

    if (success) {
      setSecondsLeft(RESEND_DELAY_SECONDS);
    }
  };

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCodeError(null);
    setFormError(null);

    if (!verificationCode.trim()) {
      setCodeError("Verification code is required");
      return;
    }

    if (!mobileNumber && !email) {
      setFormError("Phone number or email is missing. Please register again.");
      return;
    }

    const success = await verifyPhone({
      mobile_number: mobileNumber || null,
      email: email || null,
      otp: verificationCode.trim(),
    });

    if (success) {
      setShowSuccess(true);
      window.setTimeout(() => {
        setShowSuccess(false);
        navigate(ROUTES.LOGIN, { replace: true });
      }, 1500);
    } else {
      setFormError("Verification failed. Please check the code and try again.");
    }
  };

  return (
    <>
      <div className="mt-4 text-center">
        <h1 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
          Verify Your Phone Number
        </h1>
      </div>

      <form
        className="mx-auto mt-6 w-full max-w-sm space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500">
            Enter verification code here
          </label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            name="verificationCode"
            placeholder="********"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            error={codeError || undefined}
            className="[appearance:textfield]
    [&::-webkit-inner-spin-button]:appearance-none
    [&::-webkit-outer-spin-button]:appearance-none "
          />
        </div>

        <Button type="submit" loading={isLoading}>
          Verify
        </Button>

        {formError && (
          <p className="text-center text-xs text-red-600">{formError}</p>
        )}
        {apiError && <p className="text-center text-xs text-red-600">{apiError}</p>}
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        {secondsLeft > 0 ? (
          <p>Wait {formatTime(secondsLeft)} for send verification code again</p>
        ) : (
          <button
            type="button"
            onClick={handleResend}
            className="font-semibold text-[var(--primary-color)] hover:underline hover:cursor-pointer"
          >
            Resend verification code
          </button>
        )}
      </div>

      <VerifySuccessModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
}
