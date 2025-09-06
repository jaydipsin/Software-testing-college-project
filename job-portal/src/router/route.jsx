// import { RouterObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AuthLanding from "../auth/auth-landing";
import Dashboard from "../dashboard/dashboard";
import Layout from "../dashboard/layout";
import AuthGurd from "../gurds/auth.gurd";

export const routes = [
  { path: "/auth-landing", element: <AuthLanding /> },
  {
    path: "/",
    element: <AuthGurd isLoggedIn={true} />, //** Now this value is static change during the real implementation
    children: [
      {
        element: <Layout />, // shared layout
        children: [
          { index: true, element: <Navigate to="/dashboard" replace /> },
          { path: "/dashboard", element: <Dashboard /> },
        ],
      },
    ],
  },
  { path: "*", element: <div>404 Not Found</div> },
];
