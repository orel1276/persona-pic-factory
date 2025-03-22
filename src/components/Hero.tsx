
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-20">
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
          <span className="neon-text-blue">תן לעולם </span>
          <span className="neon-text-pink">לראות אותך </span>
          <span className="neon-text-blue">בצורה הטובה ביותר</span>
        </h1>
        
        <p 
          className={cn(
            "text-lg md:text-xl text-white/90 max-w-2xl mb-10 transition-all duration-1000 delay-200 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          קבל תמונות תדמית מקצועיות באיכות סטודיו ללא צורך בצלם, בסטודיו או בהוצאות מיותרות. איכות מדהימה במחיר שלא יאומן.
        </p>
        
        <div 
          className={cn(
            "flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <a 
            href="#contact" 
            className="neon-button"
          >
            ליצירת תמונות מעולות
          </a>
          <a 
            href="#process" 
            className="bg-transparent hover:bg-white/10 border border-white text-white font-medium px-8 py-3 rounded-full transition-all duration-300 text-lg"
          >
            איך זה עובד?
          </a>
        </div>

        {/* Scroll indicator */}
        <div 
          className={cn(
            "absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex flex-col items-center">
            <span className="text-white/80 text-sm mb-2">גלול למטה</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full relative flex justify-center">
              <span className="w-1 h-2 bg-white absolute top-2 rounded-full animate-bounce"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
