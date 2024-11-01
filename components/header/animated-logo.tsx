'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function AnimatedLogo() {
  return (
    <Link href="/" className="group flex items-center space-x-2 relative">
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 text-blue-600 transform transition-transform duration-300 ease-in-out hover:rotate-12 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
          className="origin-center"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.line
          x1="16"
          y1="8"
          x2="2"
          y2="22"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.line
          x1="17.5"
          y1="15"
          x2="9"
          y2="15"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
        />
      </svg>
      <div className="flex flex-col">
        <motion.span
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-800 leading-none transition-transform duration-300 ease-in-out group-hover:translate-x-1"
        >
          MEISHO
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-gray-600 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
        >
          株式会社明翔
        </motion.span>
      </div>
    </Link>
  );
}