
import React, { useState, useCallback } from 'react';

export const ResizablePanelGroup = ({ children, direction = 'horizontal', className = '' }) => {
  const [sizes, setSizes] = useState(React.Children.map(children, () => 1));
  return (
    <div className={`flex ${direction === 'horizontal' ? 'flex-row' : 'flex-col'} ${className}`}>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          style: { flexGrow: sizes[i] }
        })
      )}
    </div>
  );
};

export const ResizablePanel = (props) => <div {...props} />;
export const ResizableHandle = (props) => <div className="w-1 bg-gray-200 cursor-col-resize" {...props} />;
