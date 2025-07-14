import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  //console.log(props);
  const { title, movies } = props;
  //console.log(movies);
  return (
    <div className="p-6">
      <h1 className="text-xl text-white mb-4">{title}</h1>
      <div className="flex overflow-x-hidden hover:overflow-x-scroll">
        <div className="flex">
          {movies &&
            movies?.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
