import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const GPTMovieSuggestions = () => {
  // @ts-ignore
  const moviesData = useSelector((store) => store.gpt.movieResult);
  return (
    moviesData && (
      <div className="flex align-top justify-center mt-6">
        <div className="bg-black z-10 w-[95%] h-[600px] pt-5 opacity-90 flex flex-wrap justify-center overflow-y-hidden hover:overflow-y-scroll ">
          {moviesData &&
            moviesData.results.map(
              (movie) =>
                movie.poster_path && (
                  <MovieCard key={movie.id} poster_path={movie.poster_path} />
                )
            )}
        </div>
      </div>
    )
  );
};

export default GPTMovieSuggestions;
