import React from "react";

function MovieCard({
  movieObj,
  poster_path,
  name,
  rating,
  addToWatchlist,
  removeFromWatchlist,
  watchlist,
}) {
  function doesMovieContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="relative h-[50vh] w-[300px] bg-center bg-cover rounded-xl m-5 flex items-end hover:scale-110 duration-300"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div className="absolute top-3 left-2 flex flex-row items-center bg-black/60 rounded-xl p-2">
        <img
          width="28"
          height="28"
          src="https://img.icons8.com/color/48/filled-star--v1.png"
          alt="filled-star--v1"
        />
        <p className="text-white font-bold">{rating}</p>
      </div>

      {doesMovieContain(movieObj) ? (
        <div
          className="absolute top-3 right-2 text-3xl bg-black/60 rounded-xl p-1 cursor-pointer"
          onClick={() => {
            removeFromWatchlist(movieObj);
          }}
        >
          &#10060;
        </div>
      ) : (
        <div
          className="absolute top-3 right-2 text-3xl bg-black/60 rounded-xl p-1 cursor-pointer"
          onClick={() => {
            addToWatchlist(movieObj);
          }}
        >
          &#128150;
        </div>
      )}

      <div className="text-white font-bold w-full bg-black text-center rounded-b-xl  py-2">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
