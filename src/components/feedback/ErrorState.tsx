import { MdErrorOutline } from "react-icons/md";

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

const ErrorState = ({ message, onRetry }: ErrorStateProps) => {
  return (
    <div className="flex min-h-[240px] flex-col items-center justify-center gap-4 text-center">
      {/* Icon */}
      <div className="rounded-full bg-red-100 p-3 text-red-600">
        <MdErrorOutline size={28} />
      </div>

      {/* Message */}
      <p className="max-w-md text-sm text-gray-700">{message}</p>

      {/* Retry */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
        >
          Try again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
