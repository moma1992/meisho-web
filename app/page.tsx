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
        <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory">
          <section id="home" className="h-screen w-full snap-start">
            <Hero />
          </section>
          <section id="first" className="h-screen w-full snap-start">
            <FirstDivision />
          </section>
          <section id="second" className="h-screen w-full snap-start">
            <SecondDivision />
          </section>
          <section id="third" className="h-screen w-full snap-start">
            <ThirdDivision />
          </section>
          <section id="plants" className="h-screen w-full snap-start">
            <PlantsSection />
          </section>
          <section id="careers" className="h-screen w-full snap-start">
            <CareersSection />
          </section>
          <section id="contact" className="w-full snap-start">
            <ContactSection />
          </section>
          <section id="footer" className="w-full snap-start">
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
}
