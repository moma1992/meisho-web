import { Metadata } from 'next';
import { CareersContent } from '@/components/careers/careers-content';

export const metadata: Metadata = {
  title: '採用情報 | 株式会社明翔',
  description: '私たちは常に、情熱を持って働ける仲間を探しています。あなたの経験と熱意を活かし、共に成長していける環境をご用意しています。',
};

export default function CareersPage() {
  return <CareersContent />;
}