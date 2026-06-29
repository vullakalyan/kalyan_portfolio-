import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaTimes } from 'react-icons/fa';

let toastIdCounter = 0;
let addToastFn = null;

export function showToast(message, type = 'success') {
  if (addToastFn) {
    addToastFn({ id: ++toastIdCounter, message, type });
  }
}

export default function Toast() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    setToasts((prev) => [...prev, toast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toast.id));
    }, 5000);
  }, []);

  useEffect(() => {
    addToastFn = addToast;
    return () => { addToastFn = null; };
  }, [addToast]);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="fixed top-6 right-6 z-[300] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`
              pointer-events-auto flex items-center gap-3 px-5 py-3.5 rounded-xl
              backdrop-blur-xl border shadow-glass min-w-[300px] max-w-[420px]
              ${
                toast.type === 'success'
                  ? 'bg-success/10 border-success/30 text-success'
                  : 'bg-red-500/10 border-red-500/30 text-red-400'
              }
            `}
            role="alert"
          >
            {toast.type === 'success' ? (
              <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <FaTimesCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <p className="text-sm font-medium flex-1">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-white/50 hover:text-white transition-colors cursor-pointer"
              aria-label="Close notification"
            >
              <FaTimes className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
