import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button({
  children,
  loading,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`h-12 w-full rounded-lg bg-[#4a4966] px-4 py-2 text-sm font-semibold text-white
      transition hover:bg-[#3d3c5a]
      disabled:cursor-not-allowed hover:cursor-pointer disabled:opacity-70
      ${className}`}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2" aria-live="polite">
          <span className="sr-only">Loading</span>
          <span className="dot-blink h-2 w-2 rounded-full bg-white" />
          <span className="dot-blink dot-blink-delay-1 h-2 w-2 rounded-full bg-white" />
          <span className="dot-blink dot-blink-delay-2 h-2 w-2 rounded-full bg-white" />
        </span>
      ) : (
        children
      )}
    </button>
  );
}
