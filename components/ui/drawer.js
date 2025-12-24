
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const variants = {
  left: { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' } },
  right: { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } },
  top: { initial: { y: '-100%' }, animate: { y: 0 }, exit: { y: '-100%' } },
  bottom: { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } },
};

const contentClasses = {
  left: 'h-full w-3/4 max-w-sm top-0 left-0',
  right: 'h-full w-3/4 max-w-sm top-0 right-0',
  top: 'w-full h-auto max-h-3/4 top-0 left-0',
  bottom: 'w-full h-auto max-h-3/4 bottom-0 left-0',
};

export const Drawer = ({ open, onOpenChange, children, side = 'right' }) => (
  <AnimatePresence>
    {open && (
      <div className="fixed inset-0 z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onOpenChange(false)}
          className="absolute inset-0 bg-black/50"
        />
        <motion.div
          variants={variants[side]}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`fixed bg-white shadow-xl ${contentClasses[side]}`}
        >
          {children}
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export const DrawerContent = ({ children, className }) => <div className={`p-6 h-full ${className}`}>{children}</div>;
export const DrawerHeader = ({ children, className }) => <div className={`flex justify-between items-center mb-4 ${className}`}>{children}</div>;
export const DrawerTitle = ({ children }) => <h2 className="text-lg font-semibold text-gray-900">{children}</h2>;
export const DrawerDescription = ({ children }) => <p className="text-sm text-gray-500">{children}</p>;
export const DrawerFooter = ({ children, className }) => <div className={`mt-auto pt-4 border-t ${className}`}>{children}</div>;
export const DrawerClose = ({ children, onClick }) => <button onClick={onClick}>{children || <X />}</button>;
