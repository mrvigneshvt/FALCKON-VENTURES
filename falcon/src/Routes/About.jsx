import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      {/* About Page Content */}
      <div className="bg-black text-green-500 min-h-screen p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-green-500">
          About Us
        </h1>

        <div className="container mx-auto text-center mb-12">
          <p className="text-lg text-white mb-4">
            <strong>Falcon Ventures</strong> is a prominent exporter and
            wholesaler, committed to providing sustainable and eco-friendly
            solutions for the world. We specialize in offering biodegradable
            leaf plates and serving as a reliable exporter of rice, focusing on
            quality, ethics, and environmental responsibility.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="bg-green-700 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-white text-lg">
            At Falcon Ventures, our mission is to contribute to a greener planet
            by providing high-quality biodegradable products that reduce plastic
            waste. We are also dedicated to supporting agriculture by exporting
            premium rice globally, ensuring fair trade practices and
            environmental sustainability.
          </p>
        </div>

        {/* Products and Services Section */}
        <div className="bg-black text-green-500 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Our Products</h2>
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            <div className="sm:w-1/2 p-4 bg-green-700 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Biodegradable Leaf Plates
              </h3>
              <p className="text-white">
                Our biodegradable leaf plates are made from natural leaves and
                are a perfect eco-friendly alternative to plastic. They are
                durable, lightweight, and fully compostable, making them ideal
                for foodservice and events.
              </p>
            </div>
            <div className="sm:w-1/2 p-4 bg-green-700 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Rice Export
              </h3>
              <p className="text-white">
                We are a trusted exporter of premium quality rice, delivering
                products from the best agricultural farms to international
                markets. We focus on quality, consistency, and fair trade
                practices to ensure customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div
          className="text-center mt-12"
          onClick={() => navigate("/contact-us")}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-lg text-white">
            If you have any questions or would like to inquire about our
            products, feel free to reach out to us. We're here to help!
          </p>
          <p className="text-lg text-green-500 mt-4">
            Email: contact@falconventures.com
          </p>
          <p className="text-lg text-green-500">Phone: +1 234 567 890</p>
        </div>
      </div>
    </>
  );
};

export default About;
