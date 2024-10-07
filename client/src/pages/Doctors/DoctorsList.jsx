import React, { useCallback } from "react";
import DoctorCard from "./DoctorCard";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";

const DoctorsList = () => {
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctor`);

  // Retry function in case of error
  const handleRetry = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <>
      {loading && <Loader />}

      {error && (
        <div className="text-center">
          <Error />
          <button
            onClick={handleRetry}
            className="btn mt-4 bg-primaryColor text-white px-4 py-2 rounded"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {doctors?.length > 0 ? (
            doctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))
          ) : (
            <p className="text-center text-[18px] leading-6">
              No doctors found at the moment.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default DoctorsList;
