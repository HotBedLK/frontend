import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
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
          <div className="flex flex-col items-center gap-3">
            <img
              src="/images/hotbedlk-logo.png"
              alt="Hotbed.lk"
              className="h-8 w-auto"
            />
            <div className="flex items-center gap-2">
              <span className="dot-blink h-2 w-2 rounded-full bg-[var(--primary-color)]" />
              <span className="dot-blink dot-blink-delay-1 h-2 w-2 rounded-full bg-[var(--primary-color)]" />
              <span className="dot-blink dot-blink-delay-2 h-2 w-2 rounded-full bg-[var(--primary-color)]" />
            </div>
          </div>
        </div>
      )}
      <AppRoutes />
    </div>
  );
}
