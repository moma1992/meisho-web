import { Metadata } from 'next';
import { ThirdDivisionContent } from '@/components/services/third-division-content';

export const metadata: Metadata = {
  title: '第三事業部 | 株式会社明翔',
  description: '産業廃棄物の適正処理を通じて、持続可能な社会の実現に貢献します。',
};

export default function ThirdDivisionPage() {
  return <ThirdDivisionContent />;
}