
import React from 'react';
// This component relies on custom scrollbar styles defined in styles.css
export const ScrollArea = ({ children, className }) => (
  <div className={`overflow-auto preview-scrollbar ${className}`}>
    {children}
  </div>
);
