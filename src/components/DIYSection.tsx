
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
    <section id="diy" className="py-24 px-6 bg-background relative overflow-hidden" ref={sectionRef}>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="neon-text-pink">"אבל אוראל, </span>
              <span className="neon-text-blue">אני יכול לעשות את זה בעצמי?"</span>
            </h2>
            
            <div className="text-lg text-white/90 leading-relaxed space-y-6">
              <p>
                <span className="font-bold">נכון לגמרי.</span> בדיוק כמו שאתה יכול ללמוד לצלם בעצמך, לבנות אתר בעצמך או לעצב לוגו בעצמך.
              </p>
              
              <p>
                אבל האם זה באמת שווה את הזמן היקר שלך? להתפתל עם AI prompt engineering, ללמוד טכניקות אימון מודלים מתקדמות, 
                להתמודד עם שגיאות ותוצאות לא אידאליות, ולבזבז שעות ארוכות על ניסוי וטעייה?
              </p>
              
              <p>
                או אולי עדיף לך להשקיע סכום סמלי ולקבל תמונות תדמית ברמה הגבוהה ביותר תוך זמן קצר, מאדם שמתמחה בתחום ומכיר את כל הטריקים?
              </p>
              
              <div className="bg-white/5 p-6 rounded-xl mt-8">
                <h3 className="text-xl font-semibold mb-4 neon-text-pink">כשאתה עובד איתי, אתה מקבל:</h3>
                <ul className="space-y-3">
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
                    <span>תוצאות מקצועיות ועקביות שלוקחות בחשבון טכניקות צילום מתקדמות ומבוססות על שלושים שנות ניסיון בתחום השיווק</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary flex-shrink-0 me-2">✓</span>
                    <span>מגוון אפשרויות ורקעים שהם תמיד עדכניים ומותאמים לצרכים השיווקיים שלך</span>
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
