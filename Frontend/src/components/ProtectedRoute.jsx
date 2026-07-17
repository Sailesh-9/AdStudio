import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

/* Requires a signed-in session; otherwise redirects to /login. */
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}
