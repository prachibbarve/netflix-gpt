import React from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (props) => {
  const dispatch = useDispatch();
  //fetch movie trailor and update trailer data in store
  const movieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        props.movieid +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterdata = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterdata.length ? filterdata[0] : json.results[0]; //if trailer not found then show the first video available

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    movieVideos();
  }, []);
};

export default useMovieTrailer;
