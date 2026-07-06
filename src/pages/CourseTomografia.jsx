import { useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Philosophy from '../components/Philosophy';
import Protocol from '../components/Protocol';
import Pricing from '../components/Pricing';

export default function CourseTomografia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Pricing />
    </main>
  );
}
