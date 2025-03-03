'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: "建設機械運搬",
    description: "20tトレーラーによる安全確実な輸送",
  },
  {
    icon: Shield,
    title: "安全性の確保",
    description: "徹底した安全管理体制",
  },
];

export function FirstDivision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative min-h-screen">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="relative z-10 flex items-center px-4 py-24 lg:px-12">
          <div className="w-full max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] sm:text-5xl">
                第一事業部
              </h2>
              <p className="mt-4 text-lg text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                建設機械の専門的な知識と経験を活かし、迅速かつ安全な輸送サービスを提供します。
                お客様のプロジェクトを成功へと導くパートナーとして、最適なソリューションを提案します。
              </p>
            </motion.div>

            <div className="mt-12 grid gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-white/90 px-8 text-background hover:bg-white"
              >
                <Link href="/services/first-division" className="flex items-center gap-2">
                  詳しく見る
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 lg:relative lg:col-start-2">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[8px] lg:hidden" />
          <Image
            src="/images/first-div-bg.jpg"
            alt="建設機械の輸送"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
      </div>
    </div>
  );
}