import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Process from '@/components/Process';
import BusinessSection from '@/components/BusinessSection';
import Gallery from '@/components/Gallery';
import ClientTestimonials from '@/components/ClientTestimonials';
import AboutMe from '@/components/AboutMe';
import DIYSection from '@/components/DIYSection';
import PricingSection from '@/components/PricingSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AIMarketingSection from '@/components/AIMarketingSection';
import TimeSection from '@/components/TimeSection';

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
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
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
    <div className="min-h-screen flex flex-col bg-background" dir="rtl">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AIMarketingSection />
        <Features />
        <TimeSection />
        <Process />
        <BusinessSection />
        <Gallery />
        <ClientTestimonials />
        <AboutMe />
        <DIYSection />
        <PricingSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
