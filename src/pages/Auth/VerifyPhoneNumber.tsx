import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";

export default function VerifyPhoneNumber() {
  return (
    <>
      <div className="mt-4 text-center">
        <h1 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
          Verify Your Phone Number
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Enter your verification code to verify your phone number.
        </p>
      </div>

      <form className="mx-auto mt-6 w-full max-w-sm space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500">
            Enter verification code here
          </label>
          <Input
            type="number"
            name="verificationCode"
            placeholder="********"
            className="[appearance:textfield]
    [&::-webkit-inner-spin-button]:appearance-none
    [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>

        <Button type="submit">Verify</Button>
      </form>
    </>
  );
}
