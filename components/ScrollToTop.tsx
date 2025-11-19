
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-pharaoh-gold text-pharaoh-dark shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] hover:-translate-y-1 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
