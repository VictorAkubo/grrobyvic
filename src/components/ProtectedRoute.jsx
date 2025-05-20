import { useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate()
  // Check if the access token exists in localStorage
  const isAuthenticated = localStorage.getItem("access_token");
  useEffect(() => {
    isAuthenticated && navigate("/")
  }, [isAuthenticated])

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
