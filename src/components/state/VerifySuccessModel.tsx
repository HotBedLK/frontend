type VerifySuccessModalProps = {
  open: boolean;
  onClose?: () => void;
};

export default function VerifySuccessModal({ open, onClose }: VerifySuccessModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-black/40 backdrop-blur-sm">
      <div className="w-[90%] max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl animate-verified-pop">
        <svg viewBox="0 0 52 52" className="mx-auto mb-4 h-16 w-16">
          <circle
            className="verified-circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
            stroke="#4a4966"
            strokeWidth="2"
          />
          <path
            className="verified-check"
            fill="none"
            stroke="#4a4966"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 27l7 7 17-17"
          />
        </svg>
        <h3 className="font-display text-lg text-gray-900">Verification complete</h3>
        <p className="mt-1 text-sm text-gray-500">Your phone number is verified.</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 text-sm font-semibold text-[var(--primary-color)] hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
}
