
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const AIMarketingSection = () => {
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
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto max-w-4xl" ref={sectionRef}>
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            <span className="block text-sky-400 mb-2 drop-shadow-lg">
              העולם השתנה
            </span>
            <span className="block text-white/90">
              אני עוזר לך לנצל את זה
            </span>
          </h2>
        
          <p className="text-center text-white/80 mb-12 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            תמונה אחת טובה שווה אלף מילים.{" "}
            <span className="text-sky-300">תמונה מושלמת? היא שווה הרבה יותר.</span>
          </p>

          <div className={cn(
            "space-y-8 text-lg md:text-xl text-white/90 transition-all duration-1000 transform max-w-3xl",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <p>
                בעולם של היום,{" "}
                <span className="text-sky-400 font-semibold">התדמית שלך</span>
                {" "}היא הרושם הראשוני שאתה יוצר. אבל לא כולנו צלמים מקצועיים.
              </p>
            </div>

            <div className="text-center py-6">
              <p className="inline-block bg-sky-400/20 text-sky-300 px-6 py-3 rounded-full text-xl md:text-2xl font-medium animate-float">
                לא צריך ציוד יקר. לא צריך לדעת לפוזז.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <p>
                אתה פשוט שולח לי כמה תמונות רגילות שלך, ואני דואג לכל השאר.{" "}
                <span className="text-primary font-semibold">בתוך 24 שעות</span>
                {" "}אתה מקבל אלבום תדמית מקצועי.
              </p>
            </div>

            <div className="bg-gradient-to-r from-sky-500/10 to-primary/10 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <p>
                אני משתמש בטכנולוגיה המתקדמת ביותר כדי ליצור{" "}
                <span className="text-sky-400 font-semibold">
                  מודל מותאם אישית רק בשבילך
                </span>
                . התוצאה היא תמונות שמשדרות את המקצועיות שלך בדיוק כפי שהיית רוצה להיראות.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMarketingSection;
