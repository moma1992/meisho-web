'use client';

import { Clock, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactBar() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-10 items-center justify-between text-sm">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden items-center space-x-6 md:flex"
          >
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>営業時間: 8:00-17:00（平日）</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>大阪府堺市南区桃山台2-3-4</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-6"
          >
            <a
              href="tel:072-298-6900"
              className="flex items-center space-x-2 transition-colors hover:text-blue-300"
            >
              <Phone className="h-4 w-4" />
              <span>072-298-6900</span>
            </a>
            <a
              href="mailto:meisho-sakai@work.odn.ne.jp"
              className="flex items-center space-x-2 transition-colors hover:text-blue-300"
            >
              <Mail className="h-4 w-4" />
              <span>メール</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}