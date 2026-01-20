import { FiArrowLeft } from "react-icons/fi";
import { Outlet, useNavigate } from "react-router-dom";

export default function AuthLayout() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <img
        src="/images/pages/login-img.png"
        alt="Auth"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <img
        src="/images/hotbedlk-logo.png"
        alt="Hotbed.lk"
        className="absolute left-6 top-6 z-20 h-8 md:left-8 md:top-8"
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-xs font-semibold text-gray-500 transition hover:text-gray-900 cursor-pointer"
          >
            <FiArrowLeft className="text-sm" />
            Go Back
          </button>

          {/* Outlet renders */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
