'use client';

import dynamic from 'next/dynamic';
import { Header } from '../components/header/header';
import { Hero } from '../components/hero/hero';
import { FirstDivision } from '../components/services/first-division';
import { SecondDivision } from '../components/services/second-division';
import { ThirdDivision } from '../components/services/third-division';
import { PlantsSection } from '../components/services/plants-section';
import { CareersSection } from '../components/careers-section';
import { ContactSection } from '../components/contact-section';
import { Footer } from '../components/footer/footer';

const OpeningAnimation = dynamic(() => import('../components/opening-animation').then(mod => mod.OpeningAnimation), {
  ssr: false
});

export default function HomePage() {
  return (
    <>
      <OpeningAnimation />
      <main className="relative">
        <Header />
        <div className="h-screen w-full overflow-y-auto">
          <section id="home" className="min-h-screen w-full">
            <Hero />
          </section>
          <section id="first" className="min-h-screen w-full lg:h-screen">
            <FirstDivision />
          </section>
          <section id="second" className="min-h-screen w-full lg:h-screen">
            <SecondDivision />
          </section>
          <section id="third" className="min-h-screen w-full lg:h-screen">
            <ThirdDivision />
          </section>
          <section id="plants" className="min-h-screen w-full lg:h-screen">
            <PlantsSection />
          </section>
          <section id="careers" className="min-h-screen w-full lg:h-screen">
            <CareersSection />
          </section>
          <section id="contact" className="w-full">
            <ContactSection />
          </section>
          <section id="footer" className="w-full">
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
}