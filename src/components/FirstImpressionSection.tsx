
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

const FirstImpressionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

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
      className="py-16 md:py-24 px-6 relative overflow-hidden bg-[hsl(var(--background))]"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={cn(
          "flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16",
          isMobile ? "text-center" : "text-right md:text-right"
        )}>
          {/* Text content - Left side (on desktop) */}
          <div className={cn(
            "flex-1 space-y-6",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            "transition-all duration-700"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-sky-400">רושם ראשוני</span> נוצר לפני שמספיקים לומר מילה
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/90">
              איך אתה נראה בתמונה שלך – זה מה שיגרום לאנשים לעצור, להאמין, 
              להתחבר – או להמשיך הלאה.
            </p>
            
            <div className="bg-slate-800/60 rounded-2xl p-6 border border-border/50">
              <p className="text-lg md:text-xl">
                במקום להמר על תמונות חובבניות, <span className="text-sky-400 font-semibold">בוא נבנה לך תדמית שתראה בדיוק את מה שאתה באמת</span>: מקצועי, אמין, ומוכן להזדמנויות הבאות שלך.
              </p>
            </div>
            
            <button 
              onClick={() => scrollToSection("צור-קשר")}
              className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-xl"
            >
              התדמית שלך היא המפתח להצלחה שלך
            </button>
            
            <div className="bg-slate-800/60 rounded-2xl p-6 border border-border/50">
              <p className="text-lg md:text-xl">
                שלח לי כמה תמונות פשוטות – <span className="text-sky-400 font-semibold">ואני אדאג שהעולם יראה אותך בגרסה הכי חזקה שלך</span>
              </p>
            </div>
          </div>
          
          {/* Image - Right side (on desktop) */}
          <div className={cn(
            "flex-1 flex justify-center md:justify-end",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
            "transition-all duration-700 delay-300"
          )}>
            <div className="relative">
              {/* Main circular avatar with pink border */}
              <div className="relative z-10 rounded-full border-4 border-[hsl(var(--primary))] p-1.5 bg-background shadow-xl">
                <Avatar className="w-64 h-64 md:w-80 md:h-80">
                  <AvatarImage 
                    src="/lovable-uploads/e3cca4db-8fba-49dd-ba8b-9a1e161caa6b.png" 
                    alt="תמונת פרופיל" 
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-muted text-3xl">אוראל</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Decorative outer circle */}
              <div className="absolute inset-0 rounded-full border-2 border-[hsl(var(--primary))/30] -m-2 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstImpressionSection;
