
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const DIYSection = () => {
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
    <section id="diy" className="py-24 px-6 bg-background relative overflow-hidden mt-16" ref={sectionRef}>
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-primary/5 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="glass rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl">
          <div 
            className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-sky-400">"אבל אוראל, </span>
              <span className="text-white">אני יכול לעשות את זה בעצמי?"</span>
            </h2>
            
            <p className="text-white/90 mb-6">
              <span className="font-bold">בוודאי שאתה יכול.</span> בדיוק כמו שאתה יכול להיות הצלם של עצמך.
            </p>
            
            <div className="text-lg text-white/90 leading-relaxed space-y-6">
              <p>
                אבל האם זה באמת שווה את <strong>הזמן היקר שלך?</strong> להתפתל עם טכנולוגיות מורכבות, ולבזבז שעות ארוכות על ניסוי וטעייה?
              </p>
              
              <p className="text-center text-xl py-2">
                או אולי עדיף לך להשקיע סכום סמלי ולקבל תוצאות מושלמות <strong>תוך 24 שעות?</strong>
              </p>
              
              <div className="bg-white/5 p-6 rounded-xl mt-8 hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4 text-sky-400">כשאתה עובד איתי, אתה מקבל:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 me-2">✓</span>
                    <span>תוצאה שתגרום לך לומר <strong>"וואו, זה באמת אני?"</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 me-2">✓</span>
                    <span>חיסכון בזמן – במקום ללמוד טכנולוגיות חדשות</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 me-2">✓</span>
                    <span>תהליך פשוט – שלח תמונות, קבל תוצאות</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 me-2">✓</span>
                    <span>מגוון אפשרויות ורקעים <strong>מותאמים בדיוק לצרכים שלך</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DIYSection;
