
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

export const Command = ({ open, onOpenChange, children, ...props }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onOpenChange(false);
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 w-full max-w-lg bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
            {...props}
          >
           {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const CommandInput = React.forwardRef((props, ref) => (
  <div className="flex items-center border-b border-gray-200 px-3">
    <Search className="mr-2 h-4 w-4 shrink-0 text-gray-500" />
    <input
      ref={ref}
      className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    />
  </div>
));
CommandInput.displayName = "CommandInput";

export const CommandList = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`max-h-[300px] overflow-y-auto overflow-x-hidden ${className}`} {...props} />
));
CommandList.displayName = "CommandList";

export const CommandEmpty = (props) => (
  <div className="py-6 text-center text-sm" {...props} />
);
CommandEmpty.displayName = "CommandEmpty";

export const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`overflow-hidden p-1 text-gray-900 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-gray-500 ${className}`} {...props} />
));
CommandGroup.displayName = "CommandGroup";

export const CommandItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`} {...props} />
));
CommandItem.displayName = "CommandItem";
