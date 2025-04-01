
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import AboutMe from '@/components/AboutMe';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import DIYSection from '@/components/DIYSection';
import BusinessSection from '@/components/BusinessSection';
import PricingSection from '@/components/PricingSection';
import AIMarketingSection from '@/components/AIMarketingSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
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
        <Gallery />
        <AboutMe />
        <Process />
        <DIYSection />
        <BusinessSection />
        <PricingSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
