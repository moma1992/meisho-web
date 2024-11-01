'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Truck, Wrench, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: "業務用機器販売",
    description: "ホシザキ製品を中心とした高品質な機器の提案・販売",
  },
  {
    icon: Truck,
    title: "搬入・配送",
    description: "安全かつ確実な機器の搬入・配送サービス",
  },
  {
    icon: Wrench,
    title: "設置・メンテナンス",
    description: "専門技術者による設置工事とアフターフォロー",
  },
];

export function SecondDivision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative min-h-screen">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="absolute inset-0 lg:relative lg:col-start-1">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[8px] lg:hidden" />
          <Image
            src="https://images.unsplash.com/photo-1583753075968-1236ccb83c66?auto=format&fit=crop&q=80"
            alt="業務用厨房機器"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        <div className="relative z-10 flex items-center px-4 py-24 lg:col-start-2 lg:px-12">
          <div className="w-full max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                第二事業部
              </h2>
              <p className="mt-4 text-lg text-white/90 [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
                業務用機器の販売から搬入・設置まで、トータルサポートを提供します。
                ホシザキ京阪株式会社の代理店として、高品質な製品と確かな技術力でお客様のニーズにお応えします。
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
                        <h3 className="font-semibold text-white">{service.title}</h3>
                        <p className="text-sm text-white/80">
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
                <Link href="/services/second-division" className="flex items-center gap-2">
                  詳しく見る
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}