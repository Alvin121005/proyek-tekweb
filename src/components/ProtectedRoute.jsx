import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated"); 

  if (!isAuthenticated) {
    return <Navigate to="/" />; 
  }

  return children;
};

export default ProtectedRoute;
