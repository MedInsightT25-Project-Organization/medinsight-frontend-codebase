// src/components/ProtectedRoute.jsx
import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";


const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation()
  if (!isAuthenticated) {
    return <Navigate to="/patient-sign-in" replace state={{ from: location }} />;
  }

  return (
    <div><Outlet /></div>
  );
};

export default ProtectedRoute;
