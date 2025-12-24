
import React from "react";
import { ChevronDown } from "lucide-react";

export const Select = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div className="relative">
    <select
      className={`h-10 w-full appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 pr-8 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </select>
    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50" />
  </div>
));
Select.displayName = "Select";

export const SelectValue = React.forwardRef((props, ref) => <option ref={ref} {...props} />);
SelectValue.displayName = "SelectValue";
