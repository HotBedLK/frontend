import { Navigate } from "react-router-dom";
import type { JSX } from "react";
import type { UserRole } from "../types/auth.types";
import { useAuthStore } from "../store/auth.store";
import { ROUTES } from "./routePaths";

interface RoleProtectedRouteProps {
  allowedRoles: UserRole[];
  children: JSX.Element;
}

const RoleProtectedRoute = ({
  allowedRoles,
  children,
}: RoleProtectedRouteProps) => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const user = useAuthStore((s) => s.user);

  // Not logged in
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  // Role not allowed
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={ROUTES.HOME_FEED} replace />;
  }

  return children;
};

export default RoleProtectedRoute;
