'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function CompanyIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="container relative mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-balance text-lg leading-relaxed text-muted-foreground">
            2011年に設立した株式会社明翔は、産業基盤整備・都市づくりで地域社会に貢献する企業としてお客様をはじめ地域社会のニーズにお応えし実現するために建設機械輸送業から建設機械レンタル・リースやクレーン作業、産業廃棄物収集運搬業など様々なサービスを拡大し、提案の幅を広げてきました。
          </p>
        </motion.div>
      </div>
    </section>
  );
}