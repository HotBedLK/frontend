import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const { login, isLoading, error } = useLogin();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage(null);
    try {
      await login({ phone, password });
      setSuccessMessage("Login successful.");
    } catch {
      setSuccessMessage(null);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        <div className="relative h-56 md:h-auto">
          <img
            src="/images/pages/login-img.png"
            alt="Boarding room"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <img
            src="/images/hotbedlk-logo.png"
            alt="Hotbed.lk"
            className="absolute left-6 top-6 h-8 md:left-8 md:top-8"
          />
        </div>

        <div className="flex h-full flex-col justify-center gap-6 px-6 pb-10 pt-0 sm:px-10 md:pt-10">
          <Link
            to="/"
            className="w-fit text-xs font-semibold text-gray-500 transition hover:text-gray-900"
          >
            &larr; Go Back
          </Link>

          <div>
            <h1 className="font-display text-3xl font-bold text-gray-900">Welcome</h1>
            <p className="mt-1 text-sm text-gray-500">
              Create a account or login with hotbed.lk
            </p>
          </div>

          <form className="w-full max-w-lg space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-500">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="0777123456"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 h-12 py-2 text-sm text-gray-900 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-500">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="****************"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full h-12 rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-sm text-gray-900 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-lg bg-[#4a4966] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#3d3c5a] disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>

            {error ? (
              <p className="text-center text-xs text-red-600">{error}</p>
            ) : null}
            {successMessage ? (
              <p className="text-center text-xs text-emerald-600">
                {successMessage}
              </p>
            ) : null}

            <p className="text-center text-xs text-gray-500">
              Forget password?{" "}
              <Link to="/password-reset" className="text-blue-600 hover:underline">
                Click here
              </Link>
            </p>

            <p className="text-center text-xs text-gray-400">
              Terms of use | Privacy policy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
