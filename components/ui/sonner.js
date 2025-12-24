
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';

let toastCount = 0;

const generateId = () => {
  toastCount = (toastCount + 1) % Number.MAX_SAFE_INTEGER;
  return toastCount.toString();
};

// The toast function is exported for use anywhere in the app.
// It triggers a custom event that the Toaster component listens for.
export const toast = (message, options) => {
  const event = new CustomEvent('addtoast', { detail: { message, ...options } });
  document.dispatchEvent(event);
};

const ICONS = {
  success: <CheckCircle className="text-green-500" />,
  error: <XCircle className="text-red-500" />,
  warning: <AlertTriangle className="text-yellow-500" />,
  info: <Info className="text-blue-500" />,
};

// A single toast message component
const ToastMessage = ({ id, message, type = 'info', duration = 3000, onDismiss }) => {
  useEffect(() => {
    // Automatically dismiss the toast after a specified duration
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [id, duration, onDismiss]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className="flex items-center w-full max-w-sm p-4 mb-4 bg-white border rounded-lg shadow-lg"
    >
      <div className="mr-3">{ICONS[type]}</div>
      <div className="text-sm font-medium text-gray-800">{message}</div>
    </motion.div>
  );
};

// The Toaster component is the container for all toasts.
// It should be placed once in the root of the application.
export const Toaster = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const addToast = (e) => {
      const { message, ...options } = e.detail;
      setToasts(currentToasts => [{ id: generateId(), message, ...options }, ...currentToasts]);
    };

    // Listen for the custom 'addtoast' event on the document
    document.addEventListener('addtoast', addToast);
    return () => document.removeEventListener('addtoast', addToast);
  }, []);

  const removeToast = (id) => {
    setToasts(currentToasts => currentToasts.filter(t => t.id !== id));
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastMessage key={toast.id} {...toast} onDismiss={() => removeToast(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
};
