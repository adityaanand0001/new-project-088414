
import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Dialog = ({ open, onOpenChange, children }) => (
  <AnimatePresence>
    {open && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onOpenChange(false)}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />
        {React.Children.map(children, child => React.cloneElement(child, { onOpenChange }))}
      </div>
    )}
  </AnimatePresence>
);

export const DialogContent = React.forwardRef(({ className = '', children, onOpenChange, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, y: 20 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={`relative z-10 w-full max-w-lg p-6 bg-white rounded-2xl shadow-xl ${className}`}
    {...props}
  >
    {children}
    <button onClick={() => onOpenChange(false)} className="absolute top-4 right-4 p-1 rounded-full text-gray-500 hover:bg-gray-100">
      <X className="h-5 w-5" />
    </button>
  </motion.div>
));
DialogContent.displayName = "DialogContent";

export const DialogHeader = ({ className, ...props }) => <div className={`flex flex-col space-y-1.5 text-center sm:text-left mb-4 ${className}`} {...props} />;
export const DialogFooter = ({ className, ...props }) => <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6 ${className}`} {...props} />;
export const DialogTitle = (props) => <h2 className="text-lg font-semibold text-gray-900" {...props} />;
export const DialogDescription = (props) => <p className="text-sm text-gray-500" {...props} />;
