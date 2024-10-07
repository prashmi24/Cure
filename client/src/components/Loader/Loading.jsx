import React from "react";
import PropTypes from "prop-types";
import FadeLoader from "react-spinners/FadeLoader.js";

const Loading = ({ color = "#9769d1", size = 20, label = "loading" }) => {
  return (
    // Display a loading spinner in the center of the screen
    <div
      className="flex items-center justify-center w-full h-full"
      aria-label="label"
      role="status"
    >
      <FadeLoader color={color} height={size} width={size / 10} />
    </div>
  );
};

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  label: PropTypes.string,
};

export default Loading;
