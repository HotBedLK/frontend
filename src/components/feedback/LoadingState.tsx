interface LoadingStateProps {
  message?: string;
}

const LoadingState = ({ message = "Loading data..." }: LoadingStateProps) => {
  return (
    <div className="flex min-h-[240px] flex-col items-center justify-center gap-3 text-center">
      {/* Spinner */}
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-gray-700" />

      {/* Text */}
      <p className="font-body text-sm text-gray-600">{message}</p>
    </div>
  );
};

export default LoadingState;
