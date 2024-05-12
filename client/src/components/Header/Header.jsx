import { useContext, useEffect, useRef } from "react";
import logo from "../../assets/images/icon.png";
import { NavLink, Link } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { AuthContext } from "../../context/AuthContext.jsx";
import { FaUser } from "react-icons/fa6";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctor",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  // Refs for sticky header and mobile menu
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  // Context for user authentication
  const { user, role, token } = useContext(AuthContext);

  // Function to handle sticky header
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  // Function to toggle mobile menu
  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="w-[100px] h-[100px] rounded-full">
            <img src={logo} alt="logo" />
          </div>

          {/* Navigation */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* side navbar */}

          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                {/* Conditional rendering based on authentication */}
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctor/profile/me"
                      : "users/profile/me"
                  }`}
                >
                  <figure>
                    <FaUser className="w-5 h-5 cursor-pointer text-primaryColor" />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <CgMenuGridO className="w-6 h-6 cursor-pointer"></CgMenuGridO>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
