
import React from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from './dropdown-menu';

export const Menubar = ({ children, className }) => (
  <div className={`flex h-10 items-center space-x-1 rounded-md border bg-white p-1 ${className}`}>
    {children}
  </div>
);

export const MenubarMenu = ({ children }) => <DropdownMenu>{children}</DropdownMenu>;

export const MenubarTrigger = ({ children }) => (
  <DropdownMenuTrigger>
    <button className="flex select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none hover:bg-gray-100 data-[state=open]:bg-gray-100">
      {children}
    </button>
  </DropdownMenuTrigger>
);

export const MenubarContent = DropdownMenuContent;
export const MenubarItem = DropdownMenuItem;
export const MenubarSeparator = DropdownMenuSeparator;
