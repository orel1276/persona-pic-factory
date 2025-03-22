
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { label: "איך זה עובד", id: "process" },
    { label: "גלריה", id: "gallery" },
    { label: "שאלות נפוצות", id: "faq" },
    { label: "מי אני", id: "about" },
    { label: "צור קשר", id: "contact" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 lg:px-10",
        scrolled ? "py-3 bg-background/80 shadow-sm backdrop-blur-md" : "py-6"
      )}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
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

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "font-medium hover:text-primary transition-colors",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection("contact")}
            className="neon-button text-sm"
          >
            ליצירת קשר
          </button>
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
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="font-medium text-foreground hover:neon-text-pink transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="neon-button text-center"
            >
              ליצירת קשר
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
