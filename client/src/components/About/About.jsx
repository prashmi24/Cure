import React from "react";
import { Link } from "react-router-dom";
import about from "../../assets/images/about.jpg";

// About component displaying information about the platform
const About = () => {
  return (
    <>
      <div className="container">
        {/* Flex container for responsive layout */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Image section */}
          <div className="relative  w-full lg:w-1/2 xl:w-1/3 order-1 lg:order-2">
            <img
              src={about}
              alt="about-img"
              className="h-[800px] w-fit object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 xl:w-[670px] order-2 lg:order-1">
            <h2 className="heading">
              Join thousands of satisfied users & experience the future of
              healthcare booking with Cure today!
            </h2>
            <p className="text-para mt-4">
              Cure is a revolutionary online platform dedicated to simplifying
              the process of booking appointments with healthcare professionals.
              With the mission of providing accessible and convenient healthcare
              services to everyone, we've created a user-friendly platform that
              connects patients with qualified doctors and medical facilities.
            </p>

            <p className="text-para mt-8">
              Our platform was born out of the recognition that navigating the
              healthcare system can be overwhelming and time-consuming. Whether
              you're seeking routine check-ups, specialized treatments, or
              urgent care, finding the right doctor and scheduling appointments
              shouldn't be a hassle. That's where Cure comes in. We believe that
              everyone deserves easy access to quality healthcare. That's why
              we've partnered with a vast network of healthcare providers
              spanning various specialties and locations. From primary care
              physicians to specialists in fields such as cardiology,
              dermatology, and pediatrics, we've got you covered.
            </p>
            {/* Learn More button linking to homepage */}
            <Link to="/">
              <button className="btn mt-8">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
