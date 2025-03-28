
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

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
      {/* Background with diagonal lines pattern */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-black"
          style={{ 
            backgroundImage: "linear-gradient(0deg, rgba(20, 20, 20, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%), url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"rgba(255,255,255,0.05)\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')",
            backgroundSize: '300px 300px',
          }}
        ></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/60 mix-blend-multiply z-10"></div>
        
        {/* Diagonal line pattern - mimicking the design from the reference image */}
        <div className="absolute inset-0 overflow-hidden z-5">
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,160L60,165.3C120,171,240,181,360,176C480,171,600,149,720,149.3C840,149,960,171,1080,176C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="hsla(var(--muted)/0.1)"/>
            <path d="M0,192L60,202.7C120,213,240,235,360,234.7C480,235,600,213,720,202.7C840,192,960,192,1080,208C1200,224,1320,256,1380,272L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="hsla(var(--muted)/0.15)"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-20">
        {isMobile ? (
          // Mobile layout with icon
          <div className="w-full flex flex-col items-center">
            <div 
              className={cn(
                "transition-all duration-1000 transform mb-6",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 mb-6 inline-block">
                <img 
                  src="/lovable-uploads/9e8a0eb5-4508-4524-af39-c52a45cd44ca.png" 
                  alt="Portfolio icon" 
                  className="w-32 h-32 object-contain mx-auto"
                />
              </div>
              
              <h1 
                className={cn(
                  "text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight",
                  isVisible ? "opacity-100" : "opacity-0"
                )}
              >
                <span className="neon-text-blue">תן </span>
                <span className="neon-text-blue">לעולם </span>
                <span className="neon-text-pink">לראות אותך</span>
                <br/>
                <span className="neon-text-blue">בצורה הטובה ביותר</span>
              </h1>
              
              <p 
                className={cn(
                  "text-lg md:text-xl text-white/90 max-w-2xl mb-8",
                  isVisible ? "opacity-100" : "opacity-0"
                )}
              >
                קבל תמונות תדמית מקצועיות באיכות סטודיו תוך 24 שעות בלבד! ללא צורך בצלם, בסטודיו או בהוצאות מיותרות.
              </p>
            </div>
          </div>
        ) : (
          // Desktop layout
          <>
            <div 
              className={cn(
                "transition-all duration-1000 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
                המהפכה בעולם תמונות התדמית
              </span>
            </div>

            <h1 
              className={cn(
                "text-4xl md:text-5xl lg:text-7xl font-bold mb-6 max-w-4xl leading-tight transition-all duration-1000 delay-100 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <span className="neon-text-blue">תן </span>
              <span className="neon-text-blue">לעולם </span>
              <span className="neon-text-pink">לראות אותך</span>
              <br/>
              <span className="neon-text-blue">בצורה הטובה ביותר</span>
            </h1>
            
            <p 
              className={cn(
                "text-lg md:text-xl text-white/90 max-w-2xl mb-10 transition-all duration-1000 delay-200 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              קבל תמונות תדמית מקצועיות באיכות סטודיו תוך 24 שעות בלבד! ללא צורך בצלם, בסטודיו או בהוצאות מיותרות.
            </p>
          </>
        )}
        
        <div 
          className={cn(
            "flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <a 
            href="#צור-קשר" 
            className="neon-button"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("צור-קשר");
            }}
          >
            תיצור לי אלבום עכשיו
          </a>
          <a 
            href="#process" 
            className="bg-transparent hover:bg-white/10 border border-white text-white font-medium px-8 py-3 rounded-full transition-all duration-300 text-lg"
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
