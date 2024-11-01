'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface ImageWrapperProps extends Omit<ImageProps, 'onError'> {
  fallback?: string;
}

export function ImageWrapper({ fallback, ...props }: ImageWrapperProps) {
  const [error, setError] = useState(false);

  if (error && fallback) {
    return <Image {...props} src={fallback} />;
  }

  return (
    <Image
      {...props}
      onError={() => setError(true)}
    />
  );
}