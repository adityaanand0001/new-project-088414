
import React from 'react';
export const Sidebar = ({ children, className }) => (
  <aside className={`flex flex-col h-full bg-gray-50 border-r border-gray-200 ${className}`}>{children}</aside>
);
export const SidebarHeader = ({ children, className }) => <div className={`p-4 border-b border-gray-200 ${className}`}>{children}</div>;
export const SidebarContent = ({ children, className }) => <div className={`flex-grow p-4 overflow-y-auto ${className}`}>{children}</div>;
export const SidebarFooter = ({ children, className }) => <div className={`p-4 border-t border-gray-200 ${className}`}>{children}</div>;
