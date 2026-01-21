import BrandLoader from "./BrandLoader";

interface LoadingStateProps {
  message?: string;
}

const LoadingState = ({ message = "Loading data..." }: LoadingStateProps) => {
  return (
    <div className="flex min-h-[240px] items-center justify-center text-center">
      <BrandLoader message={message} />
    </div>
  );
};

export default LoadingState;
