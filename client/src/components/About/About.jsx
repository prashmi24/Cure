import React from "react";
import { Link } from "react-router-dom";
import about from "../../assets/images/about.jpg";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between gap-[50px] lg:gap[130px] xl:gap-flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[700px] z-10 order-2 lg:order-1">
            <img
              src={about}
              alt="about-img"
              className="h-[800px] w-fit object-cover"
            />
            {/* <div className="absolute z-20 bottom-4 w-[200px] md:w-[200px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src="" alt="aboutCard-img" />
            </div> */}
          </div>

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">
              Join thousands of satisfied users & experience the future of
              healthcare booking with Cure today!
            </h2>
            <p className="text-para">
              Cure is a revolutionary online platform dedicated to simplifying
              the process of booking appointments with healthcare professionals.
              With the mission of providing accessible and convenient healthcare
              services to everyone, we've created a user-friendly platform that
              connects patients with qualified doctors and medical facilities.
            </p>

            <p className="text-para mt-[30px]">
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
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
