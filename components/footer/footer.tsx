'use client';

import { Mail, MapPin, Phone, Printer, Facebook, Twitter, Instagram, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const contactInfo = {
  headquarters: '大阪府堺市南区桃山台2-3-4',
  garage: '大阪府堺市南区和田295-1',
  tel: '072-298-6900',
  fax: '072-298-6902',
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-blue-950 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <motion.div 
            {...fadeIn}
            className="flex flex-col items-center space-y-4 text-center md:items-start md:text-left"
          >
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">株式会社明翔</span>
            </div>
            <p className="text-sm text-gray-300">
              産業基盤整備・都市づくりで地域社会に貢献する企業として
            </p>
          </motion.div>

          <motion.div 
            {...fadeIn}
            className="space-y-6 text-center md:text-left"
          >
            <h3 className="text-xl font-semibold text-white">所在地・連絡先</h3>
            <div className="space-y-4">
              <div className="flex flex-col items-center space-y-2 md:items-start">
                <div className="flex items-start space-x-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                  <div className="space-y-1">
                    <p className="font-semibold">本社:</p>
                    <p>{contactInfo.headquarters}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                  <div className="space-y-1">
                    <p className="font-semibold">車庫:</p>
                    <p>{contactInfo.garage}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2 md:items-start">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <a 
                    href={`tel:${contactInfo.tel}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    TEL: {contactInfo.tel}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Printer className="h-5 w-5 text-blue-400" />
                  <span>FAX: {contactInfo.fax}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeIn}
            className="space-y-6 text-center md:text-left"
          >
            <h3 className="text-xl font-semibold text-white">営業時間</h3>
            <ul className="space-y-2">
              <li>月曜日 - 金曜日: 8:00 - 17:00</li>
              <li>土曜日: 8:00 - 12:00</li>
              <li>日曜・祝日: 休業</li>
            </ul>
            <div className="flex justify-center space-x-4 md:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="rounded-full bg-blue-900 p-2 transition-colors hover:bg-blue-800"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div 
          {...fadeIn}
          className={cn(
            "mt-12 border-t border-blue-900 pt-8",
            "text-center text-sm text-gray-400"
          )}
        >
          <p>© {currentYear} 株式会社明翔 All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}