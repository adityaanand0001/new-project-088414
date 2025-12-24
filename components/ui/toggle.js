
import React from "react";
export const Toggle = React.forwardRef(({ className = "", pressed, ...props }, ref) => (
  <button
    ref={ref}
    data-state={pressed ? 'on' : 'off'}
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 data-[state=on]:bg-gray-200 h-10 px-3 ${className}`}
    {...props}
  />
));
Toggle.displayName = "Toggle";
