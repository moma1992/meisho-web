import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { RootLayoutProvider } from '@/components/layout/root-layout-provider';
import { Toaster } from '@/components/ui/toaster';
import { FloatingContact } from '@/components/floating-contact';
import { OpeningAnimation } from '@/components/opening-animation';

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: '株式会社明翔',
  description: '建設機械運搬業、業務用機器販売・搬入・設置、産業廃棄物収集運搬業など、多様なサービスを提供しています。',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  openGraph: {
    type: 'website',
    title: '株式会社明翔',
    description: '建設機械運搬業、業務用機器販売・搬入・設置、産業廃棄物収集運搬業など、多様なサービスを提供しています。',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社明翔',
    description: '建設機械運搬業、業務用機器販売・搬入・設置、産業廃棄物収集運搬業など、多様なサービスを提供しています。',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.variable} suppressHydrationWarning>
      <body className={notoSansJP.className} suppressHydrationWarning>
        <RootLayoutProvider>
          <OpeningAnimation />
          {children}
          <FloatingContact />
        </RootLayoutProvider>
        <Toaster />
      </body>
    </html>
  );
}