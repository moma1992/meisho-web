'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const menuItems = [
  {
    title: '事業部紹介',
    dropdownItems: [
      { name: '第一事業部', href: '/services/first-division' },
      { name: '第二事業部', href: '/services/second-division' },
      { name: '第三事業部', href: '/services/third-division' }
    ]
  },
  {
    title: '胡蝶蘭・観葉植物販売',
    dropdownItems: [{ name: '事業概要', href: '/services/plants' }]
  },
  {
    title: '採用情報',
    dropdownItems: [{ name: '募集職種', href: '/careers' }]
  },
  {
    title: '会社案内',
    dropdownItems: [{ name: '会社概要', href: '/company/about' }]
  }
];

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="border-b shadow-sm backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link 
              href="/" 
              className="relative flex items-center"
              aria-label="トップページへ"
            >
              <motion.div 
                className="relative h-[40px] w-[150px] opacity-80"
                whileHover={{ 
                  scale: 1.05,
                  opacity: 0.6,
                  transition: { duration: 0.2 }
                }}
              >
                <Image
                  src={`https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/logo.png?v=${timestamp}`}
                  alt="株式会社明翔"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'left center' }}
                  priority
                  unoptimized
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:items-center">
              <div className="flex items-center space-x-1">
                <a
                  href="/"
                  className="whitespace-nowrap rounded-md px-2 py-2 text-sm text-gray-700 font-bold transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  HOME
                </a>
                {menuItems.map((item, index) => (
                  <div key={index} className="relative">
                    <button
                      className="flex items-center whitespace-nowrap rounded-md px-2 py-2 text-sm text-gray-700 font-bold transition-colors hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                    >
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <AnimatePresence>
                      {openDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                        >
                          <div className="py-1">
                            {item.dropdownItems.map((dropdownItem, dropIndex) => (
                              <a
                                key={dropIndex}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                              >
                                {dropdownItem.name}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="rounded-md p-2 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-gray-200 lg:hidden"
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                <a
                  href="/"
                  className={cn(
                    "block rounded-md px-3 py-2",
                    "text-base font-bold text-gray-700",
                    "transition-colors hover:bg-blue-50 hover:text-blue-600"
                  )}
                >
                  HOME
                </a>
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <button
                      className={cn(
                        "flex w-full items-center justify-between rounded-md px-3 py-2",
                        "text-base font-bold text-gray-700",
                        "transition-colors hover:bg-blue-50 hover:text-blue-600"
                      )}
                      onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                    >
                      {item.title}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform",
                        openDropdown === index && "rotate-180"
                      )} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 space-y-1"
                        >
                          {item.dropdownItems.map((dropdownItem, dropIndex) => (
                            <a
                              key={dropIndex}
                              href={dropdownItem.href}
                              className="block rounded-md px-3 py-2 text-base font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}