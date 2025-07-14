import React from "react";
import { useSelector } from "react-redux";
// @ts-ignore
import VideoBackground from "../components/VideoBackground";
// @ts-ignore
import VideoTitle from "../components/VideoTitle";

const MainContainer = () => {
  // @ts-ignore
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;
  const maninMovie = movies[0];
  //console.log(maninMovie);
  const { id, original_title, overview } = maninMovie;
  return (
    <div className="relative pt-[40%] md:pt-0">
      <VideoTitle mtitle={original_title} overview={overview} />
      <VideoBackground movieid={id} />
    </div>
  );
};

export default MainContainer;
