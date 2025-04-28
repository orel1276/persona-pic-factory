
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
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
      dir="rtl"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/60 z-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-center text-center">
        <div className="max-w-3xl mx-auto space-y-20">
          {/* Main Title */}
          <h1 
            className={cn(
              "text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            תמונה אחת יכולה לשנות איך שהעולם רואה אותך
          </h1>
          
          {/* Subtitle */}
          <p 
            className={cn(
              "text-xl md:text-2xl text-white/90 max-w-2xl mx-auto transition-all duration-1000 delay-200 transform leading-relaxed",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            שלח לי כמה תמונות פשוטות מהטלפון – ואני אחזיר לך תדמית מקצועית שנראית כאילו צולמה בסטודיו יוקרתי
          </p>
          
          {/* CTA Button */}
          <div 
            className={cn(
              "transition-all duration-1000 delay-300 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <button 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("צור-קשר");
              }}
              className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white text-xl md:text-2xl font-bold py-6 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[280px]"
            >
              בוא נדבר על התמונה שלך
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
