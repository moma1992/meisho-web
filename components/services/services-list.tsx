'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowRight, Truck, ShoppingCart, Recycle, Flower } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: '第一事業部',
    description: '建設機械運搬業を中心とした、安全で迅速な輸送サービス',
    icon: Truck,
    href: '/services/first-division',
    items: ['20tトレーラー輸送', 'セルフローダー輸送', '大型機械の輸送'],
  },
  {
    title: '第二事業部',
    description: '業務用機器の販売から搬入・設置までのトータルサポート',
    icon: ShoppingCart,
    href: '/services/second-division',
    items: ['業務用機器販売', '搬入・配送サービス', '設置・メンテナンス'],
  },
  {
    title: '第三事業部',
    description: '産業廃棄物の適正な収集・運搬サービス',
    icon: Recycle,
    href: '/services/third-division',
    items: ['産業廃棄物収集', '運搬サービス', '適正処理'],
  },
  {
    title: '胡蝶蘭・観葉植物販売',
    description: '法人・個人向けの胡蝶蘭と観葉植物の販売',
    icon: Flower,
    href: '/services/plants',
    items: ['胡蝶蘭販売', '観葉植物販売', 'メンテナンスサービス'],
  },
];

export function ServicesList() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={service.href}>
                <Card className="group h-full transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="space-y-4 pb-4">
                    <div className="rounded-lg bg-primary/10 p-3 w-fit">
                      <service.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}