import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryComponent = () => {
  // @ts-ignore
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  console.log(movies.nowPlayingMovies);
  /**
   * movie list - popular
   *    card* n
   * movie list - Now Playing
   * movie list - trending
   * movie list - horror movies
   */
  return (
    movies && (
      <div className="bg-black w-screen">
        <div className="-mt-52 relative z-10 m-4">
          <MovieList
            // @ts-ignore
            title={"Now Playing"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            // @ts-ignore
            title={"Top Rated"}
            movies={movies.TopRatedMovies}
          />
          <MovieList
            // @ts-ignore
            title={"Upcoming"}
            movies={movies.UpcomingMovies}
          />
          <MovieList
            // @ts-ignore
            title={"Popular"}
            movies={movies.PopularMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryComponent;
