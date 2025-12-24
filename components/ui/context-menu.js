
import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const ContextMenu = ({ children, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('scroll', () => setIsOpen(false), true);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', () => setIsOpen(false), true);
    };
  }, [isOpen]);

  return (
    <div onContextMenu={handleContextMenu}>
      {trigger}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            style={{ top: position.y, left: position.x }}
            className="fixed z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-gray-950 shadow-md"
          >
            {React.Children.map(children, child => React.cloneElement(child, { closeMenu: () => setIsOpen(false) }))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ContextMenuItem = ({ children, onSelect, closeMenu, className="" }) => (
  <button
    onClick={() => { if(onSelect) onSelect(); closeMenu(); }}
    className={`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 w-full text-left ${className}`}
  >
    {children}
  </button>
);

export const ContextMenuSeparator = () => <div className="-mx-1 my-1 h-px bg-gray-200" />;
