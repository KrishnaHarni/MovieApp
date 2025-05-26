import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({ addToWatchlist, removeFromWatchlist, watchlist }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");

  const prev = () => {
    if (page == 1) {
      setPage(page);
    } else {
      setPage(page - 1);
    }
  };
  const next = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=Enter Your API Key&language=en-US&page=${page}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      })
      .catch(function (err) {
        setError(err.message);
      });
  }, [page]);

  return (
    <div>
      <div>
        <h1 className="text-center text-xl mt-2 font-bold p-4">
          Trending Movies
        </h1>
      </div>
      <div className="text-center font-bold">
        {error && <p className="text-3xl text-red-600">{error}</p>}
      </div>
      <div className="flex flex-row flex-wrap justify-around">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              movieObj={movieObj}
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              rating={movieObj.vote_average}
              addToWatchlist={addToWatchlist}
              removeFromWatchlist={removeFromWatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination page={page} prev={prev} next={next} />
    </div>
  );
}

export default Movies;
