"use client";

import { motion } from 'framer-motion';
import Link from 'next/link'; 

export function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      {/* 画像のオーバーレイ処理を改善 */}
      <div className="absolute inset-0 w-full h-full">
        {/* 背景画像 */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/hero.jpg")',
          }}
        />
        
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-4 py-40 text-right">
        <div className="max-w-3xl ml-auto">
          {/* メインコピー */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] mb-6 leading-tight">
            まちの成長を支える
            <br />
            <span className="inline-block mt-2">
              確かな輸送力。
            </span>
          </h1>

          {/* サブコピー */}
          <div className="space-y-3 text-lg md:text-xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] font-medium">
            <p>建設機械運搬からレンタル・リース、</p>
            <p>産業廃棄物の収集運搬まで。</p>
            <p>多角的なサービスで地域社会の基盤を支え、</p>
            <p>まちの未来をつくります。</p>
          </div>

          {/* CTAボタン */}
          <div className="mt-12 flex flex-wrap gap-4 justify-end">
            <Link href="/company/about"> {/* 会社概要ページへのリンク */}
              <button className="
                px-8 py-4 
                bg-blue-600 hover:bg-blue-700
                text-white font-bold
                rounded-lg
                transform transition-all
                hover:scale-105
                shadow-lg hover:shadow-xl
              ">
                会社概要を見る
              </button>
            </Link>
            <Link href="/contact"> {/* お問い合わせページへのリンク */}
              <button className="
                px-8 py-4
                bg-white/10 hover:bg-white/20
                text-white font-bold
                rounded-lg
                transform transition-all
                hover:scale-105
                border-2 border-white/30
              ">
                お問い合わせ
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Scroll</span>
          <svg 
            className="w-8 h-8 transition-transform transform hover:scale-125 hover:rotate-12 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;