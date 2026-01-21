import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import BrandLoader from "./components/loading/BrandLoader";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setIsLoading(true);
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 350);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("no-scrollbar");
      document.documentElement.classList.add("no-scrollbar");
    } else {
      document.body.classList.remove("no-scrollbar");
      document.documentElement.classList.remove("no-scrollbar");
    }
    return () => {
      document.body.classList.remove("no-scrollbar");
      document.documentElement.classList.remove("no-scrollbar");
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {isLoading && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-white/70 backdrop-blur-sm">
          <BrandLoader />
        </div>
      )}
      <AppRoutes />
    </div>
  );
}
