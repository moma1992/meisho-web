'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-8">
      <div className="absolute left-0 top-2 h-full w-0.5 bg-border" />

      {items.map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8"
        >
          <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background" />
          <div className={cn("rounded-lg border bg-card p-4", "transition-all duration-300 hover:shadow-md")}>
            <div className="mb-2 text-sm font-semibold text-muted-foreground">
              {item.year}
            </div>
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}