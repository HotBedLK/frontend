import { FaFacebook, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  const locations = [
    "Colombo",
    "Kandy",
    "Galle",
    "Jaffna",
    "Nugegoda",
    "Negombo",
  ];

  const socialLinks = [
    { icon: <FaFacebook />, label: "Facebook" },
    { icon: <FaInstagram />, label: "Instagram" },
    { icon: <FaXTwitter />, label: "X" },
    { icon: <FaTiktok />, label: "TikTok" },
  ];

  return (
    <footer className="mt-10 border-t border-gray-200 bg-white text-gray-700">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-8 text-sm md:grid-cols-3">
        <div className="text-center md:text-left">
          <h1 className="text-base font-semibold text-gray-900">
            <span className="text-blue-600">Hotbed</span>.lk
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Simple, trusted property listings across Sri Lanka.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-sm font-semibold text-gray-900 text-center">
            Popular locations
          </h2>
          <ul className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-500 text-center">
            {locations.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-right">
          <h2 className="text-sm font-semibold text-gray-900">Connect</h2>
          <ul className="mt-3 flex justify-center gap-3 text-gray-500 md:justify-end">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <button
                  type="button"
                  className="rounded-full border border-gray-200 p-2 transition hover:text-blue-600"
                  aria-label={social.label}
                >
                  <span className="text-base">{social.icon}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-400">
        © 2025 Hotbed.lk. All rights reserved.
      </div>
    </footer>
  );
}
