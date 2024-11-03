'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ImageWithFallback } from '@/components/image-with-fallback';

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <ImageWithFallback
            src="/images/hero.jpg"
            alt="建設現場の風景"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
            loading="eager"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className={cn(
            "max-w-3xl space-y-6 text-left",
            "sm:space-y-8 md:space-y-10",
            "sm:text-left"
          )}
        >
          <h1 className={cn(
            "text-balance text-4xl font-extrabold leading-tight text-white",
            "drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl",
            "tracking-tight"
          )}>
            まちの成長を支える<br />確かな輸送力。
          </h1>
          
          <p className={cn(
            "text-pretty text-lg text-gray-200",
            "drop-shadow-md sm:text-xl md:text-2xl",
            "leading-relaxed"
          )}>
            建設機械運搬からレンタル・リース、<br className="hidden sm:inline" />
            産業廃棄物の収集運搬まで。<br />
            多角的なサービスで地域社会の基盤を支え、<br className="hidden sm:inline" />
            まちの未来をつくります。
          </p>
        </motion.div>
      </div>
    </section>
  );
}