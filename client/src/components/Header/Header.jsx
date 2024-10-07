import { useContext, useEffect, useRef } from "react";
import logo from "../../assets/images/icon.png";
import { NavLink, Link } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { AuthContext } from "../../context/AuthContext.jsx";
import { FaUser } from "react-icons/fa6";
import debounce from "lodash.debounce";

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
  // const handleStickyHeader = debounce(() => {
  //   if (window.scrollY > 80) {
  //     headerRef.current.classList.add("sticky__header");
  //   } else {
  //     headerRef.current.classList.remove("sticky__header");
  //   }
  // }, 50);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleStickyHeader);
  //   return () => window.removeEventListener("scroll", handleStickyHeader);
  // }, []);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      menuRef.current.classList.toggle("show__menu");
    }
  };

  //Function to get the profile URL based on role
  const getProfileURL = () => {
    return role === "doctor" ? "/doctor/profile/me" : "users/profile/me";
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link to="/">
            <div className="w-[100px] h-[100px] rounded-full">
              <img src={logo} alt="Cure logo" className="lazyload" />
            </div>
          </Link>

          {/* Navigation */}
          <nav
            className="navigation"
            ref={menuRef}
            aria-label="Primary Navigation"
          >
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
          </nav>

          {/* side navbar */}
          <div className="flex items-center gap-4">
            {/* Conditional rendering based on authentication */}
            {token && user ? (
              <Link to={getProfileURL} aria-label="User Profile">
                <FaUser className="w-[35px] h-[35px] cursor-pointer text-primaryColor" />
              </Link>
            ) : (
              <Link to="/login">
                <button className="btn" aria-label="Login">
                  Login
                </button>
              </Link>
            )}

            {/* Mobile menu toggle */}
            <span
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <CgMenuGridO className="w-6 h-6 cursor-pointer"></CgMenuGridO>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
