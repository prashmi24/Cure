import React, { useState, useContext } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div>
      <span className="lg:hidden">
        <HiOutlineMenuAlt2
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </span>

      {isMenuOpen && (
        <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md w-max">
          {/* Mobile menu items go here */}
          <button
            onClick={() => setTab("overview")}
            className="w-full btn rounded-md"
          >
            Overview
          </button>

          <button
            onClick={() => setTab("appointments")}
            className="w-full btn rounded-md"
          >
            Appointments
          </button>

          <button
            onClick={() => setTab("settings")}
            className="w-full btn rounded-md"
          >
            Profile
          </button>

          <button
            onClick={handleLogout}
            className="w-full bg-primaryColor p-3 rounded-md text-white mt-5"
          >
            Logout
          </button>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md w-max">
        {/* Repeating button structure could be extracted to a function or component */}
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab("settings")}
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn rounded-md`}
        >
          Profile
        </button>

        <div className="mt-[100px] w-full">
          <button
            onClick={handleLogout}
            className="w-full bg-primaryColor p-3 text-white rounded-md"
          >
            Logout
          </button>
          <button className="w-full bg-red-500 mt-4 p-3 text-white rounded-md">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
