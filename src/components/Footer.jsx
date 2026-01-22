import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Bank Info */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              HDFC Bank
            </h2>
            <p className="text-sm">
              HDFC Bank is one of India’s leading private sector banks,
              providing a wide range of financial services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Savings Account</li>
              <li className="hover:text-white cursor-pointer">Loans</li>
              <li className="hover:text-white cursor-pointer">Credit Cards</li>
              <li className="hover:text-white cursor-pointer">Net Banking</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Contact Us
            </h3>
            <p className="text-sm">📍 Mumbai, India</p>
            <p className="text-sm">📞 1800 202 6161</p>
            <p className="text-sm">✉️ support@hdfcbank.com</p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} HDFC Bank. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
