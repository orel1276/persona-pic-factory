
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
          className="absolute inset-0 bg-cover bg-center mask-image"
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
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-4 md:mb-6">
            המהפכה בעולם תמונות התדמית
          </span>
        </div>

        <h1 
          className={cn(
            "text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 max-w-4xl leading-tight transition-all duration-1000 delay-100 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="neon-text-blue">תן </span>
          <span className="neon-text-blue">לעולם </span>
          <span className="neon-text-pink">
            לראות אותך
          </span>
          <br/>
          <span className="neon-text-blue">בצורה הטובה ביותר</span>
        </h1>
        
        <p 
          className={cn(
            "text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mb-6 md:mb-10 transition-all duration-1000 delay-200 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          קבל תמונות תדמית מקצועיות באיכות סטודיו תוך 24 שעות בלבד! ללא צורך בצלם, בסטודיו או בהוצאות מיותרות.
        </p>
        
        <div 
          className={cn(
            "flex flex-col sm:flex-row gap-3 md:gap-4 w-full max-w-md mx-auto transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <a 
            href="#צור-קשר" 
            className="neon-button w-full sm:w-auto text-center"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("צור-קשר");
            }}
          >
            תיצור לי אלבום עכשיו
          </a>
          <a 
            href="#process" 
            className="bg-transparent hover:bg-white/10 border border-white text-white font-medium px-6 py-3 rounded-full transition-all duration-300 text-center w-full sm:w-auto"
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
