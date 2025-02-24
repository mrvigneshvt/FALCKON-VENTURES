import React from "react";

const TopSellers = () => {
  return (
    <div>
      <div className="flex flex-col mt-20">
        <h1 className="mb-10 text-2xl font-extrabold  opacity-90 animate__animated animate__fadeIn animate__delay-1s tracking-wide">
          Top Sellers
          <div className="flex justify-center mt-1">
            <div className="w-10 h-1 bg-red-50"></div>
          </div>
        </h1>
        <div className="flex justify-around">
          <ViewBoard images={Images} imageNames={ImagesName} delay={30} />
          <ViewBoard images={RiceImage} imageNames={RiceName} delay={20} />
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
