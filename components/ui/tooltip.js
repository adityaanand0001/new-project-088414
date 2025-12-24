
import React from 'react';

export const TooltipProvider = ({ children }) => <>{children}</>;

export const Tooltip = ({ children, content }) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="absolute bottom-full mb-2 w-max max-w-xs hidden group-hover:block z-20">
        <div className="bg-gray-900 text-white text-xs rounded py-1 px-2">
          {content}
        </div>
      </div>
    </div>
  );
};
export const TooltipTrigger = ({ children }) => children;
export const TooltipContent = ({ children }) => <>{children}</>;
