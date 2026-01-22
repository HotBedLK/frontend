import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useAuthStore } from "../../store/auth.store";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import { ROUTES } from "../../routes/routePaths";

export default function Register() {
  const register = useAuthStore((s) => s.register);
  const isLoading = useAuthStore((s) => s.isLoading);
  const apiError = useAuthStore((s) => s.error);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);


  const [errors, setErrors] = useState<Record<string, string>>({});

  const navigate = useNavigate();

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // First Name
    if (!fName.trim()) {
      newErrors.fName = "First name is required";
    }

    // Last Name
    if (!lName.trim()) {
      newErrors.lName = "Last name is required";
    }

    // Phone Number
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    // Email
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Invalid email address";
      }
    }

    // Password
    if (!password) {
      newErrors.password = "Password is required";
    }

    // Confirm Password
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTermsError(null);
    if (!validate()) return;
    if (!termsAccepted) {
      setTermsError("Please accept the terms to continue.");
      return;
    }

    const success = await register({
      first_name: fName.trim(),
      last_name: lName.trim(),
      password,
      mobile_number: phone.trim(),
      email: email.trim(),
    });

    if (success) {
      navigate(ROUTES.VERIFY_PHONE_NUMBER, {
        replace: true,
        state: { mobile_number: phone.trim(), email: email.trim() },
      });
    }
  };

  return (
    <>
      {/* Header */}
      <div className="mb-6 mt-4 text-center">
        <h1 className="font-display text-3xl font-bold text-gray-900">
          Create Account
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Create an account or login with hotbed.lk
        </p>
      </div>

      {/* Form */}
      <form className="w-full max-w-lg space-y-4" onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500">
            First Name
          </label>
          <Input
            type="text"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            error={errors.fName}
          />
        </div>

        {/* Last Name */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500">
            Last Name
          </label>
          <Input
            type="text"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            error={errors.lName}
          />
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500">
            Phone Number
          </label>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={errors.phone}
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500">E-Mail</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500">
            Password
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              className="pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <FiEyeOff className="h-4 w-4" aria-hidden="true" />
              ) : (
                <FiEye className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500">
            Confirm Password
          </label>
          <div className="relative">
            <Input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={errors.confirmPassword}
              className="pr-12"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900"
              aria-label={showConfirm ? "Hide password" : "Show password"}
            >
              {showConfirm ? (
                <FiEyeOff className="h-4 w-4" aria-hidden="true" />
              ) : (
                <FiEye className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex  gap-2 text-xs text-gray-500">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => {
                setTermsAccepted(e.target.checked);
                if (e.target.checked) {
                  setTermsError(null);
                }
              }}
              className="h-4 w-4 accent-[var(--primary-color)]"
            />
            I agree to the Terms of use & Privacy policy
          </label>
          {termsError && (
            <p className="text-center text-xs text-red-600">{termsError}</p>
          )}
        </div>

        <Button loading={isLoading}>Register</Button>

        {apiError && (
          <p className="text-center text-xs text-red-600">{apiError}</p>
        )}

        {/* Footer */}
        <div className="mt-6 space-y-2">
          <p className="text-center text-xs text-gray-500">
            Have account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              login here
            </Link>
          </p>
          <p className="text-center text-xs text-gray-400">
            Terms of use | Privacy policy
          </p>
        </div>
      </form>
    </>
  );
}
