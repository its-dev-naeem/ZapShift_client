import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  let { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname} replace />;
  }

  return children;
};

export default PrivateRoute;
