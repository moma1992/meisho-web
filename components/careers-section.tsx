'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: "チームワーク重視",
    description: "経験豊富な先輩社員のサポート",
  },
  {
    icon: Target,
    title: "キャリア形成",
    description: "資格取得支援制度・研修制度",
  },
  {
    icon: Heart,
    title: "福利厚生",
    description: "働きやすい環境づくり",
  },
];

export function CareersSection() {
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
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                採用情報
              </h2>
              <p className="mt-4 text-lg text-gray-200">
                私たちは常に、情熱を持って働ける仲間を探しています。
                あなたの経験と熱意を活かし、共に成長していける環境をご用意しています。
              </p>
            </motion.div>

            <div className="mt-12 grid gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden bg-black/40 backdrop-blur-sm">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="rounded-lg bg-white/10 p-2">
                        <benefit.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{benefit.title}</h3>
                        <p className="text-sm text-white/80">
                          {benefit.description}
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
                <Link href="/careers" className="flex items-center gap-2">
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
            src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80"
            alt="トラックドライバー"
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