'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, ArrowRight } from "lucide-react";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

const benefits = [
  {
    icon: Users,
    title: "チームワーク重視",
    description: "経験豊富な先輩社員によるサポート体制で、安心して成長できる環境です。",
  },
  {
    icon: Target,
    title: "キャリア形成",
    description: "資格取得支援制度や研修制度を通じて、プロフェッショナルとしての成長を支援します。",
  },
  {
    icon: Heart,
    title: "充実した福利厚生",
    description: "社会保険完備、有給休暇、各種手当など、働きやすい環境を整えています。",
  },
];

const positions = [
  {
    title: "大型トラックドライバー",
    department: "第一事業部",
    type: "正社員",
    description: "建設機械の運搬業務を担当していただきます。大型免許必須。経験者優遇。",
    requirements: [
      "大型自動車免許必須",
      "建設機械運搬の経験者歓迎",
      "安全意識が高く、責任感のある方",
    ],
    image: "https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/bigtruck2.jpg?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "搬入•搬出スタッフ",
    department: "第二事業部",
    type: "正社員",
    description: "業務用機器の搬入•搬出を担当していただきます。未経験者歓迎。",
    requirements: [
      "普通自動車免許必須",
      "体力に自信のある方",
      "コミュニケーション能力の高い方",
    ],
    image: "https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/hero.jpg?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "フローリスト",
    department: "胡蝶蘭・観葉植物販売部門",
    type: "正社員",
    description: "胡蝶蘭や観葉植物の管理、販売、ディスプレイを担当していただきます。",
    requirements: [
      "花や植物の基礎知識がある方",
      "接客経験のある方歓迎",
      "センスと創造力のある方",
    ],
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=1200",
  },
];

export function CareersContent() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="relative flex min-h-[60vh] items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200"
              alt="チームワーク"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl text-center"
            >
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                明翔で、あなたの未来を描こう
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-gray-200 sm:text-xl">
                私たちは常に、情熱を持って働ける仲間を探しています。
                あなたの経験と熱意を活かし、共に成長していける環境をご用意しています。
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
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold">働く環境</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                社員一人ひとりが活躍できる、魅力的な職場環境を整えています
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div className="mb-4 rounded-full bg-primary/10 p-3">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold">募集職種</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                現在募集中のポジション
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {positions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={position.image}
                        alt={position.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                          {position.department}
                        </span>
                        <span className="ml-2 rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary-foreground">
                          {position.type}
                        </span>
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">{position.title}</h3>
                      <p className="mb-4 text-muted-foreground">{position.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">応募要件：</h4>
                        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                          {position.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 text-center"
            >
              <Button
                asChild
                size="lg"
                className="group bg-blue-600 hover:bg-blue-700"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  応募する
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}