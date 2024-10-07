import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HiStar } from "react-icons/hi";
import { testimonials } from "../../assets/data/testimonial";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000 }}
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
        {/* Map over the testimonial data and render each testimonial within a Swiper slide */}
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id || testimonial.name}>
            <div className="py-[30px] px-5 rounded-[13px] shadow-md">
              <div className="flex items-center gap-[13px]">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={`Photo of ${testimonial.name || "patient"}`}
                    className="h-[50px] w-[50px] object-cover rounded-full"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-[50px] w-[50px] bg-gray-200 rounded-full" />
                )}
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    {testimonial.name || "Anonymous"}
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    {/* Render star icons based on rating */}
                    {Array.from({ length: testimonial.rating || 0 }).map(
                      (_, index) => (
                        <HiStar
                          key={index}
                          className="text-yellowColor w-[18px] h-5"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              {testimonial.content ? (
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                  {testimonial.content}
                </p>
              ) : (
                <p className="text-[16px] leading-7 mt-4 text-gray-400 italic">
                  No review provided.
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
