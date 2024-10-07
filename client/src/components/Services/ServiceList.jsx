import React from "react";
import { services } from "./../../assets/data/services";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  return (
    <>
      {/* Rendering a grid of service cards */}
      {services.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {services.map((item) => (
            <ServiceCard
              key={item.id || `${item.name}-${Math.random()}`}
              {...item}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-textColor mt-[30px]">
          No services available at the moment.
        </p>
      )}
    </>
  );
};

export default ServiceList;
