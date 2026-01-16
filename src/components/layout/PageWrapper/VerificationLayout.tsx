import { FiArrowLeft } from "react-icons/fi";
import { Outlet, useNavigate } from "react-router-dom";

export default function VerificationLayout() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <img
        src="/images/banners/landing-p-hero-01.png"
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1 text-xs font-semibold text-gray-500 transition hover:text-gray-900 cursor-pointer"
            >
              <FiArrowLeft className="text-sm" />
              Go Back
            </button>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}
