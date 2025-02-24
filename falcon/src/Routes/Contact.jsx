import React from "react";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+1234567890"; // Replace with your WhatsApp number
    const message = "Hello, I need more information!"; // Default message
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:support@example.com"; // Replace with your email address
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+1234567890"; // Replace with your phone number
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-600 to-black text-white py-12 px-4">
        <div className="max-w-4xl w-full text-center px-6 py-8 rounded-lg shadow-xl bg-black bg-opacity-60">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">
            We would love to hear from you! Reach out to us through any of the
            following methods:
          </p>

          {/* Button Row */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center">
            {/* Mail Button */}
            <div className="mb-4 w-full sm:w-auto">
              <button
                onClick={handleEmailClick}
                className="w-full sm:w-auto text-lg font-semibold bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-700 transition duration-300"
              >
                Send an Email
              </button>
            </div>

            {/* Phone Number Button */}
            <div className="mb-4 w-full sm:w-auto">
              <button
                onClick={handlePhoneClick}
                className="w-full sm:w-auto text-lg font-semibold bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Call Us
              </button>
            </div>

            {/* WhatsApp Button */}
            <div className="mb-4 w-full sm:w-auto">
              <button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto text-lg font-semibold bg-green-700 text-white py-3 px-6 rounded-full hover:bg-green-800 transition duration-300"
              >
                WhatsApp Message
              </button>
            </div>
          </div>

          {/* Optional Address or Other Contact Information */}
          <p className="mt-8 text-lg sm:text-xl">
            Or you can visit us at: <br />
            123 Business Street, City, Country
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
