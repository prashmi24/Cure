import React from "react";
import FadeLoader from "react-spinners/FadeLoader.js";

const Loading = () => {
  return (
    // Display a loading spinner in the center of the screen
    <div className="flex items-center justify-center w-full h-full">
      <FadeLoader color="#FDA521" />
    </div>
  );
};

export default Loading;
