
import React from "react";

const RadioGroupContext = React.createContext();

export const RadioGroup = React.forwardRef(({ value, onChange, children, ...props }, ref) => {
  return (
    <RadioGroupContext.Provider value={{ value, onChange }}>
      <div ref={ref} role="radiogroup" {...props}>{children}</div>
    </RadioGroupContext.Provider>
  );
});
RadioGroup.displayName = "RadioGroup";


export const RadioGroupItem = React.forwardRef(({ value: itemValue, className, ...props }, ref) => {
  const { value, onChange } = React.useContext(RadioGroupContext);
  const checked = value === itemValue;
  return (
    <button
      ref={ref}
      role="radio"
      aria-checked={checked}
      onClick={() => onChange(itemValue)}
      className={`aspect-square h-4 w-4 rounded-full border border-gray-400 text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {checked && <div className="h-full w-full rounded-full bg-current" />}
    </button>
  );
});
RadioGroupItem.displayName = "RadioGroupItem";
