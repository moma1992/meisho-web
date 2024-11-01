'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

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
        'group h-full overflow-hidden transition-all duration-300 hover:shadow-lg',
        className
      )}
    >
      <CardHeader className="space-y-4">
        <div className="rounded-lg bg-primary/10 p-3 w-fit">
          <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="text-xl font-semibold leading-none tracking-tight">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}