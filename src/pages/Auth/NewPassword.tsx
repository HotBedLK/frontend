import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";

export default function NewPassword() {
  return (
    <>
      <div className="mt-4 text-center">
        <h1 className="font-display font-bold text-3xl text-gray-900 sm:text-3xl">
          Enter Your New Password
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Please enter your new password below.
        </p>
      </div>

      <form className="mx-auto mt-6 w-80 max-w-sm space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500">
            New Password
          </label>
          <Input type="password" name="newPassword" placeholder="********" />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500">
            Confirm New Password</label>
          <Input type="password" name="confirmNewPassword" placeholder="********" />
        </div>

        <Button type="submit">Reset Password</Button>
      </form>
    </>
  );
}
