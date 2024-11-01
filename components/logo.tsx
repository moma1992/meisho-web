'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Feather } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-2"
      >
        <Feather className="h-6 w-6" />
        <span className="text-xl font-bold">MEISHO</span>
      </motion.div>
    </Link>
  );
}