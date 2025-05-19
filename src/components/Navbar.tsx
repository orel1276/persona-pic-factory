
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/972528028988', '_blank');
  };

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-3 md:px-6 lg:px-10",
          scrolled ? "py-2 bg-background/80 shadow-sm backdrop-blur-md" : "py-3 md:py-6"
        )}
        dir="rtl"
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a 
            href="#" 
            className="text-2xl md:text-3xl lg:text-5xl font-bold transition-all duration-300 font-rubik"
          >
            <span className="text-sky-400">Film</span><span className="text-primary">Kal</span>
          </a>
          
          {/* Desktop WhatsApp Button */}
          <button 
            onClick={openWhatsApp}
            className="bg-[#25D366] hover:bg-[#00a859] text-white font-medium py-2 md:py-3 px-3 md:px-5 rounded-[30px] shadow-md transition-all duration-300 text-xs md:text-sm flex items-center gap-2 hover:scale-[1.03] hover:shadow-lg mr-3 md:mr-5 hidden md:flex"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
              <path d="M9 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2z"></path>
              <path d="M13.5 10a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 .5-.5z"></path>
              <path d="M14 13a1 1 0 0 1-2 0"></path>
            </svg>
            יש לך שאלה? דבר איתי!
          </button>
          
          {/* Mobile WhatsApp Button */}
          <button 
            onClick={openWhatsApp}
            className="md:hidden bg-[#25D366] hover:bg-[#00a859] text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
              <path d="M9 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2z"></path>
              <path d="M13.5 10a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 .5-.5z"></path>
              <path d="M14 13a1 1 0 0 1-2 0"></path>
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button
          onClick={openWhatsApp}
          className="bg-[#25D366] hover:bg-[#00a859] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all hover:scale-105"
          aria-label="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
            <path d="M9 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2z"></path>
            <path d="M13.5 10a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 .5-.5z"></path>
            <path d="M14 13a1 1 0 0 1-2 0"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Navbar;
