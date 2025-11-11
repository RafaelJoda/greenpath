"use client";

export function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800 ${className}`}
    >
      {children}
    </span>
  );
}
