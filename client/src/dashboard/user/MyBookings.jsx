import React from "react";
import useFetchData from "../../hooks/useFetchData.jsx";
import { BASE_URL } from "../../config.js";
import DoctorCard from "./../../pages/Doctors/DoctorCard.jsx";
import Loading from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error} />;
  }

  const validAppointments = Array.isArray(appointments) ? appointments : [];

  return validAppointments.length > 0 ? (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {validAppointments.map((doctor) => (
        <DoctorCard doctor={doctor} key={doctor._id} />
      ))}
    </div>
  ) : (
    <h2 className="mt-5 text-center text-headingColor leading-7 text-[20px] font-semibold">
      No data found! Book an appointment
    </h2>
  );
};

export default MyBookings;
