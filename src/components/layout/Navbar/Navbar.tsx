import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 bg-gray-100 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/hotbedlk-logo.png"
            alt="Hotbed.lk Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Right Buttons */}
        <div className="flex space-x-4">
          {/* Login Button */}
          <Link
            to="/login"
            className="px-4 py-1.5 border border-gray-400 text-gray-800 rounded-md hover:bg-gray-200 transition"
          >
            Login
          </Link>

          {/* SignUp Button */}
          <button className="px-4 py-1.5 bg-[var(--primary-color)] text-white rounded-md hover:bg-[var(--hover-primary)] transition cursor-pointer">
            SignUp
          </button>
        </div>
      </div>
    </header>
  );
}
