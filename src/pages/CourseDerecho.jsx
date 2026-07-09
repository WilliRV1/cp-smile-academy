import { useEffect } from 'react';
import HeroDerecho from '../components/derecho/HeroDerecho';
import Features from '../components/Features';
import Philosophy from '../components/Philosophy';
import SyllabusDerecho from '../components/derecho/SyllabusDerecho';
import MentorDerecho from '../components/derecho/MentorDerecho';
import SocialProofDerecho from '../components/derecho/SocialProofDerecho';
import LeadCaptureDerecho from '../components/derecho/LeadCaptureDerecho';
import FAQDerecho from '../components/derecho/FAQDerecho';
import PricingDerecho from '../components/derecho/PricingDerecho';
import StickyCTADerecho from '../components/derecho/StickyCTADerecho';

export default function CourseDerecho() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative pb-24 md:pb-0">
      <HeroDerecho />
      <Features 
        courseDate={25} 
        courseMonth="Julio"
        occupation={5}
        totalSpots={8}
        prestigeTitle="Respaldo Jurídico"
        prestigeDesc="Dictado por el Dr. John Freddy Prado, MSc. en Derecho Médico. Aprende a blindar tu práctica odontológica con el poder probatorio de la imagen diagnóstica."
      />
      <Philosophy />
      <SyllabusDerecho />
      <MentorDerecho />
      <SocialProofDerecho />
      <LeadCaptureDerecho />
      <FAQDerecho />
      <PricingDerecho />
      <StickyCTADerecho />
    </main>
  );
}
