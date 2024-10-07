import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primaryColor mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl text-headingColor font-semibold mb-6">
          Oops! Page Not Found
        </h2>
        <p className="text-textColor mb-8">
          Sorry, the page you're looking for doesn't exist. It may have been
          moved or deleted.
        </p>
        <Link
          to="/"
          className="flex items-center justify-center bg-primaryColor text-white text-lg px-6 py-3 rounded-lg hover:bg-secondaryColor transition duration-300"
        >
          <FaHome className="mr-2" />
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
