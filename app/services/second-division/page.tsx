import { Metadata } from 'next';
import { SecondDivisionContent } from '@/components/services/second-division-content';

export const metadata: Metadata = {
  title: '第二事業部 | 株式会社明翔',
  description: '業務用機器の販売から搬入・設置まで、トータルサポートを提供します。ホシザキ京阪株式会社の代理店として、高品質な製品と確かな技術力でお客様のニーズにお応えします。',
};

export default function SecondDivisionPage() {
  return <SecondDivisionContent />;
}