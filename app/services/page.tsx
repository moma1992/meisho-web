"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { FirstDivision } from "@/components/services/first-division";
import { SecondDivision } from "@/components/services/second-division";
import { ThirdDivision } from "@/components/services/third-division";
import { PlantsSection } from "@/components/services/plants-section";

const FullPage = dynamic(() => import("@fullpage/react-fullpage"), {
  ssr: false,
});

const anchors = ["first", "second", "third", "plants"];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <FullPage
        licenseKey={'YOUR_KEY_HERE'} // 商用ライセンスキーを設定してください
        scrollingSpeed={1000}
        anchors={anchors}
        navigation={true}
        navigationPosition="right"
        navigationTooltips={[
          "第一事業部",
          "第二事業部",
          "第三事業部",
          "胡蝶蘭・観葉植物",
        ]}
        showActiveTooltip={true}
        credits={{ enabled: true }}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage">
              <div className="section">
                <FirstDivision />
              </div>
              <div className="section">
                <SecondDivision />
              </div>
              <div className="section">
                <ThirdDivision />
              </div>
              <div className="section">
                <PlantsSection />
              </div>
            </div>
          );
        }}
      />
      <Footer />
    </>
  );
}