import React, { useState, useEffect } from "react";

const ViewBoard = ({ images, imageNames, delay }) => {
  const [progress, setProgress] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(true); // State for overlay visibility

  useEffect(() => {
    // Reset progress and overlay visibility when the component loads
    setProgress(0);
    setOverlayVisible(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          // Once progress is complete, switch to the next image
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
          setOverlayVisible(false); // Start the overlay fade-out
          return 0; // Reset progress for the new image
        }
      });
    }, delay); // Use the delay prop to control interval speed

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentImage, images.length, delay]);

  // Reset overlay visibility when changing to the next image
  useEffect(() => {
    if (!overlayVisible) {
      // After 2 seconds, make the overlay visible again
      const timer = setTimeout(() => {
        setOverlayVisible(true);
      }, 2000); // Fade out duration (2 seconds)
      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [overlayVisible]);

  return (
    <div className="relative w-full md:w-1/3 mx-1 mb-8 rounded-lg overflow-hidden">
      <div className="relative w-full">
        {/* Image with black overlay */}
        <img
          src={images[currentImage]}
          alt="Product"
          className="w-full h-64 object-cover"
        />
        <div
          className={`absolute top-0 left-0 w-full h-full bg-black opacity-60 flex justify-center items-center transition-opacity duration-2000 ${
            overlayVisible ? "opacity-60" : "opacity-0"
          }`}
        >
          <h2 className="text-white text-3xl font-bold">
            {imageNames[currentImage]}
          </h2>
        </div>
      </div>

      {/* Underline progress */}
      <div className="relative mt-2">
        <div className="w-full h-2 bg-gray-300">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-green-500 transition-all duration-30"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ViewBoard;
