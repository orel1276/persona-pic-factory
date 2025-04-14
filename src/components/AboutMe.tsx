
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const AboutMe = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-gray-100" ref={aboutRef}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary font-rubik">
            נעים להכיר, אוראל עבייד
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div 
            className={cn(
              "flex-shrink-0 mb-8 md:mb-0 transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            {/* Improved image positioning within circle */}
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Circle background with subtle glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_15px_rgba(255,0,150,0.4)]"></div>
              
              {/* Person image - better centered with all features visible */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <img 
                  src="/lovable-uploads/1fe94a47-e803-45e8-a676-8b8a651a7fbf.png" 
                  alt="אוראל עבייד" 
                  className="object-cover w-full h-full"
                  style={{ 
                    objectPosition: "center 35%",
                    transform: "scale(1.08)"
                  }}
                />
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "text-gray-700 text-lg max-w-2xl transition-all duration-1000 delay-300 transform content-spacing",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="space-y-6">
              <p>
                בן 33, יוצר דיגיטלי ומומחה לטכנולוגיות בינה מלאכותית. את הקריירה שלי התחלתי כעורך וידאו מקצועי, 
                אך התשוקה שלי לחדשנות הובילה אותי להתמחות בעולם המרתק של ה-AI.
              </p>
              
              <p>
                אני מקדיש את ימיי לחקירה, למידה והתנסות מתמדת בטכנולוגיות החדשניות ביותר בתחום. 
                השילוב הייחודי שלי בין הבנה ויזואלית עמוקה לבין שליטה בכלי AI מתקדמים מאפשר לי ליצור תוכן 
                שלא רק נראה מדהים, אלא גם משרת מטרות שיווקיות ומקצועיות.
              </p>
              
              <p>
                החזון שלי פשוט: להנגיש טכנולוגיה מתקדמת ולאפשר לכל אדם ועסק להציג את עצמו בצורה המקצועית 
                והמרשימה ביותר, ללא הצורך בידע טכני מורכב, השקעת זמן עצומה או הוצאות כספיות גבוהות.
              </p>
              
              <div className="mt-8 bg-white/50 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">למה לעבוד דווקא איתי?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 flex-shrink-0 me-2">✓</span>
                    <span>ניסיון מעשי עם עשרות לקוחות</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 flex-shrink-0 me-2">✓</span>
                    <span>מלווה אישי בתהליך ולא רק טכנולוגיה</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 flex-shrink-0 me-2">✓</span>
                    <span>הקשבה והבנה של השפה השיווקית שלך</span>
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

export default AboutMe;
