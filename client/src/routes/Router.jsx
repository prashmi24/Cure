import React from "react";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Contact from "../pages/Contact.jsx";
import Services from "../pages/Services.jsx";
import Signup from "../pages/Signup.jsx";
import Doctors from "../pages/Doctors/Doctors.jsx";
import DoctorDetails from "../pages/Doctors/DoctorDetails.jsx";
import MyAccount from "../dashboard/user/MyAccount.jsx";
import DocAccount from "../dashboard/doctor/DocAccount.jsx";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctor" element={<Doctors />} />
      <Route path="/doctor/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/doctor/profile/me"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <DocAccount />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
