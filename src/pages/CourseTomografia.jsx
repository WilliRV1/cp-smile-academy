import { useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Philosophy from '../components/Philosophy';
import TargetAndDeliverables from '../components/TargetAndDeliverables';
import Protocol from '../components/Protocol';
import Syllabus from '../components/Syllabus';
import Mentors from '../components/Mentors';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';
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
      <TargetAndDeliverables />
      <Protocol />
      <Syllabus />
      <Mentors />
      <SocialProof />
      <FAQ />
      <Pricing />
    </main>
  );
}
