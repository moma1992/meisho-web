import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { MobileNav } from '@/components/mobile-nav';
import { Truck } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

export function Header({ isScrolled }: HeaderProps) {
  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-colors duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Truck className="h-6 w-6" />
          <span className="text-xl font-bold">TransportPro</span>
        </Link>

        <nav className="hidden space-x-6 md:flex">
          <Link
            href="/services"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link href="/quote">Get a Quote</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}