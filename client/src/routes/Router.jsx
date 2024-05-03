import React from "react";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Contact from "../pages/Contact.jsx";
import Services from "../pages/Services.jsx";
import Signup from "../pages/Signup.jsx";
import Doctors from "../pages/Doctors/Doctors.jsx";
import DoctorDetails from "../pages/Doctors/DoctorDetails.jsx";
import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default Routers;
