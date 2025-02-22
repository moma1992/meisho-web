'use client';

import { useState, useEffect } from 'react';

// Update paths to match actual public directory structure
const imagesToPreload = [
  'https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/hero.jpg',
  'https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/first-div-bg.jpg',
  'https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/second-div-bg.jpg',
  'https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/third-div-bg.jpg',
  'https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/careers-bg.jpg',
];

interface ImagePreloaderProps {
  children: React.ReactNode;
}

export function ImagePreloader({ children }: ImagePreloaderProps) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let mounted = true;
    let loadedImages = 0;

    const preloadImages = async () => {
      try {
        await Promise.all(
          imagesToPreload.map(
            (src) =>
              new Promise((resolve) => {
                const img = new Image();
                
                img.onload = () => {
                  loadedImages++;
                  resolve(true);
                };
                
                img.onerror = () => {
                  console.warn(`Failed to load image: ${src}`);
                  resolve(false); // Don't fail the whole loading process for one image
                };
                
                img.src = src;
              })
          )
        );

        if (mounted) {
          setImagesLoaded(true);
        }
      } catch (error) {
        console.warn('Image preloading had some issues:', error);
        // Continue showing the site even if some images failed
        if (mounted) {
          setImagesLoaded(true);
        }
      }
    };

    preloadImages();

    return () => {
      mounted = false;
    };
  }, []);

  // Don't render anything until after hydration
  if (!mounted) {
    return null;
  }

  if (!imagesLoaded) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
        <p className="mt-4 text-lg font-medium text-gray-600">Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
}