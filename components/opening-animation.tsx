'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function OpeningAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Path animation variants
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }
    }
  };

  // Letter animation variants
  const letterAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.5 + (custom * 0.03),
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-white to-gray-50 overflow-hidden"
        >
          <div className="relative w-full max-w-2xl">
            {/* Main Logo */}
            <div className="relative">
              <motion.svg 
                width="200" 
                height="200" 
                viewBox="0 0 24 24" 
                className="mb-4 mx-auto"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Decorative background circle */}
                <motion.circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  stroke="#e6e6e6"
                  strokeWidth="0.5"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.3, 0.1]
                  }}
                  transition={{ 
                    duration: 2,
                    ease: "easeOut",
                    delay: 0.5
                  }}
                />

                {/* Main feather path */}
                <motion.path
                  d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
                  stroke="#1a5f7a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.line
                  x1="16"
                  y1="8"
                  x2="2"
                  y2="22"
                  stroke="#1a5f7a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.line
                  x1="17.5"
                  y1="15"
                  x2="9"
                  y2="15"
                  stroke="#1a5f7a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
              </motion.svg>
            </div>

            {/* Company name */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-4xl font-bold text-[#1a5f7a] text-center mb-2"
            >
              MEISHO
            </motion.div>
            
            {/* Japanese company name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="text-lg text-gray-600 text-center mb-6"
            >
              株式会社明翔
            </motion.div>

            {/* Catchphrase */}
            <div className="relative">
              <motion.div 
                className="text-center overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="h-0.5 bg-gradient-to-r from-transparent via-[#1a5f7a] to-transparent mb-4"
                />
                <div className="flex justify-center space-x-1 text-sm md:text-base">
                  {("Supporting Town Growth").split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterAnimation}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      className="text-[#1a5f7a] font-light tracking-wider"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
                <div className="flex justify-center space-x-1 text-sm md:text-base mt-1">
                  {("with Reliable Transportation").split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterAnimation}
                      custom={index + 20}
                      initial="hidden"
                      animate="visible"
                      className="text-[#1a5f7a] font-light tracking-wider"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="h-0.5 bg-gradient-to-r from-transparent via-[#1a5f7a] to-transparent mt-4"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}