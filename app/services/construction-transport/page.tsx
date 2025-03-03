import React from 'react';
import { Truck, Shield, Award, CheckCircle } from 'lucide-react';

const ConstructionTransportPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* ヒーローセクション */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
          プロの技術が支える、
          <br />
          建設機械の確実な輸送。
        </h1>
        
        <p className="text-lg text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] max-w-3xl mx-auto leading-relaxed">
          私たちは、建設現場の大切なパートナーとして、
          豊富な車両と専門知識を活かした安全確実な輸送サービスを提供します。
          お客様のニーズに柔軟に対応し、建設プロジェクトの成功をサポートします。
        </p>
      </div>

      {/* サービスカード */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Truck className="text-blue-600 w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">充実の車両体制</h3>
          <p className="text-gray-600">20tトレーラーから8t平車まで、多様な輸送ニーズに対応</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Shield className="text-green-600 w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">安全性の追求</h3>
          <p className="text-gray-600">熟練ドライバーと徹底した安全管理で確実な輸送を実現</p>
        </div>
      </div>

      {/* 強みセクション */}
      <div className="bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <Award className="mr-2" />
          当社の強み
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1">多様な車両ラインナップ</h3>
              <p className="text-gray-600">20tトレーラー、15tセルフローダー、8t平車など、様々な建設機械の輸送に対応可能な車両を完備</p>
            </div>
          </div>

          <div className="flex items-start">
            <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1">建設機械の一時保管サービス</h3>
              <p className="text-gray-600">回送サービスの一環として、安全な保管施設での建設機械の一時預かりにも対応</p>
            </div>
          </div>

          <div className="flex items-start">
            <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1">プロフェッショナルな対応</h3>
              <p className="text-gray-600">建設機械輸送の専門知識と豊富な経験を持つスタッフが、安全かつ確実な輸送を実現</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionTransportPage;