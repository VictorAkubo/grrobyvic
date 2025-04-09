{
  /*import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("token"); // Check login state

  return !isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
*/
}
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated =true; // Replace this with your actual authentication logic

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
