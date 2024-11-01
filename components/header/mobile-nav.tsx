'use client';

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const menuItems = [
  {
    title: 'HOME',
    href: '/',
  },
  {
    title: '第一事業部',
    items: [
      {
        title: '建設機械運搬業',
        href: '/services/construction-transport',
      },
    ],
  },
  {
    title: '第二事業部',
    items: [
      {
        title: '業務用機器販売・搬入・設置',
        href: '/services/equipment-sales',
      },
      {
        title: 'ホシザキ京阪株式会社代理店',
        href: '/services/hoshizaki',
      },
    ],
  },
  {
    title: '第三事業部',
    items: [
      {
        title: '産業廃棄物収集運搬業',
        href: '/services/waste-management',
      },
    ],
  },
  {
    title: '胡蝶蘭・観葉植物販売',
    href: '/services/plants',
  },
  {
    title: '会社案内',
    items: [
      {
        title: '会社概要',
        href: '/company/about',
      },
      {
        title: '沿革',
        href: '/company/history',
      },
    ],
  },
  {
    title: 'お問い合わせ',
    href: '/contact',
  },
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">メニューを開く</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle className="text-left">メニュー</SheetTitle>
        <nav className="mt-6 flex flex-col gap-4">
          <Accordion type="single" collapsible className="w-full">
            {menuItems.map((item, index) => (
              item.items ? (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <div key={index} className="py-4">
                  <Link
                    href={item.href}
                    className="text-sm font-medium hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </div>
              )
            ))}
          </Accordion>
        </nav>
      </SheetContent>
    </Sheet>
  );
}