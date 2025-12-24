
import React from 'react';
export const Field = ({ children, className }) => (
  <div className={`grid w-full items-center gap-1.5 ${className}`}>
    {children}
  </div>
);
