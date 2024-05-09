import React from "react";
import FadeLoader from "react-spinners/FadeLoader.js";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <FadeLoader color="#FDA521" />
    </div>
  );
};

export default Loading;
