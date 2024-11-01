'use client';

import { useEffect } from 'react';
import { useCleanupAttributes } from '@/hooks/use-cleanup-attributes';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const cleanup = useCleanupAttributes();

  useEffect(() => {
    cleanup();
  }, [cleanup]);

  return <>{children}</>;
}