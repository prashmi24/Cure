import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes.jsx";
import Loading from "../components/Loader/Loading.jsx";

const Home = lazy(() => import("../pages/Home.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));
const Services = lazy(() => import("../pages/Services.jsx"));
const Signup = lazy(() => import("../pages/Signup.jsx"));
const Doctors = lazy(() => import("../pages/Doctors/Doctors.jsx"));
const DoctorDetails = lazy(() => import("../pages/Doctors/DoctorDetails.jsx"));
const MyAccount = lazy(() => import("../dashboard/user/MyAccount.jsx"));
const DocAccount = lazy(() => import("../dashboard/doctor/DocAccount.jsx"));
const NotFound = lazy(() => import("../pages/NotFound.jsx"));

const Routers = () => {
  return (
    <Suspense fallback={<Loading />}>
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
