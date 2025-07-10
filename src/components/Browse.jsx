import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// @ts-ignore
import MainContainer from "./MainContainer";
// @ts-ignore
import SecondaryComponent from "./SecondaryComponent";
const Browse = () => {
  useNowPlayingMovies();
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
        <MainContainer />
        <SecondaryComponent />
      </div>
    </>
  );
};

export default Browse;
