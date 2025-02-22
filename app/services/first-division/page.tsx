import { Metadata } from 'next';
import { FirstDivisionContent } from '@/components/services/first-division-content';

export const metadata: Metadata = {
  title: '第一事業部 | 株式会社明翔',
  description: '建設機械の専門的な知識と経験を活かし、迅速かつ安全な輸送サービスを提供します。',
};

export default function FirstDivisionPage() {
  return <FirstDivisionContent />;
}