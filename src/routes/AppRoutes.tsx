import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routePaths";

import LandingPage from "../pages/Landing/LandingPage";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import CreateProperty from "../pages/Property/CreateProperty";
import MainLayout from "../components/layout/PageWrapper/MainLayout";

const AppRoutes = () => {
  const isAuthenticated = false; // replace with real auth state

  return (
    <Routes>
      {/* Public routes */}
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<LandingPage />} />
      </Route>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />

      {/* Protected routes */}
      <Route element={<MainLayout />}>
        <Route
          path={ROUTES.CREATE_PROPERTY}
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <CreateProperty />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
