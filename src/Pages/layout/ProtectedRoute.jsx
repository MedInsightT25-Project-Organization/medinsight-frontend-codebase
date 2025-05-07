import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ProtectedRoute = ({ requiredRole }) => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

  // If not authenticated, redirect to role-specific login
  if (!isAuthenticated) {
    const redirectPath = requiredRole === 'hospital_admin' ? '/healthcare-sign-in' : '/patient-sign-in';
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  // If role doesn't match, redirect to unauthorized page
  if (user?.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  // User is authenticated and role matches
  return <Outlet />;
};

export default ProtectedRoute;
