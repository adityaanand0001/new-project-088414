
import React from 'react';

const ToggleGroupContext = React.createContext();

export const ToggleGroup = ({ type, value, onValueChange, children, ...props }) => {
  const handleToggle = (itemValue) => {
    if (type === 'single') {
      onValueChange(value === itemValue ? undefined : itemValue);
    } else { // multiple
      const newValue = value?.includes(itemValue)
        ? value.filter((v) => v !== itemValue)
        : [...(value || []), itemValue];
      onValueChange(newValue);
    }
  };

  const contextValue = { type, value, onValueChange: handleToggle };

  return (
    <ToggleGroupContext.Provider value={contextValue}>
      <div className="inline-flex items-center rounded-md -space-x-px" {...props}>{children}</div>
    </ToggleGroupContext.Provider>
  );
};

export const ToggleGroupItem = ({ value, children, ...props }) => {
  const context = React.useContext(ToggleGroupContext);
  const isSelected = context.type === 'single'
    ? context.value === value
    : context.value?.includes(value);

  return (
    <button
      onClick={() => context.onValueChange(value)}
      className={`
        px-3 py-1 text-sm border border-gray-200
        first:rounded-l-md last:rounded-r-md
        transition-colors
        ${isSelected ? 'bg-gray-200 text-gray-900' : 'bg-white text-gray-700 hover:bg-gray-100'}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
