import React, { useState } from "react";
import Loader from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";
import useGetProfile from "../../hooks/useFetchData.jsx";
import { BASE_URL } from "../../config.js";
import Tabs from "./Tabs.jsx";
import star from "../../assets/images/star.png";
import DoctorAbout from "./../../pages/Doctors/DoctorAbout.jsx";
import DoctorProfileSettings from "./DoctorProfileSettings.jsx";
import Appointments from "./Appointments.jsx";
import { FaUser } from "react-icons/fa6";

const DocAccount = () => {
  // Fetching doctor profile data
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctor/profile/me`
  );

  // State for managing active tab
  const [tab, setTab] = useState("overview");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {/* Loader while loading */}
        {loading && !error && <Loader />}

        {/* Error message if error occurs */}
        {error && !loading && <Error />}

        {/* Render data if loaded successfully */}
        {!loading && !error && data && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            {/* Tabs for switching content */}
            <Tabs tab={tab} setTab={setTab} />

            {/* Main content area */}
            <div className="lg:col-span-2">
              {/* Pending approval message */}
              {data.isApproved === "pending" && (
                <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                  {/* Icon for info */}
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  {/* Message */}
                  <span className="sr-only">Info</span>
                  <div className="ml-3 ">
                    To get an approval please complete your profile. We'll
                    review manually and approve within 3 days
                  </div>
                </div>
              )}

              {/* Main content based on active tab */}
              <div className="mt-8">
                {tab === "overview" && (
                  <div>
                    <div className="flex items-center gap-4 mb-10">
                      <figure className="max-w-[200px] max-h-[200px]">
                        {/* Doctor's profile image */}
                        <img
                          src={data?.photo || FaUser}
                          alt="user-img"
                          className="w-full object-cover"
                        />
                      </figure>
                      <div>
                        {/* Specialty */}
                        <span className="bg-yellowColor text-white py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                          {data?.specialty || "Specialty Unavailable"}
                        </span>

                        {/* Doctor's name */}
                        <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
                          {data?.name || "Doctor's Name"}
                        </h3>

                        {/* Ratings */}
                        <div className="flex items-center gap-[6px]">
                          <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                            <img src={star} alt="rating" className="h-[20px]" />
                            {data?.avgRating || 0}
                          </span>

                          <span className=" text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                            {data?.totalRating || 0} reviews
                          </span>
                        </div>

                        {/* Doctor's bio */}
                        <p className="text-para font-[15px] lg:max-w-[390px] leading-6">
                          {data?.bio || "No bio available."}
                        </p>

                        {/* Component for doctor's details */}
                        <DoctorAbout
                          name={data?.name || ""}
                          about={data?.about || ""}
                          qualifications={data?.qualifications || []}
                          experiences={data?.experiences || []}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Rendering tabs */}
                {tab === "appointments" && (
                  <Appointments appointments={data?.appointments || []} />
                )}
                {tab === "settings" && (
                  <DoctorProfileSettings doctorData={data} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DocAccount;
