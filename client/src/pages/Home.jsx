import React from 'react'
// import imgaes
// import heroImg01 from '../assets/images/heroImg01';
// import heroImg02 from '../assets/images/heroImg02';
// import heroImg03 from '../assets/images/heroImg03';
//import icon
import {Link} from 'react-router-dom';
import {BsArrowRight} from "react-icons/bs";
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';

const Home = () => {
  return (
   <>
   <section className='hero-section pt-[60px] 2xl:h-[800px]'>
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-[90px] items-center justify between">
        <div>
          <div className="lg:w-[570px]">
            <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">We help patients live a healthy, longer life</h1>
            <p className='text-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quia molestiae nulla deserunt sit nemo maxime, deleniti, repellat, debitis quidem dolor recusandae magni eligendi fugiat!</p>
            <button className="btn">Request an Appointment</button>
          </div>

          <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>

            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
              <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
              <p className='text-para'>Years of Experience</p>
            </div>

            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
              <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
              <p className='text-para'>Clinic Location</p>
            </div>

            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
              <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
              <p className='text-para'>Patient Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="flex gap-[30px] justify-end">
          <div>
            <img className='w-full'
            src="{heroImg01}" alt="" />
          </div>
          <div className="mt-[30px]">
            <img  className='w-full mb-[30px]' src="{heroImg02}" alt="" />
            <img  className='w-full' src="{heroImg03}" alt="" />
          </div>
        </div>
      </div>
    </div>
   </section>

   {/* how it works */}

   <section>
    <div className="container">
      <div className='lg:w-[470px] mx-auto'>
        <h2 className='heading text-center'>Providing the best medical services</h2>
        <p className='text-para text-center'>World-class care for everyone. Our health system offers unmatched, expert health care.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        <div className='py-[30px] px-5'>
          <div className="flex items-center justify-center">
            <img src="" alt="icon" />
          </div>

          <div className='mt-[30px]'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World-class care for everyone. Our health system offers unmatched, expert health care.</p>

            <Link to='/doctors'className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
              <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
            </Link>
          </div>
        </div>

        <div className='py-[30px] px-5'>
          <div className="flex items-center justify-center">
            <img src="" alt="icon" />
          </div>

          <div className='mt-[30px]'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Location</h2>
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World-class care for everyone. Our health system offers unmatched, expert health care.</p>

            <Link to='/doctors'className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
              <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
            </Link>
          </div>
        </div>

        <div className='py-[30px] px-5'>
          <div className="flex items-center justify-center">
            <img src="" alt="icon" />
          </div>

          <div className='mt-[30px]'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World-class care for everyone. Our health system offers unmatched, expert health care.</p>

            <Link to='/doctors'className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
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
        <h2 className="heading text-center">Our medical services</h2>
        <p className="text-para text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, alias.</p>
      </div>

      <ServiceList/>
    </div>
   </section>
   </>
  )
};

export default Home;
