import { Navigate } from "react-router-dom";
import { authStore } from "../store/auth.store";
import type { JSX } from "react";
import type { UserRole } from "../types/auth.types";

interface RoleProtectedRouteProps {
  allowedRoles: UserRole[];
  children: JSX.Element;
}

const RoleProtectedRoute = ({
  allowedRoles,
  children,
}: RoleProtectedRouteProps) => {
  const { isAuthenticated, user } = authStore;

  // Not logged in
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  // Role not allowed
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/feed" replace />;
  }

  return children;
};

export default RoleProtectedRoute;
