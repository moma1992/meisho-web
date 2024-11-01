'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Clock, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ContactSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">お問い合わせ</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ご相談・ご質問等ございましたら、お気軽にお問い合わせください。
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">営業時間</h3>
                      <ul className="mt-2 space-y-1 text-muted-foreground">
                        <li className="font-medium text-foreground">月曜日 - 金曜日: 8:00 - 17:00</li>
                        <li className="font-medium text-foreground">土曜日: 8:00 - 12:00</li>
                        <li>日曜・祝日: 休業</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">お電話でのお問い合わせ</h3>
                      <p className="mt-2 text-2xl font-bold text-primary">
                        <a href="tel:072-298-6900" className="hover:underline">
                          072-298-6900
                        </a>
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        電話受付：平日 9時〜17時
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">メールでのお問い合わせ</h3>
                      <p className="mt-2">
                        <a
                          href="mailto:meisho-sakai@work.odn.ne.jp"
                          className="text-primary hover:underline"
                        >
                          meisho-sakai@work.odn.ne.jp
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">所在地</h3>
                      <div className="mt-2 space-y-2 text-muted-foreground">
                        <p>
                          <span className="font-medium text-foreground">本社:</span>
                          <br />
                          〒590-0141 大阪府堺市南区桃山台2-3-4
                        </p>
                        <p>
                          <span className="font-medium text-foreground">車庫:</span>
                          <br />
                          〒590-0152 大阪府堺市南区和田295-1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                <h3 className="text-xl font-semibold">
                  お問い合わせフォーム
                </h3>
                <p className="mt-2 text-muted-foreground">
                  各種お問い合わせは、下記フォームからお気軽にご連絡ください。
                </p>
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "mt-8 w-full max-w-sm",
                    "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  <Link href="/contact">
                    お問い合わせフォームへ
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}