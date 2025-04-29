
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
      className="py-16 md:py-24 px-6 bg-[#05152a]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text content - right side on desktop */}
          <div className="order-2 md:order-1 md:w-1/2">
            <h2 
              className={cn(
                "text-3xl md:text-4xl font-bold text-sky-400 mb-6 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              אני אוראל, ואני הופך אנשים רגילים לפצצות תדמית
            </h2>
            
            <p 
              className={cn(
                "text-lg text-white/90 mb-6 transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              אני יוצר לאנשים תמונות שמוכרות את עצמן – בלי צורך בסטודיו יקר, ציוד מסובך, או צילומים מעיקים. אתה פשוט שולח לי תמונות רגילות מהטלפון.
            </p>
            
            <p 
              className={cn(
                "text-lg text-white/90 transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              בזכות שילוב של ניסיון בעיצוב ובינה מלאכותית מתקדמת, אני יודע בדיוק איך להפוך את התמונות שלך לתמונות מקצועיות שמושכות עיניים. התוצאה? תדמית חדשה שתגרום ללקוחות לרצות לעבוד איתך.
            </p>
          </div>
          
          {/* Image - left side on desktop */}
          <div className="order-1 md:order-2 md:w-1/2 flex justify-center md:justify-start">
            <div 
              className={cn(
                "w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl transition-all duration-700",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
            >
              <img 
                src="/lovable-uploads/be0497d4-c0af-40ca-a705-0db1d3b0ef85.png"
                alt="אוראל - מומחה תדמית"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMarketingSection;
