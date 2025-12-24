
import React from "react";
import { Check } from "lucide-react";

export const Checkbox = React.forwardRef(({ className = "", ...props }, ref) => (
  <button
    ref={ref}
    role="checkbox"
    aria-checked={props.checked}
    data-state={props.checked ? "checked" : "unchecked"}
    className={`peer h-4 w-4 shrink-0 rounded-sm border border-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=checked]:text-gray-50 ${className}`}
    {...props}
  >
    {props.checked && <Check className="h-4 w-4" />}
  </button>
));
Checkbox.displayName = "Checkbox";
