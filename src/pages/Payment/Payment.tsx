import { useState } from "react";
import SubscriptionDetailsCard from "../../components/payment/SubscriptionDetailsCard";

export const Payment = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <button
        onClick={() => setShowCard(true)}
        className="bg-black px-6 py-3 text-m text-white"
      >
        Test
      </button>

      {showCard && (
        <div
          onClick={() => setShowCard(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl bg-white p-4 shadow-xl"
          >
            <button
              type="button"
              onClick={() => setShowCard(false)}
              aria-label="Close popup"
              className="absolute right-8 top-6 text-3xl leading-none text-gray-400 hover:text-gray-700"
            >
              ×
            </button>

            <SubscriptionDetailsCard />
          </div>
        </div>
      )}
    </div>
  );
};
