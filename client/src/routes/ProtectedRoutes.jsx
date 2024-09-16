import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, allowedRoles = [] }) => {
  const { token, role } = useContext(AuthContext);

  if (token && allowedRoles.includes(role)) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
