
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
    <section id="business" className="py-20 px-6 bg-background/90" ref={sectionRef}>
      <div className="container mx-auto max-w-5xl">
        <div 
          className={cn(
            "text-center mb-12 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block py-1 px-3 rounded-md bg-white/10 text-white text-sm font-medium mb-4">
            פתרונות למותגים ועסקים
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-secondary">הרם את המותג שלך </span>
            <span className="text-primary">למקום הבא</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            לא רק אנשים פרטיים נהנים מהשירות שלנו - גם עסקים ומותגים יכולים להפיק תועלת עצומה מטכנולוגיה מתקדמת זו
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div 
            className={cn(
              "transition-all duration-700 delay-200 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            )}
          >
            <div className="bg-accent/80 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">למותגים ומוצרים</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondary flex-shrink-0 mr-2">•</span>
                  <p className="text-white/80">יצירת סטים שלמים של תמונות מוצר באיכות מקצועית ללא צורך בצילומי סטודיו יקרים</p>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary flex-shrink-0 mr-2">•</span>
                  <p className="text-white/80">התאמת מוצרים לסגנונות שונים, רקעים מגוונים וסביבות שונות בקלות ובמהירות</p>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary flex-shrink-0 mr-2">•</span>
                  <p className="text-white/80">יצירת תמונות מוצר עקביות באיכותן עם אפשרויות אינסופיות לשינויים</p>
                </li>
              </ul>
            </div>
          </div>

          <div 
            className={cn(
              "transition-all duration-700 delay-400 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            )}
          >
            <div className="bg-accent/80 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-secondary">לעסקים וחברות</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary flex-shrink-0 mr-2">•</span>
                  <p className="text-white/80">תמונות תדמית מקצועיות ואחידות לכל הצוות והמנהלים ללא צורך לתאם ולבזבז ימי עבודה יקרים</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary flex-shrink-0 mr-2">•</span>
                  <p className="text-white/80">יצירת חומרים שיווקיים עם עובדים ומוצרים בסביבות שונות לצרכי פרסום ומדיה חברתית</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary flex-shrink-0 mr-2">•</span>
                  <p className="text-white/80">חיסכון משמעותי בעלויות צילום, תיאום לוחות זמנים, ושכירת שירותים מקצועיים</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div 
          className={cn(
            "mt-12 text-center transition-all duration-700 delay-500 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
          <a 
            href="#contact" 
            className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md transition-all duration-300 inline-block"
          >
            קבל הצעת מחיר מותאמת לעסק שלך
          </a>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
