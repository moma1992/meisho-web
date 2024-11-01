'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { NavigationLinks } from './navigation-links';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <VisuallyHidden>メニューを開く</VisuallyHidden>
        </Button>
      </DialogTrigger>
      <DialogContent className="h-screen w-screen sm:max-w-sm">
        <DialogTitle>メニュー</DialogTitle>
        <NavigationLinks
          className="flex flex-col space-y-4"
          onItemClick={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}