'use client';

import { useEffect } from 'react';
import { useCleanupAttributes } from '@/hooks/use-cleanup-attributes';

interface RootLayoutProviderProps {
  children: React.ReactNode;
}

export function RootLayoutProvider({ children }: RootLayoutProviderProps) {
  const cleanup = useCleanupAttributes();

  useEffect(() => {
    const cleanupFn = cleanup();
    return () => cleanupFn();
  }, [cleanup]);

  return <>{children}</>;
}