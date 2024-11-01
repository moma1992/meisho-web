'use client';

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AnimatedLogo } from './animated-logo';
import { ContactBar } from './contact-bar';

const menuItems = [
  {
    title: '第一事業部',
    dropdownItems: ['事業概要', '実績紹介', 'サービス内容'],
    href: '/services/first-division'
  },
  {
    title: '第二事業部',
    dropdownItems: ['事業概要', '製品一覧', 'サポート'],
    href: '/services/second-division'
  },
  {
    title: '第三事業部',
    dropdownItems: ['事業概要', '技術紹介', '開発実績'],
    href: '/services/third-division'
  },
  {
    title: '胡蝶蘭・観葉植物販売',
    dropdownItems: ['商品一覧', '納入実績', 'ご注文方法'],
    href: '/services/plants'
  },
  {
    title: '採用情報',
    dropdownItems: ['募集職種', '働く環境', '採用フロー'],
    href: '/careers'
  },
  {
    title: '会社案内',
    dropdownItems: ['会社概要', 'アクセス', 'お問い合わせ'],
    href: '/company/about'
  }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <header className="fixed top-0 z-50 w-full">
      <ContactBar />

      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="border-b bg-white/90 shadow-sm backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <AnimatedLogo />

            {/* Desktop Navigation */}
            <nav className="hidden space-x-1 md:flex">
              <a
                href="/"
                className="rounded-md px-3 py-2 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
              >
                HOME
              </a>
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    className="flex items-center rounded-md px-3 py-2 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
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
                              href={`${item.href}#${dropdownItem}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            >
                              {dropdownItem}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="rounded-md p-2 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 md:hidden"
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
              className="border-t border-gray-200 md:hidden"
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                <a
                  href="/"
                  className={cn(
                    "block rounded-md px-3 py-2",
                    "text-base font-medium text-gray-700",
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
                        "text-base font-medium text-gray-700",
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
                              href={`${item.href}#${dropdownItem}`}
                              className="block rounded-md px-3 py-2 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            >
                              {dropdownItem}
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