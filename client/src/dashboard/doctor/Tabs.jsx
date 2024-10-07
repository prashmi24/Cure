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

  const menuItems = [
    { name: "Overview", key: "overview" },
    { name: "Appointments", key: "appointments" },
    { name: "Profile", key: "settings" },
  ];

  const renderMenuItem = (item) => (
    <button
      key={item.key}
      onClick={() => setTab(item.key)}
      className={`${
        tab === item.key
          ? "bg-indigo-100 text-primaryColor"
          : "bg-transparent text-headingColor"
      } w-full btn rounded-md`}
    >
      {item.name}
    </button>
  );

  return (
    <div>
      {/* Mobile Menu Toggle */}
      <span className="lg:hidden">
        <HiOutlineMenuAlt2
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </span>

      {isMenuOpen && (
        <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md w-max">
          {menuItems.map(renderMenuItem)}

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
        {menuItems.map(renderMenuItem)}

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
