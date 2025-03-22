
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
        scrolled ? "py-3 bg-background/80 shadow-sm backdrop-blur-md" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a 
            href="#" 
            className={cn(
              "text-xl md:text-2xl font-bold transition-all duration-300",
              scrolled ? "neon-text-pink" : "text-white"
            )}
          >
            AI Studio Portraits
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["הבית", "איך זה עובד", "גלריה", "מי אני", "שאלות נפוצות", "עדויות", "צור קשר"].map((item) => {
            let href = "#";
            switch(item) {
              case "הבית": href = "#hero"; break;
              case "איך זה עובד": href = "#process"; break;
              case "גלריה": href = "#gallery"; break;
              case "מי אני": href = "#about"; break;
              case "שאלות נפוצות": href = "#faq"; break;
              case "עדויות": href = "#testimonials"; break;
              case "צור קשר": href = "#contact"; break;
              default: href = "#"; break;
            }
            
            return (
              <a 
                key={item} 
                href={href}
                className={cn(
                  "font-medium hover:text-primary transition-colors",
                  scrolled ? "text-foreground" : "text-white"
                )}
              >
                {item}
              </a>
            );
          })}
          <a 
            href="#contact" 
            className="neon-button text-sm"
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
            stroke={scrolled ? "hsl(var(--primary))" : "white"} 
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md p-4 shadow-lg animate-fade-in border-t border-white/10">
          <div className="flex flex-col space-y-4">
            {["הבית", "איך זה עובד", "גלריה", "מי אני", "שאלות נפוצות", "עדויות", "צור קשר"].map((item) => {
              let href = "#";
              switch(item) {
                case "הבית": href = "#hero"; break;
                case "איך זה עובד": href = "#process"; break;
                case "גלריה": href = "#gallery"; break;
                case "מי אני": href = "#about"; break;
                case "שאלות נפוצות": href = "#faq"; break;
                case "עדויות": href = "#testimonials"; break;
                case "צור קשר": href = "#contact"; break;
                default: href = "#"; break;
              }
              
              return (
                <a 
                  key={item} 
                  href={href}
                  className="font-medium text-foreground hover:neon-text-pink transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              );
            })}
            <a 
              href="#contact" 
              className="neon-button text-center"
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
