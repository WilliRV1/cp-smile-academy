import { useEffect } from 'react';
import HeroEscaneo from '../components/escaneo/HeroEscaneo';
import Features from '../components/Features';
import Philosophy from '../components/Philosophy';
import SyllabusEscaneo from '../components/escaneo/SyllabusEscaneo';
import MentorEscaneo from '../components/escaneo/MentorEscaneo';
import SocialProofEscaneo from '../components/escaneo/SocialProofEscaneo';
import LeadCaptureEscaneo from '../components/escaneo/LeadCaptureEscaneo';
import FAQEscaneo from '../components/escaneo/FAQEscaneo';
import PricingEscaneo from '../components/escaneo/PricingEscaneo';
import StickyCTAEscaneo from '../components/escaneo/StickyCTAEscaneo';

export default function CourseEscaneo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative pb-24 md:pb-0">
      <HeroEscaneo />
      <Features />
      <Philosophy />
      <SyllabusEscaneo />
      <MentorEscaneo />
      <SocialProofEscaneo />
      <LeadCaptureEscaneo />
      <FAQEscaneo />
      <PricingEscaneo />
      <StickyCTAEscaneo />
    </main>
  );
}
