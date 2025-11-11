"use client";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition ${className}`}
    >
      {children}
    </button>
  );
}