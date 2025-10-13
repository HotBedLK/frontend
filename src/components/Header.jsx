export default function Header() {
  return (
    <header className="w-full sticky top-0 bg-gray-100 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <span className="text-[#4a4966]">Hotbed</span>
          <span className="text-green-600">.lk</span>
        </div>

        {/* Right Buttons */}
        <div className="flex space-x-4">
          {/* Login Button */}
          <button className="px-4 py-1.5 border border-gray-400 text-gray-800 rounded-md hover:bg-gray-200 transition cursor-pointer">
            Login
          </button>

          {/* SignUp Button */}
          <button className="px-4 py-1.5 bg-[#4a4966] text-white rounded-md hover:bg-[#3d3c5a] transition cursor-pointer">
            SignUp
          </button>
        </div>
      </div>
    </header>
  );
}
