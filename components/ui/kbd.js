
import React from "react";
export const Kbd = ({ className, ...props }) => (
  <kbd
    className={`px-2 py-1.5 text-xs font-sans font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md ${className}`}
    {...props}
  />
);
