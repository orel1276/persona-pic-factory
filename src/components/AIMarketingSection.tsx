
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const AIMarketingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto max-w-4xl" ref={sectionRef}>
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            <span className="block text-sky-400 mb-2 drop-shadow-lg">
              רושם ראשוני נוצר
            </span>
            <span className="block text-white/90">
              לפני שמספיקים לומר מילה
            </span>
          </h2>
        
          <p className="text-center text-white/80 mb-12 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            איך אתה נראה בתמונה שלך – זה מה שיגרום לאנשים{" "}
            <span className="text-sky-300">לעצור, להאמין, להתחבר – או להמשיך הלאה.</span>
          </p>

          <div className={cn(
            "space-y-8 text-lg md:text-xl text-white/90 transition-all duration-1000 transform max-w-3xl",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <p>
                במקום להמר על תמונות חובבניות,{" "}
                <span className="text-sky-400 font-semibold">
                  בוא נבנה לך תדמית שתראה בדיוק את מה שאתה באמת:
                </span>
                {" "}מקצועי, אמין, ומוכן להזדמנויות הבאות שלך.
              </p>
            </div>

            <div className="text-center py-6">
              <p className="inline-block bg-primary/20 text-primary px-6 py-3 rounded-full text-xl md:text-2xl font-medium animate-float">
                התדמית שלך היא המפתח להצלחה שלך
              </p>
            </div>

            <div className="bg-gradient-to-r from-sky-500/10 to-primary/10 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <p>
                שלח לי כמה תמונות פשוטות –{" "}
                <span className="text-sky-400 font-semibold">
                  ואני אדאג שהעולם יראה אותך בגרסה הכי חזקה שלך
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMarketingSection;
