'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Loading } from '@/components/loading';

const ReactFullpage = dynamic(
  () => import('@fullpage/react-fullpage'),
  { 
    ssr: false,
    loading: () => <Loading />
  }
);

interface FullPageWrapperProps {
  children: React.ReactNode;
  anchors: string[];
  navigationTooltips: string[];
}

export function FullPageWrapper({ children, anchors, navigationTooltips }: FullPageWrapperProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loading />;
  }

  return (
    <ReactFullpage
      licenseKey={'YOUR_KEY_HERE'} // 商用ライセンスキーを設定してください
      scrollingSpeed={1000}
      navigation={true}
      navigationPosition="right"
      anchors={anchors}
      navigationTooltips={navigationTooltips}
      showActiveTooltip={true}
      credits={{ enabled: true }}
      scrollOverflow={true}
      normalScrollElements=".scroll-normal"
      render={({ state, fullpageApi }) => (
        <div id="fullpage">
          {children}
        </div>
      )}
    />
  );
}