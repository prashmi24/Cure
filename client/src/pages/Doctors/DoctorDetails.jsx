import React from "react";
import doc1 from "../../assets/images/doc1.jpg";
import star from "../../assets/images/star.png";

const DoctorDetails = () => {
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2"></div>
          <div className="flex items-center gap-5">
            <figure className="max-w-[200px] max-h-[200px]">
              <img src={doc1} alt="doctor-img" className="w-full" />
            </figure>
            <div>
              <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                Surgeon
              </span>
              <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                Rashmi Patil
              </h3>
              <div className="flex items-center gap-[6px]">
                <span lassName="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                  <img src={star} alt="star-icon" className="h-[20px]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
