import { Navigate, Outlet } from "react-router-dom";

export default function AuthGurd({isLoggedIn}) {
  return isLoggedIn ? <Outlet /> : <Navigate to="/auth-landing" replace/>;
}
