
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
    <section id="diy" className="py-20 px-6 bg-background relative" ref={sectionRef}>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="bg-accent/80 rounded-lg p-6 md:p-8 border border-white/10">
          <div 
            className={cn(
              "transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="text-primary">"אבל אוראל, </span>
              <span className="text-secondary">אני יכול לעשות את זה בעצמי?"</span>
            </h2>
            
            <div className="text-lg text-white/90 leading-relaxed space-y-4">
              <p>
                <span className="font-bold">נכון לגמרי.</span> בדיוק כמו שאתה יכול ללמוד לצלם בעצמך, לבנות אתר בעצמך או לעצב לוגו בעצמך.
              </p>
              
              <p>
                אבל האם זה באמת שווה את הזמן היקר שלך? להתפתל עם AI prompt engineering, ללמוד טכניקות אימון מודלים מתקדמות, 
                להתמודד עם שגיאות ותוצאות לא אידאליות, ולבזבז שעות ארוכות על ניסוי וטעייה?
              </p>
              
              <div className="bg-white/5 p-4 rounded-lg mt-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">כשאתה עובד איתי, אתה מקבל:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary flex-shrink-0 me-2">✓</span>
                    <span>מומחיות ייחודית באמצעות מודלים מתקדמים שאני אישית מאמן ומכוון לתוצאה המושלמת</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary flex-shrink-0 me-2">✓</span>
                    <span>חיסכון בעשרות שעות של ניסוי וטעייה והתמודדות עם עקומת למידה תלולה</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary flex-shrink-0 me-2">✓</span>
                    <span>תוצאות מקצועיות ועקביות עם מגוון אפשרויות ורקעים מותאמים לצרכים שלך</span>
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
