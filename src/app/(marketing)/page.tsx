import PricingSection from '@/components/sections/Pricing';
import TestimonialsSection from '@/components/sections/Testimonials';
import HeroSection from '@/components/sections/Hero';
import FooterSection from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection />
      <PricingSection />
      <FooterSection />
    </>
  );
}
