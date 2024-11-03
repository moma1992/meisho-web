"use client";

import React from 'react';
import { Truck, Shield, Clock, Award, CheckCircle, MessageSquare } from 'lucide-react';
import { Header } from '@/components/header/header';

const FirstDivisionPage = () => {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4 pt-32 pb-12">
        {/* ヒーローセクション */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)] [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]">
            プロの技術が支える、
            <br />
            建設機械の確実な輸送。
          </h1>
          
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-[1.8] tracking-wide">
            私たちは、建設現場の大切なパートナーとして、
            豊富な車両と専門知識を活かした安全確実な輸送サービスを提供します。
            24時間365日、お客様のニーズに柔軟に対応し、建設プロジェクトの成功をサポートします。
          </p>
        </div>

        {/* サービスカード */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <div className="bg-blue-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-2">
              <Truck className="text-blue-600 w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-gray-900">充実の車両体制</h3>
            <p className="text-sm text-gray-600">20tトレーラーから8t平車まで、多様な輸送ニーズに対応</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <div className="bg-green-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-2">
              <Shield className="text-green-600 w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-gray-900">安全性の追求</h3>
            <p className="text-sm text-gray-600">熟練ドライバーと徹底した安全管理で確実な輸送を実現</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <div className="bg-purple-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-2">
              <Clock className="text-purple-600 w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-gray-900">24時間対応</h3>
            <p className="text-sm text-gray-600">緊急時も含め、年中無休で柔軟な輸送サービスを提供</p>
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
                <h3 className="font-bold mb-0.5 text-gray-900 text-sm">多様な車両ラインナップ</h3>
                <p className="text-sm text-gray-600">20tトレーラー、15tセルフローダー、8t平車など、様々な建設機械の輸送に対応可能な車両を完備</p>
              </div>
            </div>

            <div className="flex items-start hover:bg-white rounded transition-colors duration-200">
              <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
              <div>
                <h3 className="font-bold mb-0.5 text-gray-900 text-sm">建設機械の一時保管サービス</h3>
                <p className="text-sm text-gray-600">回送サービスの一環として、安全な保管施設での建設機械の一時預かりにも対応</p>
              </div>
            </div>

            <div className="flex items-start hover:bg-white rounded transition-colors duration-200">
              <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
              <div>
                <h3 className="font-bold mb-0.5 text-gray-900 text-sm">プロフェッショナルな対応</h3>
                <p className="text-sm text-gray-600">建設機械輸送の専門知識と豊富な経験を持つスタッフが、安全かつ確実な輸送を実現</p>
              </div>
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

export default FirstDivisionPage;
