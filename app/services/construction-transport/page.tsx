"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ConstructionTransportPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">第一事業部</h1>
          <p className="text-lg text-muted-foreground">
            第一事業部では、建設機械の運搬業務を中心に、お客様のニーズに合わせた安全で迅速な輸送サービスを提供しています。20tトレーラーやセルフローダーを使用し、大型機械の輸送に特化しています。
          </p>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">主なサービス内容：</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>建設機械の運搬</li>
              <li>20tトレーラー輸送</li>
              <li>セルフローダー輸送</li>
              <li>大型機械の輸送</li>
            </ul>
          </div>
          <Link href="/contact">
            <Button size="lg" className="mt-6">
              お問い合わせ
            </Button>
          </Link>
        </div>
        <div className="relative aspect-video lg:aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=1200&auto=format&fit=crop"
            alt="建設機械の輸送"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </div>

      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">輸送実績</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "大型建機の輸送",
              description: "油圧ショベル、ブルドーザーなどの大型建設機械の安全な輸送",
              image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800&auto=format&fit=crop",
            },
            {
              title: "セルフローダー輸送",
              description: "迅速な積み下ろしが可能なセルフローダーによる効率的な輸送",
              image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800&auto=format&fit=crop",
            },
            {
              title: "特殊車両輸送",
              description: "特殊な形状や重量の建設機械に対応した専門的な輸送",
              image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800&auto=format&fit=crop",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}