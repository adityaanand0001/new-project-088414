
import React from 'react';

export const Item = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors ${className}`}
    {...props}
  >
    {children}
  </div>
));
Item.displayName = "Item";

export const ItemIcon = ({ children }) => <div className="mr-3 text-gray-500">{children}</div>;
export const ItemContent = ({ children }) => <div className="flex-grow">{children}</div>;
export const ItemTitle = ({ children }) => <div className="font-medium text-gray-900">{children}</div>;
export const ItemDescription = ({ children }) => <div className="text-sm text-gray-500">{children}</div>;
export const ItemAction = ({ children }) => <div className="ml-3">{children}</div>;
