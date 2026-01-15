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
      disabled:cursor-not-allowed disabled:opacity-70
      ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
