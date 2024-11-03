"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "第一事業部",
    items: [
      {
        title: "建設機械運搬業",
        href: "/services/construction-transport",
        description: "建設機械の安全かつ効率的な運搬サービス",
      },
    ],
  },
  {
    title: "第二事業部",
    items: [
      {
        title: "業務用機器販売・搬入・設置",
        href: "/services/equipment-sales",
        description: "業務用機器の販売から設置までのトータルサポート",
      },
      {
        title: "ホシザキ京阪株式会社代理店",
        href: "/services/hoshizaki",
        description: "ホシザキ製品の販売・メンテナンス",
      },
    ],
  },
  {
    title: "第三事業部",
    items: [
      {
        title: "産業廃棄物収集運搬業",
        href: "/services/waste-management",
        description: "産業廃棄物の適正な収集・運搬サービス",
      },
    ],
  },
  {
    title: "胡蝶蘭・観葉植物販売",
    href: "/services/plants",
  },
  {
    title: "会社案内",
    items: [
      {
        title: "会社概要",
        href: "/company/about",
        description: "当社の企業理念と概要",
      },
      {
        title: "沿革",
        href: "/company/history",
        description: "創業からの歩み",
      },
    ],
  },
  {
    title: "お問い合わせ",
    href: "/contact",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function MainNav() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.items ? (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1">
                    {item.items.map((subItem) => (
                      <ListItem
                        key={subItem.title}
                        title={subItem.title}
                        href={subItem.href}
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
