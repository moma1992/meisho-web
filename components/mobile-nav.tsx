'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { NavigationMenu } from '@/components/ui/navigation-menu';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export function MobileNav() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <VisuallyHidden>メニューを開く</VisuallyHidden>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[300px] sm:w-[400px]">
        <DialogTitle className="text-lg font-semibold">ナビゲーション</DialogTitle>
        <NavigationMenu />
      </DialogContent>
    </Dialog>
  );
}