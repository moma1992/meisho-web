import { Metadata } from 'next';
import { PlantsContent } from '@/components/services/plants-content';

export const metadata: Metadata = {
  title: '胡蝶蘭・観葉植物販売 | 株式会社明翔',
  description: 'お祝いやお部屋の装飾に、美しい胡蝶蘭と観葉植物をご提供。プロのフローリストが丁寧に育てた高品質な植物と、きめ細やかなアフターケアで、末永くお楽しみいただけます。',
};

export default function PlantsPage() {
  return <PlantsContent />;
}