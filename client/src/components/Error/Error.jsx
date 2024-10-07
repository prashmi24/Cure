import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Error = ({ errorMessage = "An unexpected error occured.", onRetry }) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full"
      role="alert"
      aria-live="assertive"
      tabIndex="0"
    >
      <p
        className="
        text-headingColor text-[20px] leading-[30px] font-semibold mb-4"
      >
        {errorMessage}
      </p>

      {onRetry ? (
        <button onClick={onRetry} className="btn" aria-label="Retry the action">
          Retry
        </button>
      ) : (
        <Link to="/" className="btn" aria-label="Go back to home">
          Go Home
        </Link>
      )}
    </div>
  );
};

Error.propTypes = {
  errorMessage: PropTypes.string,
  onRetry: PropTypes.func,
};

export default Error;
