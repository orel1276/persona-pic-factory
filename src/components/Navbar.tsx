
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 lg:px-10",
        scrolled ? "py-2 bg-background/90 shadow-sm backdrop-blur-md" : "py-4"
      )}
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
        <a 
          href="#" 
          className="text-3xl md:text-4xl font-bold transition-all duration-300 text-center"
        >
          <span className="neon-text-blue">Film</span><span className="neon-text-pink">Kal</span>
        </a>
        
        {/* Contact Button */}
        <button 
          onClick={() => scrollToSection("צור-קשר")}
          className={cn(
            "neon-button text-sm mt-2",
            isMobile ? "text-xs px-4 py-2" : "text-sm"
          )}
        >
          ליצירת קשר
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
