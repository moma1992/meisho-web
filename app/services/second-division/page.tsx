import React from 'react';
import { Store, ShieldCheck, Wrench, Award, CheckCircle, MessageSquare } from 'lucide-react';
import { Header } from '@/components/header/header';
import Image from 'next/image';

const EquipmentSalesPage = () => {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4 pt-32 pb-12">
        {/* ヒーローセクション */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)] [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]">
            厨房機器のプロフェッショナルが、
            <br />
            販売から設置までワンストップで。
          </h1>
          
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-[1.8] tracking-wide">
            業務用厨房機器の販売・搬入・設置まで一括して対応。
            ホシザキ京阪の正規代理店として、高品質な製品と確かな技術で、
            お客様の理想的な厨房環境の実現をサポートします。
          </p>
        </div>

        {/* サービスカード */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <div className="bg-blue-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-2">
              <Store className="text-blue-600 w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-gray-900">業務用機器販売</h3>
            <p className="text-sm text-gray-600">製氷機、冷凍冷蔵庫など幅広い厨房機器を取り扱い</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <div className="bg-green-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-2">
              <Wrench className="text-green-600 w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-gray-900">搬入・設置</h3>
            <p className="text-sm text-gray-600">複雑な搬入経路にも対応する専門的な設置サービス</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <div className="bg-purple-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-2">
              <ShieldCheck className="text-purple-600 w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-gray-900">正規代理店</h3>
            <p className="text-sm text-gray-600">ホシザキ京阪の正規代理店として高品質な製品を提供</p>
          </div>
        </div>

        {/* 強みセクション */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center text-gray-900">
            <Award className="mr-2" />
            当社の強み
          </h2>
          
          <div className="space-y-2">
            <div className="flex items-start hover:bg-white rounded transition-colors duration-200">
              <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
              <div>
                <h3 className="font-bold mb-0.5 text-gray-900 text-sm">ワンストップソリューション</h3>
                <p className="text-sm text-gray-600">販売から搬入、設置まで一括して対応し、追加費用の心配もなく安心してご利用いただけます</p>
              </div>
            </div>

            <div className="flex items-start hover:bg-white rounded transition-colors duration-200">
              <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
              <div>
                <h3 className="font-bold mb-0.5 text-gray-900 text-sm">豊富な取扱製品</h3>
                <p className="text-sm text-gray-600">製氷機、冷凍冷蔵庫、食器洗浄機、ビールディスペンサーなど、世界トップシェアの製品を提供</p>
              </div>
            </div>

            <div className="flex items-start hover:bg-white rounded transition-colors duration-200">
              <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
              <div>
                <h3 className="font-bold mb-0.5 text-gray-900 text-sm">専門的な設置技術</h3>
                <p className="text-sm text-gray-600">複雑な搬入経路や設置環境にも対応できる、熟練スタッフによる確実な設置作業を実施</p>
              </div>
            </div>
          </div>
        </div>

        {/* 配送車両セクション */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">配送車両</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/icetruck-side.png"
                alt="配送車両 側面"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://raw.githubusercontent.com/moma1992/meisho-web/main/public/images/icetruck-back.png"
                alt="配送車両 後部"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* フローティングお問い合わせボタン */}
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
          <a
            href="/contact"
            className="flex items-center bg-blue-600 text-white px-4 py-8 rounded-r-lg hover:bg-blue-700 transition-colors shadow"
          >
            <span className="[writing-mode:vertical-rl] font-semibold flex items-center">
              <MessageSquare className="w-5 h-5 mb-2" />
              お問い合わせ
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default EquipmentSalesPage;