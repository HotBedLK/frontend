import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: JSX.Element;
}

const ProtectedRoute = ({ isAuthenticated, children }: ProtectedRouteProps) => {
  const isAuthReady = useAuthStore((s) => s.isAuthReady);

  if (!isAuthReady) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
