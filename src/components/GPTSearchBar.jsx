import React from "react";
import lang from "../utils/LanguageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  // @ts-ignore
  const LangKey = useSelector((store) => store.config.lang);
  return (
    <div className="w-screen">
      <div className="flex justify-center align-middle ">
        <form className="w-auto border-4 border-black">
          <input
            type="text"
            placeholder={lang[LangKey].getSearchPlaceholder}
            className="text-black bg-amber-50 px-4 py-2 w-96"
          />
          <button
            type="submit"
            className="bg-red-700 px-4 py-2 text-white cursor-pointer hover:bg-red-900"
          >
            {lang[LangKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
