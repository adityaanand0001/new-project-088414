
import React from 'react';
import { Inbox } from 'lucide-react';

export const Empty = ({ icon, title, description, children, className }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-200 rounded-lg ${className}`}>
      <div className="text-gray-400 mb-4">{icon || <Inbox className="h-12 w-12" />}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title || 'No Data'}</h3>
      <p className="mt-1 text-sm text-gray-500">{description || 'There is nothing to display here yet.'}</p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
};
