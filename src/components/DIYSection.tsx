
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Check, Clock, ArrowRight } from 'lucide-react';

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
      {/* Enhanced background effect with better gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-br from-primary/10 to-sky-400/5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="glass rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500">
          <div 
            className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="flex flex-col space-y-6">
              {/* Improved heading with better visual hierarchy and breathing room */}
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span className="text-sky-400 block mb-2">"בוא נדבר ישירות, </span>
                  <span className="text-white">אתה באמת חושב שיש לך זמן לזה?"</span>
                </h2>
                
                <p className="text-white/90 text-xl md:text-2xl mt-4 border-r-4 border-sky-400 pr-4">
                  <span className="font-bold">אל תשלה את עצמך.</span> אתה ממילא טובע בעבודה ואתה יודע את זה.
                </p>
              </div>
              
              <div className="text-lg text-white/90 leading-relaxed space-y-6 mt-2">
                {/* Visual improvement with icon and better spacing */}
                <div className="flex items-start space-x-4 space-x-reverse">
                  <span className="text-sky-400 flex-shrink-0 mt-1">
                    <Clock size={20} className="rtl:ml-2 animate-pulse" />
                  </span>
                  <p>
                    אין לך באמת <strong className="text-sky-300">זמן פנוי</strong> להתחיל לשחק עם טכנולוגיות AI מורכבות, לראות מדריכים ביוטיוב ולבזבז שעות על ניסוי וטעייה.
                  </p>
                </div>
                
                {/* Improved focus element with better visual contrast */}
                <p className="text-center text-xl py-4 px-6 bg-white/5 rounded-lg border-b-2 border-sky-400 hover:bg-white/10 transition-all duration-300">
                  מה שבאמת חשוב לך זה <strong className="text-sky-300">תוצאות מהירות</strong> שיקדמו אותך קדימה, לא עוד פרויקט לבזבז עליו זמן.
                </p>
                
                <div className="bg-white/5 p-6 rounded-xl mt-8 hover:bg-white/10 transition-colors duration-300 transform hover:scale-[1.01]">
                  <h3 className="text-xl font-semibold mb-6 text-sky-400 flex items-center">
                    <ArrowRight className="ml-2 rtl:rotate-180" size={18} />
                    כשאתה עובד איתי, אתה מקבל:
                  </h3>
                  
                  {/* Enhanced bullet points with better visual design */}
                  <ul className="space-y-4">
                    <li className="flex items-start hover:translate-x-1 rtl:hover:-translate-x-1 transition-transform duration-300">
                      <span className="text-sky-400 flex-shrink-0 me-3 bg-sky-400/10 p-1 rounded-full">
                        <Check size={16} />
                      </span>
                      <span className="text-white/95">תוצאה שתגרום ללקוחות שלך לחשוב <strong className="text-white">"וואו, הבן אדם הזה באמת יודע מה הוא עושה"</strong></span>
                    </li>
                    <li className="flex items-start hover:translate-x-1 rtl:hover:-translate-x-1 transition-transform duration-300">
                      <span className="text-sky-400 flex-shrink-0 me-3 bg-sky-400/10 p-1 rounded-full">
                        <Check size={16} />
                      </span>
                      <span className="text-white/95">חיסכון של שעות אינסופיות – כי הזמן שלך <strong className="text-white">שווה הרבה יותר</strong> מזה</span>
                    </li>
                    <li className="flex items-start hover:translate-x-1 rtl:hover:-translate-x-1 transition-transform duration-300">
                      <span className="text-sky-400 flex-shrink-0 me-3 bg-sky-400/10 p-1 rounded-full">
                        <Check size={16} />
                      </span>
                      <span className="text-white/95">תהליך פשוט וברור – <strong className="text-white">בלי כאב ראש, בלי עקומת למידה</strong></span>
                    </li>
                    <li className="flex items-start hover:translate-x-1 rtl:hover:-translate-x-1 transition-transform duration-300">
                      <span className="text-sky-400 flex-shrink-0 me-3 bg-sky-400/10 p-1 rounded-full">
                        <Check size={16} />
                      </span>
                      <span className="text-white/95">תדמית שתהפוך אותך <strong className="text-white">למגנט של לקוחות חדשים</strong> מהרגע הראשון</span>
                    </li>
                  </ul>
                  
                  {/* New CTA button with hover effect */}
                  <div className="mt-8 text-center">
                    <a 
                      href="#צור-קשר" 
                      className="inline-flex items-center bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 transform hover:translate-y-[-2px] text-lg"
                    >
                      <span>בוא נחסוך לך זמן יקר</span>
                      <ArrowRight className="mr-2 rtl:rotate-180 rtl:ml-2" size={18} />
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
