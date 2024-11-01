'use client';

import { useRemoveGrammarly } from '@/hooks/use-remove-grammarly';

export function BaseLayout({ children }: { children: React.ReactNode }) {
  useRemoveGrammarly();
  
  return <>{children}</>;
}