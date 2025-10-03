import Hero from '@/components/home/Hero';
import IntroSection from '@/components/home/IntroSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ServicesSection from '@/components/home/ServicesSection';
import CredentialsStrip from '@/components/home/CredentialsStrip';
import PortfolioGallery from '@/components/home/PortfolioGallery';
import FounderStory from '@/components/home/FounderStory';
import ProcessSection from '@/components/home/ProcessSection';
import Testimonials from '@/components/home/Testimonials';
import FinalCTA from '@/components/home/FinalCTA';
import QuoteRequestForm from '@/components/forms/QuoteRequestForm';

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <WhyChooseUs />
      <ServicesSection />
      <CredentialsStrip />
      <PortfolioGallery />
      <FounderStory />
      <ProcessSection />
      <Testimonials />
      <FinalCTA />
      <QuoteRequestForm />
    </>
  );
}
