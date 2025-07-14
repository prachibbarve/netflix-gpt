import React, { useRef } from "react";
import lang from "../utils/LanguageConstants";
import { useSelector, useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieResults } from "../utils/GPTSlice";

const GPTSearchBar = () => {
  const searchTxt = useRef(null);
  const dispatch = useDispatch();

  const handleOnSearch = () => {
    const searchResults = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          searchTxt.current.value +
          "&include_adult=false&page=1&region=India",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
      dispatch(addMovieResults(json));
    };
    searchResults();
  };
  // @ts-ignore
  const LangKey = useSelector((store) => store.config.lang);
  return (
    <div className="w-screen">
      <div className="flex justify-center align-middle ">
        <form
          className="w-auto border-4 border-black"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchTxt}
            type="text"
            placeholder={lang[LangKey].getSearchPlaceholder}
            className="text-black bg-amber-50 px-4 py-2 w-96"
          />
          <button
            type="submit"
            className="bg-red-700 px-4 py-2 text-white cursor-pointer hover:bg-red-900"
            onClick={handleOnSearch}
          >
            {lang[LangKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
