import React from "react";
import heroImg from "../assets/images/heroImg.jpg";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import feature from "../assets/images/feature.jpg";
import DoctorsList from "./Doctors/DoctorsList";
import FaqList from "../components/Faq/FaqList";
import faq from "../assets/images/faq.jpg";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <section className="hero-section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Book your next healthcare appointment with
                  <span className="text-primaryColor"> Cure!</span>
                </h1>
                <p className="text-para">
                  Are you in need of medical assistance? Look no further! With
                  Cure, you can easily schedule appointments with trusted
                  doctors in your area. Our user-friendly platform connects you
                  with a wide range of healthcare professionals, ensuring that
                  you find the perfect match for your needs.
                </p>
                <button className="btn flex items-center gap-[3px]">
                  Request an Appointment
                  <span>
                    <FaRegArrowAltCircleRight />
                  </span>
                </button>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    10+
                  </h2>
                  <span className="w-[100px] h-2 bg-[#fda521] rounded-full block mt-[-14px]"></span>
                  <p className="text-para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    150+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text-para">Expert Doctors</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-[#0a7273] rounded-full block mt-[-14px]"></span>
                  <p className="text-para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg} alt="" />
              </div>
              {/* <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={} alt="" />
                <img className="w-full" src={heroImg3} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* how it works */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              We prioritize your health & convenience
            </h2>
            <p className="text-para text-center">
              Simply log on to a website or app and book an appointment from
              anywhere, at any time!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center ">
                <img src={icon1} alt="icon" className="w-[200px] h-[200px]" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Explore profiles of doctors near you, complete with detailed
                  information about their specialties, qualifications, and
                  availability. Read reviews from other patients to make an
                  informed decision.
                </p>

                <Link
                  to="/doctor"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon2} alt="icon" className="w-[200px] h-[200px]" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Enter your location and the type of doctor you're looking for.
                  Whether it's a primary care physician, a specialist, or a
                  dentist, we've got you covered.
                </p>

                <Link
                  to="/doctor"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon3} alt="icon" className="w-[200px] h-[200px]" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Once you've found the right doctor, simply select a convenient
                  time slot from their schedule and book your appointment
                  instantly. No more waiting on hold or playing phone tag.
                </p>

                <Link
                  to="/doctor"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <About></About>

      {/* services */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Explore Our Healthcare Offerings
            </h2>
            <p className="text-para text-center">
              From primary care physicians to specialists in fields such as
              cardiology, dermatology, and pediatrics, we've got you covered.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Convenient Features for Seamless Experience
              </h2>
              <ul className="pl-4">
                <li className="text-para">
                  <strong className="text-primaryColor">ReminderGuard:</strong>
                  Stay on Track with Appointment Reminders
                </li>
                <li className="text-para">
                  <strong className="text-primaryColor">SecurePay Plus:</strong>
                  Hassle-Free, Secure Payment Options
                </li>
                <li className="text-para">
                  <strong className="text-primaryColor">
                    AnytimeCare Access:
                  </strong>
                  24/7 Appointment Booking Convenience
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn more</button>
              </Link>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={feature} alt="feature_img" className="w-fit" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Meet Our Healthcare Providers
            </h2>
            <p className="text-para text-center">
              At Cure, we're committed to connecting you with healthcare
              providers who prioritize your health and wellness. Explore our
              profiles to find the perfect match for your healthcare needs, and
              take the first step towards a healthier tomorrow.
            </p>
          </div>
          <DoctorsList />
        </div>
      </section>

      {/* faq */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block mt-[100px]">
              <img src={faq} alt="faq-img" />
            </div>

            <div className="w-full md:w-1/2 ml-[20px]">
              <h2 className="heading">Frequently Asked Questions</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* testimonial */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Our doctors have earned over 5,000+ reviews on Google!
            </h2>
            <p className="text-para text-center">
              Hear directly from other patients about their experiences with our
              healthcare providers.
            </p>
          </div>
          <Testimonial></Testimonial>
        </div>
      </section>
    </>
  );
};

export default Home;
