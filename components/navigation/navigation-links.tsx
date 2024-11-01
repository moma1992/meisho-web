'use client';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

interface NavigationLinksProps {
  className?: string;
  onItemClick?: () => void;
}

export function NavigationLinks({ className, onItemClick }: NavigationLinksProps) {
  return (
    <NavigationMenu className={cn('mx-auto', className)}>
      <NavigationMenuList className="flex-col md:flex-row">
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            className="group inline-flex h-10 w-full items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            onClick={onItemClick}
          >
            HOME
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>第一事業部</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink
              href="/services/construction"
              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              onClick={onItemClick}
            >
              建設機械運搬業
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>第二事業部</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink
              href="/services/equipment"
              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              onClick={onItemClick}
            >
              業務用機器販売・搬入・設置
            </NavigationMenuLink>
            <NavigationMenuLink
              href="/services/hoshizaki"
              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              onClick={onItemClick}
            >
              ホシザキ京阪株式会社代理店
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>第三事業部</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink
              href="/services/waste"
              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              onClick={onItemClick}
            >
              産業廃棄物収集運搬業
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/flowers"
            className="group inline-flex h-10 w-full items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            onClick={onItemClick}
          >
            胡蝶蘭・観葉植物販売
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>会社案内</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink
              href="/company/about"
              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              onClick={onItemClick}
            >
              会社概要
            </NavigationMenuLink>
            <NavigationMenuLink
              href="/company/history"
              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              onClick={onItemClick}
            >
              沿革
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/contact"
            className="group inline-flex h-10 w-full items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            onClick={onItemClick}
          >
            お問い合わせ
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}