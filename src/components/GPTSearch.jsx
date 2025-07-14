import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black fixed -z-20 opacity-70">
        <img
          alt="bg-image"
          src={BG_IMG}
          className="h-screen md:w-screen object-cover"
        />
      </div>
      <div className="absolute  top-1/4 md:top-1/6">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
