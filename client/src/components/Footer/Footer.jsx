import React from "react";
import icon from "../../assets/images/icon.png";
import { Link } from "react-router-dom";
import { RiTwitterFill } from "react-icons/ri";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";

// Define social media links
const socialLinks = [
  {
    path: "",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "",
    icon: <RiTwitterFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Cure",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/doctor",
    display: "Find a Doctor",
  },
  {
    path: "/doctor",
    display: "Book an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Write a Review",
  },
];

const quickLinks03 = [
  {
    path: "/contact",
    display: "Contact Us",
  },
  {
    path: "/",
    display: "Privacy Policy",
  },
  {
    path: "/",
    display: "Terms of Service",
  },
  {
    path: "/",
    display: "Careers",
  },
];

const QuickLinksSection = ({ title, links }) => (
  <div>
    <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
      {title}
    </h2>
    <ul>
      {links.map((item, index) => (
        <li key={index} className="mb-4">
          <Link
            to={item.path}
            className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor"
          >
            {item.display}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  // Get current year for the copyright
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          {/* Logo and copyright */}
          <div>
            <img
              src={icon}
              alt="Cure logo"
              className="object-fit w-auto h-[150px] rounded-full max-w-full"
            />
            <p className="text-sm leading-7 font-[400] text-textColor mt-4">
              Copyright &#169; {year} Cure
            </p>
            {/* Social media links */}
            <h2 className="text-[20px] leading-[30px] font-[700] mb-4 text-headingColor">
              Follow us on
            </h2>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  href={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <QuickLinksSection title="Quick Links" links={quickLinks01} />
          <QuickLinksSection title="I want to" links={quickLinks02} />
          <QuickLinksSection title="Support" links={quickLinks03} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
