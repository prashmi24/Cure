import React from "react";
import PropTypes from "prop-types";

const Error = ({ errorMessage = "An unexpected error occured." }) => {
  return (
    <div
      className="flex items-center justify-center w-full h-full"
      role="alert"
      aria-live="assertive"
    >
      <p
        className="
        text-headingColor text-[20px] leading-[30px] font-semibold"
      >
        {errorMessage}
      </p>
    </div>
  );
};

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default Error;
