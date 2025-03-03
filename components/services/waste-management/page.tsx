"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Recycle, Truck, Leaf, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

const services = [
  {
    icon: Recycle,
    title: "産業廃棄物収集",
    description: "分別・収集から最終処分までの一貫したサービス",
  },
  {
    icon: Truck,
    title: "特別管理産業廃棄物",
    description: "特別な管理が必要な廃棄物の適正な収集・運搬",
  },
  {
    icon: Leaf,
    title: "環境配慮",
    description: "リサイクル推進による環境負荷低減",
  },
];

const wasteTypes = [
  {
    title: "建設系廃棄物",
    description: "建設現場から発生する木材、コンクリート、アスファルト等の廃材",
    image: "https://images.unsplash.com/photo-1590668468552-8a8a6c033067?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "工場系廃棄物",
    description: "工場から排出される金属くず、廃プラスチック、汚泥等",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "産業廃棄物収集車両",
    description: "各種産業廃棄物の収集・運搬に使用する専用車両",
    image: "https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/danpu.jpeg",
  },
];

export default function WasteManagementPage() {
  return (
    <>
      <Header />
      <div className="relative min-h-screen">
        {/* Background image */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/images/third-div-bg.jpg"
            alt="産業廃棄物収集運搬"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <main className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] sm:text-5xl">
              第三事業部
            </h1>
            <p className="mt-4 text-xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              産業廃棄物の適正処理を通じて、持続可能な社会の実現に貢献します
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
                    第三事業部では、産業廃棄物収集運搬業として、各種産業廃棄物の適正な収集・運搬サービスを提供しています。
                    法令遵守はもちろん、環境に配慮した持続可能な廃棄物処理を実現し、循環型社会の形成に貢献します。
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
              className="space-y-6 rounded-lg bg-black/40 backdrop-blur-sm p-6"
            >
              {wasteTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative aspect-video overflow-hidden rounded-lg"
                >
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/40">
                    <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                      <h3 className="mb-2 text-2xl font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">{type.title}</h3>
                      <p className="text-sm text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">{type.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
        </main>
      </div>
      <Footer />
    </>
  );
}