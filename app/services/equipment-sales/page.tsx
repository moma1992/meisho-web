"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Truck, Wrench, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

const services = [
  {
    icon: ShoppingCart,
    title: "業務用機器販売",
    description: "高品質な業務用機器の提案・販売",
  },
  {
    icon: Truck,
    title: "搬入サービス",
    description: "安全確実な機器の搬入作業",
  },
  {
    icon: Wrench,
    title: "設置・施工",
    description: "専門技術者による確実な設置作業",
  },
];

const products = [
  {
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
    alt: "業務用冷蔵庫",
    title: "業務用冷蔵庫",
  },
  {
    src: "https://images.unsplash.com/photo-1564495584622-0bb3af6f668e?auto=format&fit=crop&q=80&w=1200",
    alt: "製氷機",
    title: "製氷機",
  },
];

export default function EquipmentSalesPage() {
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
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  第二事業部では、業務用機器の販売から搬入、設置まで一貫したサービスを提供しています。
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
            {products.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="relative aspect-video overflow-hidden rounded-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/40">
                  <div className="flex h-full items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{image.title}</h3>
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
            className={cn(
              "group relative overflow-hidden bg-blue-600 px-8 hover:bg-blue-700",
              "transition-all duration-300 hover:shadow-lg"
            )}
          >
            <Link href="/contact" className="flex items-center gap-2">
              お問い合わせ
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}