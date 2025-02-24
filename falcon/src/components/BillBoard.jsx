import React, { useEffect, useState } from "react";
import ViewBoard from "./ViewBoard";
import TopSellers from "./TopSellers";

export const BillBoard = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [showTopSeller, setTopSeller] = useState(false);

  const autoHide = () => {
    console.log("count start");
    setTimeout(() => {
      console.log("count done");

      setTopSeller(!showTopSeller);
      console.log(showTopSeller);
    }, 10000);
  };

  const Images = [
    "../public/plate/Bowls.webp",
    "../public/plate/rectangle.webp",
    "../public/plate/round.webp",
    "../public/plate/square.webp",
  ];
  const ImagesName = ["Bowl", "Rectangle", "Round", "Square"];

  const RiceImage = [
    "../public/rice/PONNI.JPG",
    "../public/rice/RNR.webp",
    "../public/rice/SONA.webp",
  ];

  const RiceName = ["Ponni", "RnR", "SONA"];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStage((prevStage) => (prevStage + 1) % 3); // Loop through the 3 stages
    }, 4000); // Change stage every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const getAnimationClass = () => {
    switch (animationStage) {
      case 0:
        return "bg-gradient-to-r from-green-600 to-black text-white";
      case 1:
        return "bg-gradient-to-r from-black to-green-600 text-white";
      case 2:
        return "bg-gradient-to-r from-white to-green-600 text-green-600";
      default:
        return "bg-gradient-to-r from-green-600 to-black text-white";
    }
  };

  return (
    <div
      className={`flex bg-red-500 justify-center items-center min-h-screen w-full overflow-hidden relative z-10 relative text-center px-8 py-12 rounded-lg shadow-xl w-full h-full transition-all duration-1000 ${getAnimationClass()}`}
    >
      <div className="flex flex-col mt-30">
        {/* Title Text Animation */}
        <h1 className="text-5xl font-extrabold mb-6 opacity-90 animate__animated animate__fadeIn animate__delay-1s tracking-wide">
          Welcome to Falcon Ventures
        </h1>

        {/* Subtitle Text Animation */}
        <p className="text-xl font-light mb-6 opacity-80 animate__animated animate__fadeIn animate__delay-2s tracking-wide">
          Your trusted source for high-quality Areca palm leaf plates.
        </p>

        {/* Description Text Animation */}
        <p className="text-lg font-medium opacity-70 mb-8 animate__animated animate__fadeIn animate__delay-3s leading-relaxed">
          We are passionate about sustainability and are proud to offer
          eco-friendly, biodegradable alternatives to traditional disposable
          plates.
        </p>

        {/* Call to Action Button */}
        <a
          href="#explore"
          className="mt-6 text-lg font-semibold bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-700 transition duration-300"
        >
          Explore Our Products
        </a>
        {!showTopSeller ? (
          <>
            <button
              onClick={() => {
                setTopSeller(!showTopSeller);
                autoHide();
              }}
              className="mt-6 text-lg font-semibold bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-700 transition duration-300"
            >
              Show Top Sellers
            </button>
          </>
        ) : (
          <div className="mt-20">
            {" "}
            <a href={"/contact-us"}>
              <button className="mb-10 hover:text-green-500 mt-6 text-lg font-semibold bg-black text-green-500 py-3 px-6 rounded-full hover:bg-white transition duration-300">
                Get Quotation (Its Free)
              </button>
            </a>
            <div className="flex justify-around">
              <ViewBoard images={RiceImage} imageNames={RiceName} delay={40} />

              <ViewBoard images={Images} imageNames={ImagesName} delay={50} />
            </div>
            <button
              onClick={() => setTopSeller(!showTopSeller)}
              className="hover:text-white mt-6 text-lg font-semibold bg-white text-green-500 py-3 px-6 rounded-full hover:bg-green-700 transition duration-300"
            >
              Hide Top Sellers
            </button>
          </div>
        )}
        {/* Bottom Animation Bar */}
        <div
          className={`absolute bottom-0 left-0 w-full h-1 bg-green-500 transition-all duration-2000 ${
            animationStage === 2 ? "animate__fadeOut" : ""
          }`}
        />
      </div>
    </div>
  );
};
