import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routePaths";

import LandingPage from "../pages/Landing/LandingPage";
import Login from "../pages/Auth/Login";
import PasswordReset from "../pages/Auth/PasswordReset";
import CreateProperty from "../pages/Property/CreateProperty";
import MainLayout from "../components/layout/PageWrapper/MainLayout";
import AuthLayout from "../components/layout/PageWrapper/AuthLayout";
import Feed from "../pages/Feed/feed";
import RoleProtectedRoute from "./RoleProtectedRoute";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import VerificationLayout from "../components/layout/PageWrapper/VerificationLayout";
import VerifyPhoneNumber from "../pages/Auth/VerifyPhoneNumber";
import NewPassword from "../pages/Auth/NewPassword";
import Register from "../pages/Auth/Register";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Route>
      <Route element={<VerificationLayout />}>
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.PASSWORD_RESET} element={<PasswordReset />} />
        <Route
          path={ROUTES.VERIFY_PHONE_NUMBER}
          element={<VerifyPhoneNumber />}
        />
        <Route path={ROUTES.NEW_PASSWORD} element={<NewPassword />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<LandingPage />} />
        <Route path={ROUTES.FEED} element={<Feed />} />
      </Route>

      {/* Protected routes */}
      <Route element={<MainLayout />}>
        {/* LISTERS and ADMIN ONLY */}
        <Route
          path={ROUTES.CREATE_PROPERTY}
          element={
            <RoleProtectedRoute allowedRoles={["LISTERS", "ADMIN"]}>
              <CreateProperty />
            </RoleProtectedRoute>
          }
        />
      </Route>

      {/* ADMIN ONLY */}
      <Route
        path={ROUTES.ADMIN_DASHBOARD}
        element={
          <RoleProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminDashboard />
          </RoleProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
