import { forwardRef, type InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          {...props}
          className={`h-12 w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-sm text-gray-900
          focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 focus:placeholder:text-transparent
          ${className} ${error ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}`}
        />

        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      </div>
    );
  },
);

export default Input;
