import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100" id="contact">
      {/* Header */}
      <div className="bg-blue-900 text-white text-center py-10">
        <h1 className="text-3xl font-bold">Contact HDFC Bank</h1>
        <p className="mt-2 text-gray-200">
          We’re here to help you 24×7
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

          <p className="mb-4">
            <span className="font-semibold">📍 Address:</span>  
            HDFC Bank Ltd., Mumbai, India
          </p>

          <p className="mb-4">
            <span className="font-semibold">📞 Phone:</span>  
            +91 22 6160 6161
          </p>

          <p className="mb-4">
            <span className="font-semibold">✉ Email:</span>  
            support@hdfcbank.com
          </p>

          <p className="text-gray-600 mt-6">
            Our support team is available 24×7 to assist you with banking
            services.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-3">
        © 2026 HDFC Bank Management System
      </footer>
    </div>
  );
}

export default Contact;
