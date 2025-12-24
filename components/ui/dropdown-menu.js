
import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const DropdownContext = React.createContext();

export const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  
  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        close();
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const value = { isOpen, setIsOpen, close, menuRef };

  return (
    <DropdownContext.Provider value={value}>
      <div className="relative inline-block text-left">{children}</div>
    </DropdownContext.Provider>
  );
};

export const DropdownMenuTrigger = ({ children }) => {
  const { isOpen, setIsOpen } = React.useContext(DropdownContext);
  return React.cloneElement(children, { onClick: () => setIsOpen(!isOpen) });
};

export const DropdownMenuContent = ({ children, className, align = 'start' }) => {
  const { isOpen, menuRef } = React.useContext(DropdownContext);
  const alignClass = align === 'end' ? 'right-0' : 'left-0';
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.95, y: -5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -5 }}
          transition={{ duration: 0.1 }}
          className={`absolute ${alignClass} z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${className}`}
        >
          <div className="py-1">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const DropdownMenuItem = ({ children, onSelect }) => {
  const { close } = React.useContext(DropdownContext);
  return (
    <button
      onClick={() => { if(onSelect) onSelect(); close(); }}
      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    >
      {children}
    </button>
  );
};
export const DropdownMenuSeparator = () => <div className="border-t border-gray-100 my-1" />;
