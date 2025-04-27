
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            תפסיק להיות נעלם
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-sky-400">כשהנראות שלך משדרת עוצמה, </span>
            <span className="text-white">הלקוחות מרגישים את זה</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            <strong>מה ההבדל בין עסק שמצליח לעסק שנאבק?</strong> האופן שבו הוא נראה בעיני הלקוחות
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div 
            className={cn(
              "transition-all duration-1000 delay-300 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            )}
          >
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-1 rounded-xl hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-sky-400">למוצרים שמשנים את המשחק</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 mr-3">🏷️</span>
                    <p className="text-white/80"><strong>תמונות שמוכרות</strong> במקום תמונות שרק "נראות טוב"</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 mr-3">🏷️</span>
                    <p className="text-white/80"><strong>חיסכון של אלפי שקלים</strong> בצילומי סטודיו שלא באמת נותנים לך ROI</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 mr-3">🏷️</span>
                    <p className="text-white/80"><strong>גמישות אינסופית</strong> לשנות רקעים וסגנונות מתי שרק תרצה</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 mr-3">🏷️</span>
                    <p className="text-white/80"><strong>הצגת מוצרים שגורמת ללקוחות לחשוב</strong> "אני חייב את זה עכשיו"</p>
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
            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-1 rounded-xl hover:from-secondary/20 hover:to-primary/20 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-sky-400">לעסק שרוצה להוביל</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 mr-3">🧑‍💼</span>
                    <p className="text-white/80"><strong>תדמית אחידה שמשדרת מקצועיות</strong> לכל הצוות שלך ללא יוצא מן הכלל</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 mr-3">🧑‍💼</span>
                    <p className="text-white/80"><strong>תוכן שיווקי שמכה בבטן</strong> וגורם ללקוחות להרגיש שהם חייבים אותך</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 mr-3">📢</span>
                    <p className="text-white/80"><strong>מראה אחיד בכל הפלטפורמות</strong> שגורם למותג שלך להיראות גדול פי 10</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-400 flex-shrink-0 mr-3">📢</span>
                    <p className="text-white/80"><strong>יתרון תחרותי מוחץ</strong> מול מתחרים שנראים חובבנים לעומתך</p>
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
            className="bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-block hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("צור-קשר");
            }}
          >
            בוא נהפוך אותך למותג שאי אפשר להתעלם ממנו
          </a>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
