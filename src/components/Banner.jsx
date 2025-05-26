import React from "react";
import banner from "../assets/banner.jpg";
function Banner() {
  return (
    <div
      className="h-[250px] sm:h-[550px] w-[250px] sm:w-[980px] bg-contain bg-no-repeat bg-center mx-auto mt-6 flex items-end"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="mx-auto bg-gray-900/60 w-[976px]">
        <div className="text-white font-bold text-2xl text-center">
          Avengers End Game
        </div>
      </div>
    </div>
  );
}

export default Banner;
