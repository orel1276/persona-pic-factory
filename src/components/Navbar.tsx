
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-6 lg:px-10",
        scrolled ? "py-2 bg-background/80 shadow-sm backdrop-blur-md" : "py-4 md:py-6"
      )}
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-300"
        >
          <span className="neon-text-blue">Film</span><span className="neon-text-pink">Kal</span>
        </a>
        
        {/* Contact Button - positioned to the right on mobile */}
        <button 
          onClick={() => scrollToSection("צור-קשר")}
          className="neon-button text-sm py-2 px-4 md:px-6"
        >
          ליצירת קשר
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
