import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";

export default function Login() {
  const login = useAuthStore((s) => s.login);
  const loginDemo = useAuthStore((s) => s.loginDemo);
  const isLoading = useAuthStore((s) => s.isLoading);
  const error = useAuthStore((s) => s.error);

  const [mobile_number, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login({ mobile_number, password });
    if (success) navigate(from, { replace: true });
  };

  const handleDemoLogin = () => {
    loginDemo();
    navigate("/home", { replace: true });
  };

  return (
    <>
      {/* Header */}
      <div className="mb-6 mt-4 text-center">
        <h1 className="font-display text-3xl font-bold text-gray-900">
          Welcome
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Login or Create an account with hotbed.lk
        </p>
      </div>

      {/* Form */}
      <form className="w-full max-w-lg space-y-4" onSubmit={handleSubmit}>
        <Input
          type="tel"
          placeholder="0777123456"
          value={mobile_number}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Input
          type="password"
          placeholder="****************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button loading={isLoading}>Login</Button>

        <button
          type="button"
          onClick={handleDemoLogin}
          disabled={isLoading}
          className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-70"
        >
          Demo Login
        </button>

        {error && <p className="text-center text-xs text-red-600">{error}</p>}
        {/* Footer */}
        <div className="mt-6">
          <p className="text-center mb-2 text-xs text-gray-500">
            Forget password?{" "}
            <Link
              to="/password-reset"
              className="text-blue-600 hover:underline"
            >
              Click here
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
