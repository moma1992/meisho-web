import { Metadata } from 'next';
import { CompanyAboutContent } from '@/components/company/company-about-content';

export const metadata: Metadata = {
  title: '会社概要 | 株式会社明翔',
  description: '産業基盤整備・都市づくりで地域社会に貢献する企業として、お客様をはじめ地域社会のニーズにお応えし実現するために様々なサービスを提供しています。',
};

export default function CompanyAboutPage() {
  return <CompanyAboutContent />;
}