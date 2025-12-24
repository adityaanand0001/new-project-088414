
import React, { useState, useRef, useEffect } from "react";
import { ChevronsUpDown, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Combobox = ({ options, value, onChange, placeholder = "Select...", className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const comboboxRef = useRef(null);
  
  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (comboboxRef.current && !comboboxRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = searchTerm
    ? options.filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()))
    : options;

  return (
    <div className={`relative w-full ${className}`} ref={comboboxRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-full items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-sm"
      >
        <span className={selectedOption ? "text-gray-900" : "text-gray-500"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronsUpDown className="h-4 w-4 text-gray-500" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg"
          >
            <div className="p-2">
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 py-1 text-sm outline-none"
              />
            </div>
            <ul className="max-h-60 overflow-auto p-1">
              {filteredOptions.length > 0 ? filteredOptions.map(option => (
                <li
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                  className="flex items-center justify-between p-2 text-sm rounded-md hover:bg-gray-100 cursor-pointer"
                >
                  <span>{option.label}</span>
                  {value === option.value && <Check className="h-4 w-4" />}
                </li>
              )) : (
                <li className="p-2 text-sm text-gray-500 text-center">No results found.</li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
