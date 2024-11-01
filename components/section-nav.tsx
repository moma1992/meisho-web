'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Section {
  id: string;
  label: string;
}

interface SectionNavProps {
  sections: Section[];
}

export function SectionNav({ sections }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observers = new Map();
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        observer.observe(element);
        observers.set(id, observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sections]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-4 top-1/2 z-50 -translate-y-1/2">
      <ul className="space-y-2">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => handleClick(id)}
              className="group relative flex items-center p-2"
              aria-label={label}
            >
              <span className="absolute right-full mr-2 rounded-md bg-background/90 px-2 py-1 text-sm opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                {label}
              </span>
              <motion.div
                className={cn(
                  'h-3 w-3 rounded-full border-2 border-primary transition-all',
                  activeSection === id ? 'bg-primary' : 'bg-transparent'
                )}
                initial={false}
                animate={{
                  scale: activeSection === id ? 1.2 : 1,
                }}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}