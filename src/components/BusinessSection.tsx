
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const BusinessSection = () => {
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
    <section id="business" className="py-24 px-6 bg-background/90 mt-16" ref={sectionRef}>
      <div className="container mx-auto max-w-5xl">
        <div 
          className={cn(
            "text-center mb-16 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
            למוצרים ולעסקים
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-sky-400">הנראות שלך </span>
            <span className="text-white">היא העסק שלך</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            אני יוצר תמונות שלא רק נראות טוב – אלא גם מוכרות
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div 
            className={cn(
              "transition-all duration-1000 delay-300 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            )}
          >
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-1 rounded-xl hover:from-primary/20 hover:to-secondary/20 transition-all duration-300">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-sky-400">למוצרים שלך</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 mr-3">🏷️</span>
                    <p className="text-white/80">יצירת <strong>תמונות מוצר מושלמות</strong> בלי להוציא אלפי שקלים על צילומי סטודיו</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 mr-3">🏷️</span>
                    <p className="text-white/80"><strong>רקעים מגוונים</strong> והתאמה מושלמת לכל פלטפורמה שיווקית</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 mr-3">🏷️</span>
                    <p className="text-white/80">תמונות <strong>עקביות באיכותן</strong> עם אינסוף אפשרויות לשינויים</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 mr-3">🏷️</span>
                    <p className="text-white/80">הצגת מוצרים <strong>בסיטואציות אמיתיות</strong> שמחברות ללקוח שלך</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div 
            className={cn(
              "transition-all duration-1000 delay-500 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            )}
          >
            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-1 rounded-xl hover:from-secondary/20 hover:to-primary/20 transition-all duration-300">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-sky-400">לעסק שלך</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 mr-3">🧑‍💼</span>
                    <p className="text-white/80">תמונות תדמית <strong>מקצועיות ואחידות</strong> לכל הצוות והמנהלים</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 mr-3">🧑‍💼</span>
                    <p className="text-white/80"><strong>חומרים שיווקיים מקוריים</strong> לכל צורך, לכל פלטפורמה</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 mr-3">📢</span>
                    <p className="text-white/80"><strong>שדרוג מהיר</strong> של כל הנוכחות הוויזואלית שלך ברשת</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 mr-3">📢</span>
                    <p className="text-white/80"><strong>חיסכון של עשרות אלפי שקלים</strong> בעלויות צילום מקצועי</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div 
          className={cn(
            "mt-16 text-center transition-all duration-1000 delay-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
          <a 
            href="#צור-קשר" 
            className="bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-block text-lg"
          >
            מוכן לראות את עצמך בגרסה הכי טובה שלך?
          </a>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
