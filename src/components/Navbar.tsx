
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-6 lg:px-10",
        scrolled ? "py-2 bg-background/80 shadow-sm backdrop-blur-md" : "py-4 md:py-6"
      )}
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-300 font-rubik"
        >
          <span className="text-sky-400">Film</span><span className="text-primary">Kal</span>
        </a>
        
        {/* Updated WhatsApp Button */}
        <button 
          onClick={openWhatsApp}
          className="bg-[#25D366] hover:bg-[#00a859] text-white font-medium py-3 px-5 rounded-[30px] shadow-md transition-all duration-300 text-sm flex items-center gap-2 hover:scale-[1.03] hover:shadow-lg mr-5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
            <path d="M9 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2z"></path>
            <path d="M13.5 10a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 .5-.5z"></path>
            <path d="M14 13a1 1 0 0 1-2 0"></path>
          </svg>
          יש לך שאלה? דבר איתי!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
