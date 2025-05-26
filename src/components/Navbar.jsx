import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <>
      <div className="flex border space-x-10 items-center pl-3 py-4">
        <img
          width="58"
          height="58"
          src="https://img.icons8.com/emoji/48/clapper-board-emoji.png"
          alt="clapper-board-emoji"
        />
        <Link to="/" className="text-blue-400 text-2xl font-bold">
          Movies
        </Link>
        <Link to="/watchlist" className="text-blue-400 text-2xl font-bold">
          Watchlist
        </Link>
      </div>
    </>
  );
};

export default Navbar;
