import { FiArrowLeft } from "react-icons/fi";
import { Outlet, useNavigate } from "react-router-dom";

export default function AuthLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        {/* Right image */}
        <div className="relative h-56 md:h-auto">
          <img
            src="/images/pages/login-img.png"
            alt="Auth"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <img
            src="/images/hotbedlk-logo.png"
            alt="Hotbed.lk"
            className="absolute left-6 top-6 h-8 md:left-8 md:top-8"
          />
        </div>

        {/* Left content */}
        <div className="flex h-full flex-col justify-center gap-6 px-6 pb-10 sm:px-10 md:pt-10">
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
