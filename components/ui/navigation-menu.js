
import React from 'react';

export const NavigationMenu = ({ children, className }) => (
  <nav className={`relative z-10 flex max-w-max flex-1 items-center justify-center ${className}`}>
    <ul className="group flex flex-1 list-none items-center justify-center space-x-1">{children}</ul>
  </nav>
);
export const NavigationMenuList = ({ children, className }) => <ul className={`group flex flex-1 list-none items-center justify-center space-x-1 ${className}`}>{children}</ul>;
export const NavigationMenuItem = ({ children }) => <li className="relative">{children}</li>;
export const NavigationMenuTrigger = ({ children }) => (
  <button className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100">
    {children}
  </button>
);
export const NavigationMenuContent = ({ children }) => (
  <div className="absolute top-full left-0 mt-2 w-auto">
    <div className="bg-white border rounded-md shadow-lg p-4">{children}</div>
  </div>
);
export const NavigationMenuLink = (props) => (
  <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100" {...props} />
);
