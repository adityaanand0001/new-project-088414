
import React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

export const Pagination = ({ className, ...props }) => (
  <nav role="navigation" aria-label="pagination" className={`mx-auto flex w-full justify-center ${className}`} {...props} />
);

export const PaginationContent = React.forwardRef((props, ref) => (
  <ul ref={ref} className="flex flex-row items-center gap-1" {...props} />
));
PaginationContent.displayName = "PaginationContent";

export const PaginationItem = React.forwardRef((props, ref) => (
  <li ref={ref} {...props} />
));
PaginationItem.displayName = "PaginationItem";

const PaginationLink = ({ className, isActive, size = 'icon', ...props }) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={`
      inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
      ${size === 'icon' ? 'h-10 w-10' : 'h-10 px-4 py-2'}
      ${isActive ? 'border border-gray-300 bg-gray-100' : 'hover:bg-gray-100'}
      ${className}`
    }
    {...props}
  />
);

export const PaginationPrevious = ({ className, ...props }) => (
  <PaginationLink aria-label="Go to previous page" size="default" className={`gap-1 pl-2.5 ${className}`} {...props}>
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);

export const PaginationNext = ({ className, ...props }) => (
  <PaginationLink aria-label="Go to next page" size="default" className={`gap-1 pr-2.5 ${className}`} {...props}>
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);

export const PaginationEllipsis = ({ className, ...props }) => (
  <span aria-hidden className={`flex h-9 w-9 items-center justify-center ${className}`} {...props}>
    <MoreHorizontal className="h-4 w-4" />
  </span>
);
