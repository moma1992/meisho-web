"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Shield, Clock, Scale, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

const features = [
  {
    icon: Truck,
    title: "20tトレーラー輸送",
    description: "大型建設機械の安全確実な輸送",
  },
  {
    icon: Shield,
    title: "安全性の確保",
    description: "徹底した安全管理体制",
  },
  {
    icon: Clock,
    title: "迅速な対応",
    description: "24時間365日の緊急対応",
  },
  {
    icon: Scale,
    title: "豊富な実績",
    description: "多様な建設機械の輸送経験",
  },
];

const strengths = [
  "専門スタッフによる丁寧な機器の取り扱い",
  "最新の輸送機器と安全設備の導入",
  "緊急時の迅速な対応体制",
  "豊富な輸送実績に基づく確かな技術",
  "各種保険完備による安心のサービス",
];

const images = [
  {
    src: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=1200",
    alt: "建設機械の輸送",
    caption: "大型建設機械の安全な輸送",
  },
  {
    src: "https://images.unsplash.com/photo-1570941994243-4781d39a6087?auto=format&fit=crop&q=80&w=1200",
    alt: "トレーラーによる輸送",
    caption: "20tトレーラーによる確実な輸送",
  },
  {
    src: "https://images.unsplash.com/photo-1573030889348-c6b0f8b15e40?auto=format&fit=crop&q=80&w=1200",
    alt: "建設現場での作業",
    caption: "建設現場での慎重な積み下ろし",
  },
];

export default function FirstDivisionPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="relative min-h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={images[0].src}
              alt="建設機械運搬業"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          </div>
          
          <div className="container relative z-10 mx-auto flex min-h-[60vh] items-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                確かな技術で、<br />安心・安全な輸送を提供。
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-gray-200 sm:text-xl">
                第一事業部では、建設機械の専門的な知識と経験を活かし、迅速かつ安全な輸送サービスを地域社会に提供します。
                お客様のプロジェクトを成功へと導くためのパートナーとして、最適な輸送ソリューションを提案します。
              </p>
            </motion.div>
          </div>
        </section>

        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
              {features.map((feature, index) => (
                <Card key={feature.title} className="overflow-hidden">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="mb-4 rounded-full bg-primary/10 p-3 w-fit"
                    >
                      <feature.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">当社の強み</h2>
                <div className="space-y-4">
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-muted-foreground">{strength}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-4 left-4">
                        <p className="text-sm text-white">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}