import React from "react";

const VideoTitle = (props) => {
  console.log(props);
  return (
    <div className="text-white w-screen aspect-video absolute z-10  pt-[15%] px-10  bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold py-4 px-8">{props.mtitle}</h1>
      <div className=" px-8 text-lg w-1/3">{props.overview}</div>
      <div className="mx-8 flex my-2">
        <button className="bg-amber-50 text-sm text-black px-4 py-2 cursor-pointer rounded-lg flex hover:opacity-85">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
          Play
        </button>
        <button className=" bg-gray-600 text-sm p-2 ml-2.5 cursor-pointer rounded-lg flex justify-center align-middle hover:opacity-85">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
