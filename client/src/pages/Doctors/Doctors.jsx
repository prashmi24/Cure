import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";

const Doctors = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query.trim());
    }, 700);
    return () => clearTimeout(timeout);
  }, [query]);

  const {
    data: doctors,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctor?query=${debounceQuery}`);

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={() => setDebounceQuery(query.trim())}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && doctors && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              {doctors?.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Doctors;
