
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="first-impression"
      className="py-16 md:py-24 px-6 relative overflow-hidden bg-[#05152a] flex items-center justify-center"
    >
      <div className="container mx-auto max-w-4xl">
        <div className={cn(
          "flex flex-col items-center justify-center text-center",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          "transition-all duration-700"
        )}>
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            <span className="text-sky-400">רושם ראשוני</span> נוצר לפני{" "}
            <span className="text-white">שמספיקים לומר מילה</span>
          </h2>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            איך אתה נראה בתמונה שלך – זה מה שיגרום לאנשים לעצור, להאמין, 
            להתחבר – או להמשיך הלאה.
          </p>
          
          {/* First box */}
          <div className="bg-[#0c2341]/80 rounded-2xl p-6 border border-border/20 mb-10 max-w-3xl w-full">
            <p className="text-lg md:text-xl text-white/90">
              במקום להמר על תמונות חובבניות, <span className="text-sky-400">בוא נבנה לך תדמית</span> שתראה בדיוק את מה שאתה 
              <span className="text-sky-400"> באמת</span>: מקצועי, אמין, ומוכן להזדמנויות הבאות שלך.
            </p>
          </div>
          
          {/* CTA Button */}
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-xl mb-10"
          >
            רוצה תדמית שמוכרת? השאר פרטים
          </button>
          
          {/* Second box */}
          <div className="bg-gradient-to-r from-[#0c2341]/90 to-[#0c2341]/70 rounded-2xl p-6 border border-border/20 max-w-3xl w-full">
            <p className="text-lg md:text-xl text-white/90">
              שלח לי כמה תמונות פשוטות – <span className="text-sky-400">ואני אדאג שהעולם יראה אותך בגרסה הכי חזקה שלך</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstImpressionSection;
