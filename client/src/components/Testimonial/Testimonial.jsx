import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HiStar } from "react-icons/hi";
import review1 from "../../assets/images/review1.jpg";
import review2 from "../../assets/images/review2.jpg";
import review3 from "../../assets/images/review3.jpg";
import review4 from "../../assets/images/review4.jpg";
import review5 from "../../assets/images/review5.jpg";
import review6 from "../../assets/images/review6.jpg";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img
                src={review1}
                alt="patient"
                className="h-[50px] w-[50px] object-cover rounded-full"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Olivia Walker
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "Dr. Smith is a true lifesaver! His expertise and compassionate
              care have made all the difference in managing my chronic
              condition. I'm forever grateful for his dedication to improving my
              health and quality of life."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img
                src={review2}
                alt="patient"
                className="h-[50px] w-[50px] object-cover rounded-full"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Benjamin Carter
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I can't thank Dr. Patel enough for her attentive approach and
              thoroughness during my recent visit. She took the time to listen
              to my concerns and provided personalized treatment options that
              have greatly improved my symptoms. Highly recommend her to anyone
              in need of a caring and knowledgeable physician."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img
                src={review3}
                alt="patient"
                className="h-[50px] w-[50px] object-cover rounded-full"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Daniel Martinez
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "Dr. Jones is simply outstanding! His professionalism and warm
              demeanor immediately put me at ease. He explained my diagnosis and
              treatment plan in detail, ensuring I felt confident and informed
              every step of the way. I couldn't have asked for a better
              experience."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img
                src={review4}
                alt="patient"
                className="h-[50px] w-[50px] object-cover rounded-full"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Lucas Anderson
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I've been seeing Dr. Garcia for several years now, and I couldn't
              be happier with the level of care she provides. Her expertise in
              managing complex medical conditions is unmatched, and her genuine
              concern for her patients' well-being is truly commendable. Thank
              you, Dr. Garcia, for always going above and beyond."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img
                src={review5}
                alt="patient"
                className="h-[50px] w-[50px] object-cover rounded-full"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Michael Davis
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I recently had the pleasure of meeting with Dr. Kim for a routine
              check-up, and I was thoroughly impressed by her professionalism
              and attention to detail. She took the time to address all my
              questions and concerns, making me feel valued as a patient. I
              highly recommend Dr. Kim for anyone seeking top-notch medical
              care."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img
                src={review6}
                alt="patient"
                className="h-[50px] w-[50px] object-cover rounded-full"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Samantha Taylor
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "Dr. Nguyen is a phenomenal physician who truly goes the extra
              mile for her patients. Her empathetic bedside manner and expertise
              in her field make her a standout healthcare provider. I'm grateful
              to have her as my primary care doctor, and I wholeheartedly
              recommend her to others in search of exceptional medical care."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
