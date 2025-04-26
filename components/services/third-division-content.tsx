'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Recycle, Truck, ArrowRight } from 'lucide-react';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';

const services = [
  {
    icon: Recycle,
    title: "産業廃棄物収集",
    description: "適正な分別と収集サービス",
  },
  {
    icon: Truck,
    title: "運搬サービス",
    description: "安全確実な廃棄物の運搬",
  },
];

export function ThirdDivisionContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Header />
      <div ref={ref} className="relative min-h-screen">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
          <div className="relative z-10 flex items-center px-4 py-24 lg:px-12">
            <div className="w-full max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] sm:text-5xl">
                  第三事業部
                </h1>
                <p className="mt-4 text-lg text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                  産業廃棄物の適正処理を通じて、持続可能な社会の実現に貢献します。
                  法令遵守はもちろん、環境に配慮した廃棄物処理を実現し、循環型社会の形成に貢献します。
                </p>
              </motion.div>

              <div className="mt-12 grid gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden bg-black/40 backdrop-blur-sm">
                      <CardContent className="flex items-start gap-4 p-4">
                        <div className="rounded-lg bg-white/10 p-2">
                          <service.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">{service.title}</h3>
                          <p className="text-sm text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                            {service.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden bg-white/90 px-8 text-background hover:bg-white"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    お問い合わせ
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="absolute inset-0 lg:relative lg:col-start-2">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[8px] lg:hidden" />
            <Image
              src="/images/third-div-bg.jpg"
              alt="産業廃棄物収集運搬"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}