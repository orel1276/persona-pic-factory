
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import PainSection from '@/components/PainSection';
import AboutMeSection from '@/components/AboutMeSection';
import Gallery from '@/components/Gallery'; // Changed from BeforeAfterResults
import OfferSection from '@/components/OfferSection';
import UrgencySection from '@/components/UrgencySection';
import CTASection from '@/components/CTASection';
import ClientTestimonials from '@/components/ClientTestimonials';
import FAQ from '@/components/FAQ';
import { Toaster } from '@/components/ui/toaster';
import BeforeAfterSection from '@/components/BeforeAfterSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#05152a] z-50">
        <div className="text-center">
          <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">
            <span className="neon-text-blue">Film</span><span className="neon-text-pink">Kal</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#05152a] text-white" dir="rtl">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-0">
        <Hero />
        <PainSection />
        <AboutMeSection />
        <Gallery /> {/* Using the new Gallery component instead of BeforeAfterResults */}
        <BeforeAfterSection />
        <ClientTestimonials />
        <OfferSection />
        <UrgencySection />
        <CTASection />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
