import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loader/Loading.jsx";

const ProtectedRoutes = ({ children, allowedRoles = [] }) => {
  const { token, role } = useContext(AuthContext);
  const location = useLocation();

  // If no token is present, user is not authenticated
  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // If allowedRoles is empty, allow access to any authenticated user
  if (allowedRoles.length === 0 || allowedRoles.includes(role)) {
    return children;
  }

  // If user role doesn't match allowed roles, redirect to login
  return <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
