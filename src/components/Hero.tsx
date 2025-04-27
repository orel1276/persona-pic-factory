import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir="rtl"
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/60 mix-blend-multiply z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center mask-image hover:scale-105 transition-transform duration-500"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')` 
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-center text-center mt-16 md:mt-20">
        <div 
          className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm text-white text-base font-medium mb-6 md:mb-8 animate-float">
            התמונות שלך יכולות להגיד יותר
          </span>
        </div>

        <h1 
          className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 max-w-4xl leading-tight transition-all duration-1000 delay-100 transform font-rubik",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-sky-400 block mb-2 drop-shadow-lg">
            תסתכל לכל אותם אנשים בלבן של העיניים,
          </span>
          <span className="text-white block drop-shadow-md">
            ותראה שהם מדברים מכאב.
          </span>
        </h1>
        
        <p 
          className={cn(
            "text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mb-8 md:mb-12 transition-all duration-1000 delay-200 transform leading-relaxed",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          מי שלא חי את החיים שהוא רוצה לחיות,{" "}
          <span className="bg-primary/20 px-2 py-1 rounded text-primary font-medium">
            ההצעות שלו לא רלוונטיות בשבילך.
          </span>
        </p>
        
        <div 
          className={cn(
            "flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-md mx-auto transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <a 
            href="#צור-קשר" 
            className="bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-bold py-3 md:py-4 px-8 md:px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-center text-lg hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("צור-קשר");
            }}
          >
            בוא נדבר על התמונה שלך
          </a>
          <a 
            href="#process" 
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-medium py-3 md:py-4 px-8 rounded-full transition-all duration-300 text-center w-full sm:w-auto text-lg hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("process");
            }}
          >
            איך זה עובד?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
