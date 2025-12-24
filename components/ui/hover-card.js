
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const HoverCard = ({ children, content, delay = 200 }) => {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setIsOpen(true), delay);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setIsOpen(false), delay);
  };

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-10 w-64 rounded-xl bg-white p-4 text-gray-950 shadow-lg border"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
