import React from "react";
import FadeLoader from "react-spinners/FadeLoader.js";

const Loading = ({ color = "#FDA521", size = 150 }) => {
  return (
    // Display a loading spinner in the center of the screen
    <div
      className="flex items-center justify-center w-full h-full"
      aria-label="loading"
      role="status"
    >
      <FadeLoader color={color} height={size} width={size / 10} />
    </div>
  );
};

export default Loading;
