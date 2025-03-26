
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
    <section id="business" className="py-24 px-6 bg-background/90" ref={sectionRef}>
      <div className="container mx-auto max-w-5xl">
        <div 
          className={cn(
            "text-center mb-16 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
            פתרונות למותגים ועסקים
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="neon-text-blue">הרם את המותג שלך </span>
            <span className="neon-text-pink">למקום הבא</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            לא רק אנשים פרטיים נהנים מהשירות שלנו - גם עסקים ומותגים יכולים להפיק תועלת עצומה מטכנולוגיה מתקדמת זו
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div 
            className={cn(
              "transition-all duration-1000 delay-300 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            )}
          >
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-1 rounded-xl">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 neon-text-pink">למותגים ומוצרים</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="neon-text-blue text-xl flex-shrink-0 mr-3">•</span>
                    <p className="text-white/80">יצירת סטים שלמים של תמונות מוצר באיכות מקצועית ללא צורך בצילומי סטודיו יקרים</p>
                  </li>
                  <li className="flex items-start">
                    <span className="neon-text-blue text-xl flex-shrink-0 mr-3">•</span>
                    <p className="text-white/80">התאמת מוצרים לסגנונות שונים, רקעים מגוונים וסביבות שונות בקלות ובמהירות</p>
                  </li>
                  <li className="flex items-start">
                    <span className="neon-text-blue text-xl flex-shrink-0 mr-3">•</span>
                    <p className="text-white/80">יצירת תמונות מוצר עקביות באיכותן עם אפשרויות אינסופיות לשינויים לקמפיינים ועונות שונות</p>
                  </li>
                  <li className="flex items-start">
                    <span className="neon-text-blue text-xl flex-shrink-0 mr-3">•</span>
                    <p className="text-white/80">הצגת מוצרים בתרחישי שימוש ריאליסטיים ומותאמים לקהל היעד שלך</p>
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
            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-1 rounded-xl">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 neon-text-blue">לעסקים וחברות</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="neon-text-pink text-xl flex-shrink-0 mr-3">•</span>
                    <p className="text-white/80">תמונות תדמית מקצועיות ואחידות לכל הצוות והמנהלים ללא צורך לתאם ולבזבז ימי עבודה יקרים</p>
                  </li>
                  <li className="flex items-start">
                    <span className="neon-text-pink text-xl flex-shrink-0 mr-3">•</span>
                    <p className="text-white/80">יצירת חומרים שיווקיים עם עובדים ומוצרים בסביבות שונות לצרכי פרסום ומדיה חברתית</p>
                  </li>
                  <li className="flex items-start">
                    <span className="neon-text-pink text-xl flex-shrink-0 mr-3">•</span>
                    <p className="text-white/80">שדרוג מהיר ועקבי של כל התמונות באתר החברה, ברשתות החברתיות ובפרופילים המקצועיים</p>
                  </li>
                  <li className="flex items-start">
                    <span className="neon-text-pink text-xl flex-shrink-0 mr-3">•</span>
                    <p className="text-white/80">חיסכון משמעותי בעלויות צילום, תיאום לוחות זמנים, ושכירת שירותים מקצועיים</p>
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
            href="#contact" 
            className="neon-button inline-block"
          >
            קבל הצעת מחיר מותאמת לעסק שלך
          </a>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
