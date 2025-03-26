
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      {/* Background with simplified gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')`,
            opacity: 0.7 
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-10">
        <div 
          className={cn(
            "transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            המהפכה בעולם תמונות התדמית
          </span>
        </div>

        <h1 
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight transition-all duration-700 delay-100 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          תן לעולם לראות אותך בצורה הטובה ביותר
        </h1>
        
        <p 
          className={cn(
            "text-lg md:text-xl text-white/90 max-w-2xl mb-10 transition-all duration-700 delay-200 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          קבל תמונות תדמית מקצועיות באיכות סטודיו ללא צורך בצלם, בסטודיו או בהוצאות מיותרות.
        </p>
        
        <div 
          className={cn(
            "flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <button 
            className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md transition-all duration-300 text-lg"
            onClick={() => scrollToSection("צור-קשר")}
          >
            תיצור לי אלבום עכשיו
          </button>
          <button 
            className="bg-transparent hover:bg-white/10 border border-white text-white font-medium px-8 py-3 rounded-md transition-all duration-300 text-lg"
            onClick={() => scrollToSection("process")}
          >
            איך זה עובד?
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
