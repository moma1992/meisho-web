"use client";

import React from 'react';
import { Truck, Shield, Recycle, Award, CheckCircle, MessageSquare } from 'lucide-react';
import { Header } from '@/components/header/header';

const ThirdDivisionPage = () => {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4 pt-32 pb-12">
        {/* ヒーローセクション */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)] [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]">
            環境に配慮した、
            <br />
            確実な産業廃棄物処理。
          </h1>
          
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-[1.8] tracking-wide">
            私たちは、法令に準拠した適正な産業廃棄物の収集・運搬サービスを提供します。
            環境保全と安全性を最優先に、お客様の廃棄物処理における課題を解決し、
            持続可能な社会の実現に貢献します。
          </p>
        </div>

        {/* サービスカード */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <div className="bg-blue-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-2">
              <Recycle className="text-blue-600 w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-gray-900">産業廃棄物収集</h3>
            <p className="text-sm text-gray-600">適正な分別と効率的な収集サービスを提供</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <div className="bg-green-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-2">
              <Truck className="text-green-600 w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-gray-900">運搬サービス</h3>
            <p className="text-sm text-gray-600">安全かつ確実な廃棄物の運搬を実施</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <div className="bg-purple-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-2">
              <Shield className="text-purple-600 w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-gray-900">法令遵守</h3>
            <p className="text-sm text-gray-600">徹底した法令遵守による適正処理の実施</p>
          </div>
        </div>

        {/* 強みセクション */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center text-gray-900">
            <Award className="mr-2" />
            取扱品目と特徴
          </h2>
          
          <div className="space-y-2">
            <div className="flex items-start hover:bg-white rounded transition-colors duration-200">
              <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
              <div>
                <h3 className="font-bold mb-0.5 text-gray-900 text-sm">建設廃材の収集・運搬</h3>
                <p className="text-sm text-gray-600">建設現場から発生する様々な種類の廃材を、適切な分別とともに収集・運搬します</p>
              </div>
            </div>

            <div className="flex items-start hover:bg-white rounded transition-colors duration-200">
              <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
              <div>
                <h3 className="font-bold mb-0.5 text-gray-900 text-sm">産業廃棄物の適正処理</h3>
                <p className="text-sm text-gray-600">工場等から排出される産業廃棄物を、環境に配慮しながら適正に処理します</p>
              </div>
            </div>

            <div className="flex items-start hover:bg-white rounded transition-colors duration-200">
              <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
              <div>
                <h3 className="font-bold mb-0.5 text-gray-900 text-sm">特別管理産業廃棄物対応</h3>
                <p className="text-sm text-gray-600">特別な管理が必要な廃棄物も、専門的な知識と設備で安全に収集・運搬します</p>
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

export default ThirdDivisionPage;
