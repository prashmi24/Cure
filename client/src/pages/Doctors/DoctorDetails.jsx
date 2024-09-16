import React, { useState } from "react";
import doc1 from "../../assets/images/doc1.jpg";
import star from "../../assets/images/star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  const { id } = useParams();
  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctor/${id}`);

  const {
    name = "",
    phone = "",
    bio = "",
    gender = "",
    specialty = "",
    amount = "",
    qualifications = [],
    experiences = [],
    timeSlots = [],
    about = "",
    photo = "",
    avgRating = "N/A",
    totalRating = 0,
  } = doctor || {};

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loader />}
        {error && <Error />}
        {!loading && !error && (
          <div className="grid gap-[50px]">
            <div className="flex flex-col items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img
                  src={photo}
                  alt={`Photo of Dr. ${name}`}
                  className="w-full"
                />
              </figure>
              <div>
                <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  {specialty}
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  {name}
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={star} alt="star-icon" className="h-[20px]" />
                    {avgRating}
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-textColor">
                    ({totalRating})
                  </span>
                </div>
                <p className="text-para text-[14px] leading-5 md:text-[15px] max-w-[390px]">
                  {bio}
                </p>
              </div>

              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab === "about" &&
                    "border-b border-solid border-primaryColor"
                  }py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  About
                </button>

                <button
                  onClick={() => setTab("feedback")}
                  className={`${
                    tab === "feedback" &&
                    "border-b border-solid border-primaryColor"
                  }py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Feedback
                </button>
              </div>

              <div className="mt-[50px]">
                {tab === "about" && (
                  <DoctorAbout
                    name={name}
                    about={about}
                    qualifications={qualifications}
                    experiences={experiences}
                  />
                )}
                {tab === "feedback" && (
                  <Feedback
                    reviews={doctor.reviews || []}
                    totalRating={totalRating}
                  />
                )}
              </div>
            </div>

            <div>
              <SidePanel
                doctorId={doctor._id}
                amount={amount}
                timeSlots={timeSlots}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDetails;
