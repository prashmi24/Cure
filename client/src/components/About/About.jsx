import React from "react";
import { Link } from "react-router-dom";
import about from "../../assets/images/about.jpg";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between gap-[50px] lg:gap[130px] xl:gap-flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[700px] z-10 order-2 lg:order-1">
            <img src={about} alt="about-img" className="h-[500px] w-fit " />
            {/* <div className="absolute z-20 bottom-4 w-[200px] md:w-[200px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src="" alt="aboutCard-img" />
            </div> */}
          </div>

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est modi
              explicabo ad, totam quasi delectus velit repellat consequatur ut
              facere!
            </p>

            <p className="text-para mt-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quidem autem numquam optio ab fugiat pariatur quod nam ex maiores
              error vel nobis cumque facere libero explicabo, consectetur,
              repudiandae porro consequuntur saepe tenetur corporis rem? Facere
              quod sint nam consequuntur tempora, laborum architecto ullam nihil
              cupiditate impedit aliquid, libero rerum.
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
