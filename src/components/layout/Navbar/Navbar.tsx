import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background-green)] shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6 sm:py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/hotbedlk-logo.png"
            alt="Hotbed.lk Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-2">
          {/* Login Button */}
          <Link
            to="/login"
            className="rounded-md border border-gray-400 bg-white px-3 py-1 text-xs text-gray-800 transition hover:bg-[var(--hover-primary)] hover:text-white sm:px-4 sm:py-1.5 sm:text-sm"
          >
            Login
          </Link>

          {/* SignUp Button */}
          <Link
            to="/register"
            className="rounded-md bg-[var(--primary-color)] px-3 py-1 text-xs text-white transition hover:bg-[var(--hover-primary)] sm:px-4 sm:py-1.5 sm:text-sm"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
