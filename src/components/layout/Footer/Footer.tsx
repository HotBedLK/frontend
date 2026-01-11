import { FaFacebook, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  // ✅ Data arrays
  const leftColumn = ["Colombo", "Kandy", "Anuradhapura", "Jaffna"];
  const rightColumn = ["Rathnapura", "Ampara", "Galle", "Mathara"];

  const socialLinks = [
    { icon: <FaFacebook />, label: "Facebook" },
    { icon: <FaInstagram />, label: "Instagram" },
    { icon: <FaXTwitter />, label: "X" },
    { icon: <FaTiktok />, label: "TikTok" },
  ];

  return (
    <footer className="bg-gray-200 text-gray-900 py-8 px-6 mt-10">
      <div className="px-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Left Section */}
        <div>
          <h1 className="text-xl font-bold mb-4">
            <span className="text-blue-600">Hotbed</span>.lk
          </h1>
          <p className="leading-relaxed">
            Easy boarding. Real-time listings.
            <br />
            Connects seekers, owners seamlessly.
            <br />
            Saves time, frustration. Reliable, up-to-date.
            <br />
            Your ideal place, simply found.
          </p>
        </div>

        {/* Middle Section - Dynamic List */}
        <div className="text-center">
          <h2 className="font-semibold mb-4">Most Popular Location</h2>
          <div className="flex justify-center gap-10">
            <ul className="space-y-1">
              {leftColumn.map((city, index) => (
                <li key={index}>{city}</li>
              ))}
            </ul>
            <ul className="space-y-1">
              {rightColumn.map((city, index) => (
                <li key={index}>{city}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Aligned Social Icons */}
        <div className="text-right">
          <h2 className="font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-2">
            {socialLinks.map((social, index) => (
              <li
                key={index}
                className="flex justify-end items-center gap-2 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <span className="text-lg">{social.icon}</span>
                <span>{social.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
