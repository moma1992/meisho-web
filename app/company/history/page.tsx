"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Timeline } from "@/components/company/timeline";
import { Equipment } from "@/components/company/equipment";

const historyItems = [
  {
    year: "2011年10月",
    title: "株式会社明翔 設立",
    description: "一般貨物運送事業（重機運搬）としてスタート",
  },
  {
    year: "2012年2月",
    title: "事業拡大",
    description: "トラック7台体制でサービス開始",
  },
  {
    year: "2016年",
    title: "新規事業開始",
    description: "胡蝶蘭・観葉植物販売部門を設立",
  },
  {
    year: "2017年7月",
    title: "産業廃棄物収集運搬業許可取得",
    description: "第三事業部として産業廃棄物事業を開始",
  },
  {
    year: "2017年9月",
    title: "第二事業部設立",
    description: "業務用厨房機器運搬・設置作業開始",
  },
  {
    year: "2018年1月",
    title: "組織改革",
    description: "事業部制導入による効率化を実現",
  },
  {
    year: "2020年4月",
    title: "車両増強",
    description: "12tダンプを導入し、総車両数19台体制へ",
  },
];

const equipmentList = [
  {
    category: "トレーラー・トラック",
    items: [
      { name: "20tトレーラー", count: 4, description: "大型建設機械の輸送用" },
      { name: "トレーラーヘッド", count: 2, description: "トレーラー牽引用" },
      { name: "15t平ボディ", count: 1, description: "大型資材輸送用" },
      { name: "10t平ボディ", count: 2, description: "中型機械・資材輸送用" },
      { name: "8t平ボディ", count: 4, description: "建設機械輸送用" },
      { name: "4tユニック", count: 1, description: "小型クレーン付き" },
      { name: "3tユニック", count: 1, description: "小型クレーン付き" },
      { name: "2tパワーゲート", count: 2, description: "小型機器配送用" },
      { name: "1.5tパワーゲート", count: 1, description: "小型配送用" },
      { name: "12tダンプ", count: 1, description: "土木・建設資材運搬用" },
    ],
  },
  {
    category: "特殊機器",
    items: [
      { name: "フォークリフト", count: 2, description: "荷役作業用" },
      { name: "ハンドリフト", count: 4, description: "倉庫内作業用" },
      { name: "スロープ", count: 6, description: "各種積み降ろし用" },
    ],
  },
  {
    category: "施設",
    items: [
      { name: "本社事務所", description: "堺市南区桃山台" },
      { name: "車両基地", description: "堺市南区和田" },
      { name: "資材倉庫", description: "500㎡" },
    ],
  },
];

export default function CompanyHistoryPage() {
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
              沿革
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              創業からの歩み
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <Timeline items={historyItems} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16"
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-6 text-2xl font-bold">保有車両・設備</h2>
                  <Equipment categories={equipmentList} />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}