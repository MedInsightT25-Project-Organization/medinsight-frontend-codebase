import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useProfile } from "../../contexts/PatientContexts/PatientProfileContext";
import { useHealthcareProfile } from "../../contexts/HealthcareContext/HealthcareProfileContext";

const ProtectedRoute = ({ requiredRole }) => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

  // Patient context
  const {
    hasCompletedOnboarding: patientOnboarding,
    isEmailVerified: isPatientEmailVerified,
    loading: patientLoading,
    requiresRedirect: patientRedirect
  } = useProfile();

  // Healthcare context
  const {
    hasCompletedOnboarding: hospitalOnboarding,
    isEmailVerified: isHospitalEmailVerified,
    loading: hospitalLoading
  } = useHealthcareProfile();

  // Not authenticated — redirect to appropriate sign-in
  if (!isAuthenticated) {
    const redirectPath = requiredRole === 'hospital_admin' ? '/healthcare-sign-in' : '/patient-sign-in';
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  // Role mismatch — redirect to unauthorized
  if (user?.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  // -------------------------
  // Role-specific checks
  // -------------------------

  const isLoading = patientLoading || hospitalLoading;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (requiredRole === 'patient') {
    if (!isPatientEmailVerified && location.pathname !== '/verify-email') {
      return <Navigate to="/verify-email" replace state={{ from: location }} />;
    }

    if (!patientOnboarding && !location.pathname.startsWith('/patient-form')) {
      return <Navigate to="/patient-form-one" replace state={{ from: location }} />;
    }
  }

  if (requiredRole === 'hospital_admin') {
    if (!isHospitalEmailVerified && location.pathname !== '/verify-email') {
      return <Navigate to="/verify-email" replace state={{ from: location }} />;
    }

    if (!hospitalOnboarding && !location.pathname.startsWith('/hospital-form')) {
      return <Navigate to="/hospital-form-one" replace state={{ from: location }} />;
    }
  }

  // All checks passed
  return <Outlet />;
};

export default ProtectedRoute;
