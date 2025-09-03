import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingIndicator() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show loading for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
          className="fixed inset-0 flex items-center justify-center bg-primary z-50"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 border-4 border-t-4 border-white border-t-accent rounded-full"
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
