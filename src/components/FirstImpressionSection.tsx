
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

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
      className="py-16 md:py-24 px-6 relative overflow-hidden bg-background/90"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <h2 
            className={cn(
              "text-3xl md:text-5xl font-bold transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <span className="text-sky-400">רושם ראשוני</span> נוצר
          </h2>
          
          <h3 
            className={cn(
              "text-2xl md:text-4xl font-bold mb-8 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            לפני שמספיקים לומר מילה
          </h3>
          
          <p 
            className={cn(
              "text-lg md:text-xl text-foreground/80 max-w-3xl transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            איך אתה נראה בתמונה שלך – זה מה שיגרום לאנשים לעצור, להאמין, 
            להתחבר – או להמשיך הלאה.
          </p>
          
          <div 
            className={cn(
              "w-full max-w-3xl bg-slate-800/50 rounded-2xl p-6 border border-border/50 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <p className="text-lg">
              במקום להמר על תמונות חובבניות, <span className="text-sky-400 font-medium">בוא נבנה לך תדמית שתראה בדיוק את מה שאתה באמת</span>: מקצועי, אמין, ומוכן להזדמנויות הבאות שלך.
            </p>
          </div>
          
          <button 
            onClick={() => scrollToSection("צור-קשר")}
            className={cn(
              "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-xl mt-6 md:mt-10 transition-opacity duration-700 delay-400",
              isVisible ? "opacity-100" : "opacity-0"
            )}
          >
            התדמית שלך היא המפתח להצלחה שלך
          </button>
          
          <div 
            className={cn(
              "w-full max-w-3xl bg-slate-800/50 rounded-2xl p-6 border border-border/50 mt-12 transition-all duration-700 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <p className="text-lg">
              שלח לי כמה תמונות פשוטות – <span className="text-sky-400 font-medium">ואני אדאג שהעולם יראה אותך בגרסה הכי חזקה שלך</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstImpressionSection;
