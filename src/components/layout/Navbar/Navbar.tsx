import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useAuthStore } from "../../../store/auth.store";
import { ROUTES } from "../../../routes/routePaths";

export default function Navbar() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const user = useAuthStore((s) => s.user);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background-green)] shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6 sm:py-3">
        {/* Logo */}
        <Link to={ROUTES.HOME} className="flex items-center gap-2">
          <img
            src="/images/hotbedlk-logo.png"
            alt="Hotbed.lk Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Right Buttons */}
        {isAuthenticated && user ? (
          <div className="flex items-center gap-2">
            {user.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt={`${user.name} profile`}
                className="h-9 w-9 rounded-full border border-white/60 object-cover"
              />
            ) : (
              <FaUserCircle className="text-2xl text-white" aria-label="Profile" />
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              to={ROUTES.LOGIN}
              className="rounded-md border border-gray-400 bg-white px-3 py-1 text-xs text-gray-800 transition hover:bg-[var(--hover-primary)] hover:text-white sm:px-4 sm:py-1.5 sm:text-sm"
            >
              Login
            </Link>

            <Link
              to={ROUTES.REGISTER}
              className="rounded-md bg-[var(--primary-color)] px-3 py-1 text-xs text-white transition hover:bg-[var(--hover-primary)] sm:px-4 sm:py-1.5 sm:text-sm"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
