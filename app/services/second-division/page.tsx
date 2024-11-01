"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Truck, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

const services = [
  {
    icon: ShoppingCart,
    title: "業務用機器販売",
    description: "ホシザキ製品を中心とした高品質な業務用機器の提案・販売",
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

const equipmentExamples = [
  {
    title: "業務用冷蔵庫",
    description: "省エネ性能に優れた最新の業務用冷蔵庫",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "製氷機",
    description: "衛生的で信頼性の高い製氷機",
    image: "https://images.unsplash.com/photo-1583753075968-1236ccb83c66?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "厨房機器",
    description: "プロ仕様の高性能厨房機器",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function SecondDivisionPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            第二事業部
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            業務用機器の販売から搬入・設置まで、トータルサポートを提供します。
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  第二事業部では、ホシザキ京阪株式会社の代理店として、業務用機器の販売から搬入、設置まで一貫したサービスを提供しています。
                  お客様のニーズに合わせた最適な機器の選定と、確かな技術力による安心の設置工事を実現します。
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
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">
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
            className="space-y-6 rounded-lg bg-muted/50 p-6"
          >
            {equipmentExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="relative aspect-video overflow-hidden rounded-lg"
              >
                <Image
                  src={example.image}
                  alt={example.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/40">
                  <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                    <h3 className="mb-2 text-2xl font-bold text-white">{example.title}</h3>
                    <p className="text-sm text-gray-200">{example.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}