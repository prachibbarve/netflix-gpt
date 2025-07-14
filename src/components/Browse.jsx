import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// @ts-ignore
import MainContainer from "./MainContainer";
// @ts-ignore
import SecondaryComponent from "./SecondaryComponent";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  //fetch data from TMDB API and update store

  return (
    <>
      <Header />
      <div className="bg-black">
        {/**
         * main container
         *    background video
         *    video title
         *    watch button
         * secondary container
         *    movielist *n
         *      cards
         */}
        {showGptSearch ? (
          <GPTSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryComponent />
          </>
        )}
      </div>
    </>
  );
};

export default Browse;
