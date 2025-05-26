import React from "react";

function Pagination({ page, prev, next }) {
  return (
    <div className="w-fill bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 flex justify-center items-center p-1 gap-6">
      <img
        width="48"
        height="48"
        src="https://img.icons8.com/fluency/48/long-arrow-left.png"
        alt="long-arrow-left"
        className="cursor-pointer hover:scale-110 duration-150"
        onClick={prev}
      />
      <h1 className="font-bold text-violet-900 text-3xl">{page}</h1>
      <img
        width="48"
        height="48"
        src="https://img.icons8.com/fluency/48/long-arrow-right.png"
        alt="long-arrow-right"
        className="cursor-pointer hover:scale-110 duration-150"
        onClick={next}
      />
    </div>
  );
}

export default Pagination;
