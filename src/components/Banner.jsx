import React from "react";

function Banner() {
  return (
    <div
      className="h-[250px] sm:h-[550px] w-[250px] sm:w-[1200px] bg-contain bg-no-repeat bg-center mx-auto mt-6 flex items-end"
      style={{
        backgroundImage:
          "url(https://ww2.kqed.org/app/uploads/sites/12/2015/04/the-avengers-800x450.jpg)",
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
