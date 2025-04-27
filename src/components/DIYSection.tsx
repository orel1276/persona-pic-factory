import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Check, Clock, ArrowRight, Lightbulb } from 'lucide-react';

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
    <section 
      id="diy" 
      className="py-32 px-6 bg-background relative overflow-hidden mt-24" 
      ref={sectionRef}
    >
      {/* שיפור אפקט הרקע עם גרדיאנט עדין יותר */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-gradient-to-br from-primary/5 via-sky-400/10 to-primary/5 blur-[180px] rounded-full"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="glass rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-white/20">
          <div 
            className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="flex flex-col space-y-8">
              {/* שיפור המבנה הויזואלי של הכותרת */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="text-sky-400 block mb-3">בוא נדבר על הזמן היקר שלך.</span>
                  <span className="text-white">אתה באמת רוצה לבזבז אותו על ניסוי וטעייה?</span>
                </h2>
                
                <p className="text-white/90 text-xl md:text-2xl mt-6 border-r-4 border-sky-400 pr-4 py-2">
                  <Lightbulb className="inline-block ml-2 text-sky-400" size={24} />
                  <span className="font-bold">בוא נהיה כנים</span> - הזמן שלך שווה הרבה יותר מזה.
                </p>
              </div>
              
              <div className="text-lg text-white/90 leading-relaxed space-y-8">
                {/* שיפור הצגת הנקודות החשובות */}
                <div className="flex items-start space-x-4 space-x-reverse bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <span className="text-sky-400 flex-shrink-0 mt-1">
                    <Clock size={24} className="animate-pulse" />
                  </span>
                  <div>
                    <p className="text-xl font-medium mb-2 text-sky-300">אין לך זמן מיותר</p>
                    <p>
                      להתחיל לשחק עם טכנולוגיות AI מורכבות, לראות מדריכים ביוטיוב ולבזבז שעות על ניסוי וטעייה.
                    </p>
                  </div>
                </div>
                
                {/* הדגשת המסר העיקרי */}
                <div className="text-center text-xl py-6 px-8 bg-white/5 rounded-xl border-b-2 border-sky-400 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02]">
                  <p>
                    מה שבאמת חשוב לך זה <strong className="text-sky-300">תוצאות מהירות</strong> שיקדמו אותך קדימה.
                  </p>
                </div>
                
                {/* רשימת יתרונות משופרת */}
                <div className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-6 text-sky-400 flex items-center">
                    <ArrowRight className="ml-2 rtl:rotate-180" size={20} />
                    כשאתה עובד איתי, אתה מקבל:
                  </h3>
                  
                  <ul className="space-y-5">
                    {[
                      "תוצאה שתגרום ללקוחות שלך לחשוב \"וואו, הבן אדם הזה יודע מה הוא עושה\"",
                      "חיסכון של שעות אינסופיות – כי הזמן שלך שווה הרבה יותר מזה",
                      "תהליך פשוט וברור – בלי כאב ראש, בלי עקומת למידה",
                      "תדמית שתהפוך אותך למגנט של לקוחות חדשים מהרגע הראשון"
                    ].map((item, index) => (
                      <li 
                        key={index}
                        className="flex items-start hover:translate-x-1 rtl:hover:-translate-x-1 transition-transform duration-300"
                      >
                        <span className="text-sky-400 flex-shrink-0 me-3 bg-sky-400/10 p-1.5 rounded-full">
                          <Check size={16} />
                        </span>
                        <span className="text-white/95">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* כפתור CTA משופר */}
                  <div className="mt-10 text-center">
                    <a 
                      href="#צור-קשר" 
                      className="inline-flex items-center bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-1 text-lg group"
                    >
                      <span>בוא ניצור את התמונה שתספר את הסיפור שלך</span>
                      <ArrowRight className="mr-2 rtl:rotate-180 rtl:ml-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DIYSection;
