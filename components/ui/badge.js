
import React from "react";

const variantClasses = {
  default: "bg-gray-900 text-white",
  secondary: "bg-gray-100 text-gray-900",
  destructive: "bg-red-500 text-white",
  outline: "text-gray-900 border border-gray-200",
  success: "bg-green-100 text-green-800",
};

export function Badge({ className = "", variant = "default", ...props }) {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variantClasses[variant] || variantClasses.default} ${className}`}
      {...props}
    />
  );
}
