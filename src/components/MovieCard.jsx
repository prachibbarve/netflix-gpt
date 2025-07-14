import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = (props) => {
  return (
    <div className="w-40 mr-3 mt-3 bg-cover">
      <img alt="" src={IMG_CDN_URL + props.poster_path}></img>
    </div>
  );
};

export default MovieCard;
