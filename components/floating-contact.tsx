'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlButton = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlButton);
    return () => window.removeEventListener('scroll', controlButton);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <a
            href="tel:072-298-6900"
            className={cn(
              "group relative flex h-14 w-14 items-center justify-center",
              "rounded-full bg-blue-600 shadow-lg",
              "transition-all duration-300 hover:bg-blue-700"
            )}
            aria-label="電話でお問い合わせ"
          >
            <Phone className="h-6 w-6 text-white" />
            
            {/* Tooltip */}
            <span className={cn(
              "absolute right-full mr-3 whitespace-nowrap",
              "rounded bg-gray-900 px-2 py-1 text-sm text-white",
              "opacity-0 transition-opacity duration-200",
              "group-hover:opacity-100"
            )}>
              お電話でお問い合わせ
            </span>
          </a>

          {/* Ripple Effect */}
          <div className={cn(
            "absolute inset-0 -z-10",
            "animate-ping rounded-full bg-blue-400 opacity-75",
            "transition-transform duration-700"
          )} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}