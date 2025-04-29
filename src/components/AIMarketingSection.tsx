
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const AIMarketingSection = () => {
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

    const element = document.getElementById('about-me-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-me-section"
      className="py-16 md:py-24 px-6 bg-gray-50"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 
            className={cn(
              "text-4xl md:text-5xl font-bold text-primary mb-8 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            אני אוראל, ואני הופך אנשים רגילים לפצצות תדמית
          </h2>
          
          <p 
            className={cn(
              "text-xl text-gray-700 mb-6 leading-relaxed transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            אני יוצר לאנשים תמונות שמוכרות את עצמן – בלי צורך בסטודיו יקר, ציוד מסובך, או צילומים מעיקים. אתה פשוט שולח לי תמונות רגילות מהטלפון.
          </p>
          
          <p 
            className={cn(
              "text-xl text-gray-700 leading-relaxed transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            בזכות שילוב של ניסיון בעיצוב ובינה מלאכותית מתקדמת, אני יודע בדיוק איך להפוך את התמונות שלך לתמונות מקצועיות שמושכות עיניים. התוצאה? תדמית חדשה שתגרום ללקוחות לרצות לעבוד איתך.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIMarketingSection;
