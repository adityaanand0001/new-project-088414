
import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const Popover = ({ trigger, content, open: controlledOpen, onOpenChange }) => {
  const [localOpen, setLocalOpen] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : localOpen;
  const toggle = () => (onOpenChange ? onOpenChange(!isOpen) : setLocalOpen(!isOpen));
  
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        onOpenChange ? onOpenChange(false) : setLocalOpen(false);
      }
    };
    if(isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onOpenChange]);
  
  return (
    <div className="relative inline-block" ref={popoverRef}>
      {React.cloneElement(trigger, { onClick: toggle })}
      <AnimatePresence>
        {isOpen && (
           <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -5 }}
            transition={{ duration: 0.1 }}
            className="absolute z-10 mt-2 w-72 rounded-xl bg-white p-4 text-gray-950 shadow-lg border"
           >
            {content}
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
