import { Metadata } from 'next';
import { ContactContent } from '@/components/contact/contact-content';

export const metadata: Metadata = {
  title: 'お問い合わせ | 株式会社明翔',
  description: 'ご相談・ご質問等ございましたら、お気軽にお問い合わせください。24時間体制で物流サービスに関するご相談を承っております。',
};

export default function ContactPage() {
  return <ContactContent />;
}