
import React from "react";
export const Slider = React.forwardRef(({ className = "", value, ...props }, ref) => (
  <div className="relative flex w-full touch-none select-none items-center">
    <input
      type="range"
      ref={ref}
      className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${className}`}
      value={value}
      {...props}
    />
  </div>
));
Slider.displayName = "Slider";
