// import { Link } from "react-router-dom";

import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";

export default function PasswordReset() {
  return (
    <>
      <div className="mt-4 text-center">
        <h1 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
          Forgot Your Password?
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Enter your phone number to reset your password.
        </p>
      </div>

      <form className="mx-auto mt-6 w-full max-w-sm space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500">
            Enter Phone Number
          </label>
          <Input type="tel" name="phone" placeholder="0777123456" />
        </div>

        <Button type="submit">Confirm</Button>
      </form>
    </>
  );
}
