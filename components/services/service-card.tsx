'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '../ui/card';
import { cn } from '../../lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function ServiceCard({ title, description, icon: Icon, className }: ServiceCardProps) {
  return (
    <Card
      className={cn(
        'group h-full overflow-hidden transition-all duration-300',
        'bg-gradient-to-b from-white to-gray-50/80',
        'hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]',
        'hover:scale-[1.02]',
        'hover:bg-gradient-to-b hover:from-white hover:to-gray-50',
        className
      )}
    >
      <CardHeader className="space-y-4">
        <div className="relative w-fit">
          <div
            className={cn(
              'absolute inset-0 rounded-lg',
              'bg-gradient-to-br from-primary/20 to-primary/10',
              'blur-sm transition-all duration-300',
              'group-hover:blur-md group-hover:scale-110'
            )}
          />
          <div
            className={cn(
              'relative rounded-lg p-3',
              'bg-gradient-to-br from-primary/15 to-primary/5',
              'shadow-sm',
              'transition-all duration-300',
              'group-hover:shadow-md group-hover:from-primary/20 group-hover:to-primary/10'
            )}
          >
            <Icon 
              className={cn(
                'h-6 w-6 text-primary',
                'transition-all duration-300',
                'group-hover:scale-110 group-hover:transform'
              )}
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold leading-none tracking-tight transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/80">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
