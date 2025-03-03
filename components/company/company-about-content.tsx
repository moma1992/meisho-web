'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';
import {
  Building2,
  Mail,
  Phone,
  Printer,
  Instagram
} from 'lucide-react';

const companyInfo = [
  { label: "会社名", value: "株式会社明翔" },
  { label: "代表取締役", value: "池田 祐子" },
  { label: "資本金", value: "800万円" },
  { label: "従業員数", value: "25名" },
  { label: "本社所在地", value: "〒590-0141 大阪府堺市南区桃山台2-3-4" },
  { label: "車庫", value: "〒590-0152 大阪府堺市南区和田295-1" },
];

const contactInfo = [
  {
    title: "本社経理部",
    tel: "072-298-6900",
    fax: "072-298-6902",
  },
  {
    title: "第一事業部",
    tel: "072-289-5116",
    fax: "072-290-0051",
  },
  {
    title: "第二事業部",
    tel: "072-298-6901",
    fax: "072-298-6902",
  },
];

const affiliatedShops = [
  {
    title: "スプレッドグリーン",
    address: "〒594-1105 大阪府和泉市のぞみ野１丁目１２−３４",
    tel: "0725-99-8815",
    instagram: "@spreadgreen_",
    instagramUrl: "https://www.instagram.com/spreadgreen_?igsh=MTN2bzNvMXkzNWp0ZQ==",
    hours: "月〜水,金〜日　11:00〜18:00（木曜日定休日）"
  },
  {
    title: "jewelry&jail",
    instagram: "@jewelry_jail",
    instagramUrl: "https://www.instagram.com/jewelry_jail?igsh=cGFlNGRndGUxdG45",
    hours: "月〜水,金〜日　20:00〜24:00（lo23:30 木曜日定休日）"
  }
];

export function CompanyAboutContent() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              会社概要
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              産業基盤整備・都市づくりで地域社会に貢献する企業として
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <Table>
                    <TableBody>
                      {companyInfo.map((item) => (
                        <TableRow key={item.label}>
                          <TableCell className="w-1/3 font-medium">
                            {item.label}
                          </TableCell>
                          <TableCell>{item.value}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell className="font-medium">
                          メールアドレス
                        </TableCell>
                        <TableCell>
                          <a
                            href="mailto:meisho-sakai@work.odn.ne.jp"
                            className="text-blue-600 hover:underline dark:text-blue-400"
                          >
                            meisho-sakai@work.odn.ne.jp
                          </a>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid gap-6 md:grid-cols-3"
            >
              {contactInfo.map((info, index) => (
                <Card key={info.title}>
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-semibold">{info.title}</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>TEL: {info.tel}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Printer className="h-4 w-4 text-muted-foreground" />
                        <span>FAX: {info.fax}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid gap-6 md:grid-cols-2"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="mt-1 h-5 w-5 text-muted-foreground" />
                    <div>
                      <h3 className="mb-2 font-semibold">本社</h3>
                      <p className="text-sm text-muted-foreground">
                        〒590-0141
                        <br />
                        大阪府堺市南区桃山台2-3-4
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="mt-1 h-5 w-5 text-muted-foreground" />
                    <div>
                      <h3 className="mb-2 font-semibold">車庫</h3>
                      <p className="text-sm text-muted-foreground">
                        〒590-0152
                        <br />
                        大阪府堺市南区和田295-1
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="mb-6 text-2xl font-bold">関連店舗</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {affiliatedShops.map((shop) => (
                  <Card key={shop.title}>
                    <CardContent className="p-6">
                      <h3 className="mb-4 font-semibold">{shop.title}</h3>
                      <div className="space-y-3 text-sm">
                        {shop.address && (
                          <div className="flex items-start gap-2">
                            <Building2 className="mt-1 h-4 w-4 text-muted-foreground" />
                            <span>{shop.address}</span>
                          </div>
                        )}
                        {shop.tel && (
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>TEL: {shop.tel}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Instagram className="h-4 w-4 text-muted-foreground" />
                          <a
                            href={shop.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline dark:text-blue-400"
                          >
                            {shop.instagram}
                          </a>
                        </div>
                        <div className="mt-2 text-muted-foreground">
                          <p>{shop.hours}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}