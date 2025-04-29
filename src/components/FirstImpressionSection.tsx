
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const FirstImpressionSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('first-impression');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="first-impression"
      className="py-20 md:py-28 px-6 relative overflow-hidden bg-background/90"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">
          <h2 
            className={cn(
              "text-4xl md:text-6xl font-bold transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <span className="text-sky-500">רושם ראשוני</span> נוצר
          </h2>
          
          <h3 
            className={cn(
              "text-3xl md:text-5xl font-bold mb-8 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            לפני שמספיקים לומר מילה
          </h3>
          
          <p 
            className={cn(
              "text-xl md:text-2xl text-foreground/90 max-w-3xl transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            איך אתה נראה בתמונה שלך – זה מה שיגרום לאנשים לעצור, להאמין, 
            להתחבר – או להמשיך הלאה.
          </p>
          
          <div 
            className={cn(
              "w-full max-w-4xl bg-slate-800/60 rounded-2xl p-8 border border-border/50 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <p className="text-xl md:text-2xl">
              במקום להמר על תמונות חובבניות, <span className="text-sky-400 font-semibold">בוא נבנה לך תדמית שתראה בדיוק את מה שאתה באמת</span>: מקצועי, אמין, ומוכן להזדמנויות הבאות שלך.
            </p>
          </div>
          
          <button 
            onClick={() => scrollToSection("צור-קשר")}
            className={cn(
              "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold py-5 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-2xl mt-8 md:mt-12 transition-opacity duration-700 delay-400",
              isVisible ? "opacity-100" : "opacity-0"
            )}
          >
            התדמית שלך היא המפתח להצלחה שלך
          </button>
          
          <div 
            className={cn(
              "w-full max-w-4xl bg-slate-800/60 rounded-2xl p-8 border border-border/50 mt-12 transition-all duration-700 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <p className="text-xl md:text-2xl">
              שלח לי כמה תמונות פשוטות – <span className="text-sky-400 font-semibold">ואני אדאג שהעולם יראה אותך בגרסה הכי חזקה שלך</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstImpressionSection;
