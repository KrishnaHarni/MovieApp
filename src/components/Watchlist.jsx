import React, { useEffect, useState } from "react";

import genreIds from "../utility/genre";

function Watchlist({ watchlist, setWatchlist, removeFromWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let searchHandler = (e) => {
    setSearch(e.target.value);
  };

  let filterGenre = (genre) => {
    setCurrGenre(genre);
  };

  let sortInc = () => {
    let inc = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });

    setWatchlist([...inc]);
  };

  let sortDec = () => {
    let dec = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });

    setWatchlist([...dec]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreIds[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-2">
        {genreList.map((genre) => {
          return (
            <div
              className={
                currGenre == genre
                  ? "bg-blue-500 text-white text-xl rounded-lg px-10 py-1 my-2 cursor-pointer"
                  : "bg-gray-400 text-white text-xl rounded-lg px-10 py-1 my-2 cursor-pointer"
              }
              onClick={() => {
                filterGenre(genre);
              }}
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center my-4 gap-2">
        <input
          type="text"
          value={search}
          className="border-2 rounded-xl p-3 w-[28rem] bg-gray-200"
          placeholder="Search Movies"
          onChange={searchHandler}
        />
      </div>
      <div className="border border-gray-400 m-8 rounded-lg overflow-scroll sm:overflow-hidden p-1">
        <table className="w-full text-gray-800 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <div className="flex gap-2 justify-center">
                <div>
                  <img
                    onClick={sortInc}
                    className="cursor-pointer"
                    width="24"
                    height="24"
                    src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-up-arrow-arrows-tanah-basah-basic-outline-tanah-basah.png"
                    alt="external-up-arrow-arrows-tanah-basah-basic-outline-tanah-basah"
                  />
                </div>
                <th>Ratings</th>
                <div>
                  <img
                    onClick={sortDec}
                    className="cursor-pointer"
                    width="24"
                    height="24"
                    src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-down-arrow-arrows-tanah-basah-basic-outline-tanah-basah.png"
                    alt="external-down-arrow-arrows-tanah-basah-basic-outline-tanah-basah"
                  />
                </div>
              </div>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genreIds[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.original_title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-10">{movieObj.original_title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreIds[movieObj.genre_ids[0]]}</td>
                    <td>
                      <button
                        className="bg-red-500 text-white text-xl rounded-lg p-1 cursor-pointer"
                        onClick={() => {
                          removeFromWatchlist(movieObj);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
