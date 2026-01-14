import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="flex-1">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
