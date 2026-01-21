import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";

export default function Register() {
  const register = useAuthStore((s) => s.register);
  const isLoading = useAuthStore((s) => s.isLoading);
  const error = useAuthStore((s) => s.error);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await register({ phone, password });
    if (success) navigate(from, { replace: true });
  };

  return (
    <>
      {/* Header */}
      <div className="mb-6 mt-4 text-center">
        <h1 className="font-display text-3xl font-bold text-gray-900">
          Create Account
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Create a account or login with hotbed.lk
        </p>
      </div>

      {/* Form */}
      <form className="w-full max-w-lg space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500">
            Forms of address
          </label>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="salutation"
                value="Mr"
                defaultChecked
                className="h-3 w-3 accent-[var(--primary-color)]"
              />
              Mr
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="salutation"
                value="Mrs"
                className="h-3 w-3 accent-[var(--primary-color)]"
              />
              Mrs
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="salutation"
                value="Mis"
                className="h-3 w-3 accent-[var(--primary-color)]"
              />
              Mis
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500">
            Full Name
          </label>
          <Input type="text" name="fullName" placeholder="Saman Kumara" />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500">
            Phone Number
          </label>
          <Input
            type="tel"
            name="phone"
            placeholder="0777123456"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500">
            Password
          </label>
          <Input
            type="password"
            name="password"
            placeholder="************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500">
            Confirm Password
          </label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="************"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500">
            Your Role
          </label>
          <select
            name="role"
            defaultValue=""
            className="h-12 w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-sm text-gray-900 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <option value="" disabled>
              Select Your Role
            </option>
            <option value="VIEWER">Viewer</option>
            <option value="LISTERS">Lister</option>
          </select>
        </div>

        <Button loading={isLoading}>Register</Button>

        {error && <p className="text-center text-xs text-red-600">{error}</p>}
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
