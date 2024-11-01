'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const navigationItems = [
  {
    title: 'HOME',
    href: '/',
  },
  {
    title: '第一事業部',
    href: '/services/first-division',
    items: [
      {
        title: '建設機械運搬業',
        href: '/services/first-division',
      },
    ],
  },
  {
    title: '第二事業部',
    items: [
      {
        title: '業務用機器販売・搬入・設置',
        href: '/services/second-division',
      },
      {
        title: 'ホシザキ京阪株式会社代理店',
        href: '/services/second-division/hoshizaki',
      },
    ],
  },
  {
    title: '第三事業部',
    items: [
      {
        title: '産業廃棄物収集運搬業',
        href: '/services/third-division',
      },
    ],
  },
  {
    title: '胡蝶蘭・観葉植物販売',
    href: '/products/plants',
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

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.items ? (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {item.items.map((subItem) => (
                      <li key={subItem.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={subItem.href}
                            className={cn(
                              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {subItem.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(
                    'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                  )}
                >
                  <div className="text-sm font-medium leading-none">
                    {item.title}
                  </div>
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}