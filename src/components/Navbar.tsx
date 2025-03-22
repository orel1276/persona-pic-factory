
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 lg:px-10",
        scrolled ? "py-3 bg-white/80 shadow-sm backdrop-blur-md" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a 
            href="#" 
            className={cn(
              "text-xl md:text-2xl font-bold transition-all duration-300",
              scrolled ? "text-primary" : "text-white"
            )}
          >
            AI Studio Portraits
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["הבית", "איך זה עובד", "גלריה", "עדויות", "צור קשר"].map((item) => (
            <a 
              key={item} 
              href={`#${item === "הבית" ? "hero" : item.toLowerCase().replace(/\s+/g, '-')}`}
              className={cn(
                "font-medium hover:text-primary transition-colors",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            ליצירת קשר
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke={scrolled ? "currentColor" : "white"} 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white p-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            {["הבית", "איך זה עובד", "גלריה", "עדויות", "צור קשר"].map((item) => (
              <a 
                key={item} 
                href={`#${item === "הבית" ? "hero" : item.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              ליצירת קשר
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
