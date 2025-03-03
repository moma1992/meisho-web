'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flower, Gift, Leaf, Heart, ArrowRight, Instagram, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

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
  {
    icon: Heart,
    title: "メンテナンス",
    description: "植物の健康を保つための定期的なケアサービス",
  },
];

const products = [
  {
    title: "胡蝶蘭（白）",
    description: "清楚で気品のある白い胡蝶蘭",
    image: "https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/white.jpg",
    category: "祝い事全般",
  },
  {
    title: "花束",
    description: "季節の花々を詰め込んだ、心温まる贈り物",
    image: "https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/hanataba.jpg",
    category: "開店祝い・周年祝い",
  },
  {
    title: "観葉植物",
    description: "空間を彩る様々な観葉植物",
    image: "https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/green.jpg",
    category: "オフィス・店舗装飾",
  },
];

export function PlantsContent() {
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
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] sm:text-5xl">
            胡蝶蘭・観葉植物販売
          </h1>
          <p className="mt-4 text-xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            お祝いやお部屋の装飾に、美しい胡蝶蘭と観葉植物をご提供
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
                  企業の各種お祝い事や開店祝い、個人のギフトなど、様々なシーンに対応した胡蝶蘭と観葉植物を取り揃えています。
                  プロのフローリストが丁寧に育てた高品質な植物と、きめ細やかなアフターケアで、末永くお楽しみいただけます。
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
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="relative aspect-video overflow-hidden rounded-lg"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/40">
                  <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                    <h3 className="mb-2 text-2xl font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">{product.title}</h3>
                    <p className="mb-2 text-sm text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">{product.description}</p>
                    <span className="rounded-full bg-white/20 px-4 py-1 text-sm text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                      {product.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Partner Shops Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="mb-8 text-2xl font-bold text-center">提携ショップ</h2>
          
          {/* SpreadGreen Information */}
          <Card className="overflow-hidden border-2 border-green-100/20 mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                <div className="relative h-40 w-40 overflow-hidden rounded-lg">
                  <Image
                    src="https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/grennline.jpg"
                    alt="SpreadGreen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <h3 className="text-2xl font-bold">スプレッドグリーン</h3>
                  <div className="flex flex-col items-center gap-2 md:flex-row md:items-start">
                    <MapPin className="h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">
                      〒594-1105 大阪府和泉市のぞみ野１丁目１２−３４
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 md:flex-row md:items-start">
                    <Phone className="h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">
                      0725-99-8815
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 md:flex-row md:items-start">
                    <Instagram className="h-5 w-5 shrink-0 text-primary" />
                    <a
                      href="https://www.instagram.com/spreadgreen_?igsh=MTN2bzNvMXkzNWp0ZQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @spreadgreen_
                    </a>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <Button
                      asChild
                      variant="outline"
                      className="group border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                    >
                      <a
                        href="https://www.instagram.com/spreadgreen_?igsh=MTN2bzNvMXkzNWp0ZQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Instagram className="h-4 w-4" />
                        Instagramをフォロー
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Jewelry & Jail Information */}
          <Card className="overflow-hidden border-2 border-purple-100/20">
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                <div className="relative h-40 w-40 overflow-hidden rounded-lg">
                  <Image
                    src="https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/j-rogo.jpg"
                    alt="Jewelry & Jail Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <h3 className="text-2xl font-bold">jewelry&jail</h3>
                  <div className="flex flex-col items-center gap-2 md:flex-row md:items-start">
                    <Instagram className="h-5 w-5 shrink-0 text-primary" />
                    <a
                      href="https://www.instagram.com/jewelry_jail?igsh=cGFlNGRndGUxdG45"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @jewelry_jail
                    </a>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <Button
                      asChild
                      variant="outline"
                      className="group border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                    >
                      <a
                        href="https://www.instagram.com/jewelry_jail?igsh=cGFlNGRndGUxdG45"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Instagram className="h-4 w-4" />
                        Instagramをフォロー
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Add the menu image below */}
              <div className="mt-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/j-menu.jpg"
                    alt="Jewelry & Jail Menu"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
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