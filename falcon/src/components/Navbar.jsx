import React, { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Navbar = () => {
  // State to control the visibility of the sidebar
  const routes = ["/about", "/contact-us", "/products", "/privacy-policy"];
  const moreInformation = ["About Us", "Contact", "Products", "Privacy Policy"];
  const companyName = "Falcon Ventures";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="mx-auto bg-black text-green-500 sticky z-1000">
      {/* Navbar Section */}
      <div className="sticky top-0 bg-black flex flex-row justify-between items-center p-4">
        <div className="md:flex-none" onClick={() => navigate("/home")}>
          <img
            className="drop-shadow-lg w-20 h-20 p-4 hover:rotate-180 transition-transform duration-300 ease-in-out cursor-pointer"
            src="./logo.png"
            alt="logo"
          />
        </div>

        <div
          className="md:flex-none flex justify-center items-center "
          onClick={() => navigate("/home")}
        >
          <img
            className="drop-shadow-lg w-40 h-25 p-4 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
            src="./moto-preview.png"
            alt="logo"
          />
        </div>

        <button
          onClick={toggleSidebar}
          className="text-white p-2 bg-green-700 hover:bg-green-600 rounded ml-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white w-3/4 md:w-1/4 transition-transform duration-300 z-50 ${
          isSidebarOpen
            ? "transform translate-x-0"
            : "transform translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-7 rounded-2xl bg-green-700 p-2">
            More Information
          </h2>
          <ul>
            {moreInformation.map((d, i) => (
              <li
                onClick={() => navigate(routes[i])}
                key={i}
                className="mb-7 text-white cursor-pointer hover:text-green-400"
              >
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay (Dark background) to close the sidebar when clicked outside */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity duration-300 z-40 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      />
    </div>
  );
};

export default Navbar;
