import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black absolute -z-20">
        <img alt="bg-image" src={BG_IMG} />
      </div>
      <div className="absolute top-1/6">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
