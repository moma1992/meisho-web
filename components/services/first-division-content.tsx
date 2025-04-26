'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Shield, ArrowRight } from 'lucide-react';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';

const services = [
  {
    icon: Truck,
    title: "建設機械運搬",
    description: "3tユニック〜30tトレーラーまで豊富な方法での輸送",
  },
  {
    icon: Shield,
    title: "安全性の確保",
    description: "徹底した安全管理体制",
  },
];

export function FirstDivisionContent() {
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
                  第一事業部
                </h1>
                
                <Card className="mt-4 overflow-hidden bg-black/40 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <p className="text-pretty text-lg leading-relaxed text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                      建設機械の専門的な知識と経験を活かし、迅速かつ安全な輸送サービスを提供します。
                      お客様のプロジェクトを成功へと導くパートナーとして、最適なソリューションを提案します。
                    </p>
                    
                    <p className="mt-4 text-lg text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                      3tユニック〜30tトレーラーまで多様な車両を保有し、あらゆるお客様のニーズに柔軟にお応えします。
                    </p>
                    
                    <p className="mt-4 text-lg text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                      回送サービスの一環として、状況に応じて建設機械のお預かりの対応も行なっております。
                    </p>
                  </CardContent>
                </Card>
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
              src="/images/first-div-bg.jpg"
              alt="建設機械の輸送"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>
        </div>

        {/* トラック画像セクション */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mx-auto max-w-4xl overflow-hidden rounded-lg shadow-xl"
          >
            <div className="relative aspect-video w-full">
              <Image
                src="https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/bigtruck.jpg"
                alt="建設機械輸送トラック"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}