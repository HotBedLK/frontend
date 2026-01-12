import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="flex-1 container mx-auto">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
