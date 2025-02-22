'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Flower, Gift, Leaf, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Flower,
    title: "胡蝶蘭",
    description: "企業の祝い事や開店祝いに最適な高品質な胡蝶蘭",
  },
  {
    icon: Leaf,
    title: "観葉植物",
    description: "オフィスや店舗の雰囲気を演出する観葉植物",
  },
  {
    icon: Gift,
    title: "ギフトサービス",
    description: "各種お祝いやプレゼントに対応したギフトラッピング",
  },
];

export function PlantsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative min-h-screen">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Image Section (Now on the left) */}
        <div className="absolute inset-0 lg:relative lg:col-start-1">
          <Image
            src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80"
            alt="観葉植物"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 lg:bg-black/45" />
        </div>

        {/* Content Section (Now on the right) */}
        <div className="relative z-10 flex items-center px-4 py-24 lg:col-start-2 lg:px-12">
          <div className="w-full max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                胡蝶蘭・観葉植物販売
              </h2>
              <p className="mt-4 text-lg text-gray-200">
                お祝いやお部屋の装飾に、美しい胡蝶蘭と観葉植物をご提供。
                プロのフローリストが丁寧に育てた高品質な植物と、きめ細やかなアフターケアで、末永くお楽しみいただけます。
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
                <Link href="/services/plants" className="flex items-center gap-2">
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