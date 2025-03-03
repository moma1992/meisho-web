'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Truck, Wrench, ArrowRight } from 'lucide-react';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';

const services = [
  {
    icon: ShoppingCart,
    title: "業務用機器販売",
    description: "ホシザキ機器、他メーカー、ガス機器(マルゼン)等の高品質な機器の提案・販売",
  },
  {
    icon: Truck,
    title: "搬入・配送",
    description: "安全かつ確実な機器の搬入・配送サービス",
  },
  {
    icon: Wrench,
    title: "設置・撤去・廃棄",
    description: "専門技術者による設置工事",
  },
  {
    icon: Truck,
    title: "多様な輸送手段",
    description: "3tユニック〜30tトレーラーまで豊富な方法での輸送",
  },
];

export function SecondDivisionContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Header />
      <div ref={ref} className="relative min-h-screen">
        {/* Background image - now positioned as a fixed background */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/images/second-div-bg.jpg"
            alt="業務用厨房機器"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] sm:text-5xl">
              第二事業部
            </h1>
            <p className="mt-4 text-xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              業務用機器販売・搬入・設置
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <Card className="overflow-hidden bg-black/40 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-pretty text-lg leading-relaxed text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                    業務用機器の販売から搬入・設置まで、トータルサポートを提供します。
                    ホシザキ京阪株式会社の代理店として、高品質な製品と確かな技術力でお客様のニーズにお応えします。
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="overflow-hidden bg-black/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="overflow-hidden bg-black/40 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="mb-6 text-2xl font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">業務用機器販売・搬入・設置</h3>
                  <div className="space-y-4 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                    <p>
                      厨房機器全般の新規設置作業及び既存業務用機器の入替作業を行っております。
                    </p>
                    
                    <p>
                      一般的に店舗様の厨房内は多く機器があり、搬入経路、接続も厳しい現場もあり、一般の配送業者では運べません。
                      ネットにて購入しても、配送でトラックより荷降ろしは行ってくれない、設置費は別途、撤去も別途とプラス費用が多く発生しますが、
                      当社では販売から設置(入替)まで一括して行うことが出来お客様の負担も解消できます。
                    </p>
                    
                    <p>
                      店舗の状況に応じて「階段担ぎ上げ」「カウンター越え」「移設」等、対応致します。
                    </p>
                    
                    <p>
                      また機種によっては、レベル出し・可とう管接続工事(都市・ＬＰ)・給排水管の配管工事・電源プラグの接続工事の後、厨房機器の試運転を行います。
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/track-kitchen.jpeg"
                  alt="業務用機器輸送トラック"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex flex-col items-center gap-4"
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
      <Footer />
    </>
  );
}