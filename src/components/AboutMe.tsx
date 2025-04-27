
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
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-gray-100 mt-16" ref={aboutRef}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary font-rubik">
            היי, אני אוראל עבייד
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            אני יוצר תמונות תדמית שמספרות את הסיפור שלך
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div 
            className={cn(
              "flex-shrink-0 mb-8 md:mb-0 transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            {/* Improved image positioning within circle */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 hover:scale-105 transition-all duration-500">
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
                אני בן 33, יוצר תוכן ומומחה ל<strong>בינה מלאכותית שיוצרת תמונות</strong>. 
              </p>
              
              <p className="text-center text-xl py-2">
                התשוקה שלי? להפוך אנשים רגילים למותג חזותי מנצח.
              </p>
              
              <p>
                אני לא סתם עוד מומחה טכנולוגי – אני האדם שלוקח את התמונות הפשוטות שלך והופך אותן ל<strong>תדמית שמשאירה רושם</strong> ומושכת לקוחות.
              </p>
              
              <p>
                החזון שלי פשוט: לאפשר לך להציג את עצמך בצורה מקצועית ומרשימה, <strong>בלי לבזבז זמן, מאמץ או כסף</strong> על צילומי סטודיו יקרים.
              </p>
              
              <div className="mt-8 bg-white/50 p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-primary mb-4">למה לעבוד איתי?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 flex-shrink-0 me-2">✓</span>
                    <span>התנסיתי עם <strong>עשרות לקוחות מרוצים</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 flex-shrink-0 me-2">✓</span>
                    <span>אני <strong>מלווה אותך אישית</strong> לאורך כל התהליך</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 flex-shrink-0 me-2">✓</span>
                    <span>מבין בדיוק איך להתאים את <strong>התדמית לצרכים שלך</strong></span>
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
