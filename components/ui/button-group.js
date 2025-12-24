
import React from "react";
export const ButtonGroup = ({ className, ...props }) => (
  <div className={`inline-flex items-center rounded-md shadow-sm -space-x-px ${className}`} {...props} />
);
