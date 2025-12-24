
import React from "react";

export const Table = React.forwardRef((props, ref) => (
  <div className="w-full overflow-auto">
    <table ref={ref} className="w-full caption-bottom text-sm" {...props} />
  </div>
));
Table.displayName = "Table";

export const TableHeader = React.forwardRef((props, ref) => (
  <thead ref={ref} className="[&_tr]:border-b" {...props} />
));
TableHeader.displayName = "TableHeader";

export const TableBody = React.forwardRef((props, ref) => (
  <tbody ref={ref} className="[&_tr:last-child]:border-0" {...props} />
));
TableBody.displayName = "TableBody";

export const TableFooter = React.forwardRef((props, ref) => (
  <tfoot ref={ref} className="bg-gray-900 font-medium text-gray-50" {...props} />
));
TableFooter.displayName = "TableFooter";

export const TableRow = React.forwardRef((props, ref) => (
  <tr ref={ref} className="border-b transition-colors hover:bg-gray-100/50 data-[state=selected]:bg-gray-100" {...props} />
));
TableRow.displayName = "TableRow";

export const TableHead = React.forwardRef((props, ref) => (
  <th ref={ref} className="h-12 px-4 text-left align-middle font-medium text-gray-500" {...props} />
));
TableHead.displayName = "TableHead";

export const TableCell = React.forwardRef((props, ref) => (
  <td ref={ref} className="p-4 align-middle" {...props} />
));
TableCell.displayName = "TableCell";
