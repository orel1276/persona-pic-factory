
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-sky-400">
          העולם השתנה – אני עוזר לך לנצל את זה
        </h2>
        
        <p className="text-center text-white/80 mb-10 text-lg">
          תמונה אחת טובה שווה אלף מילים. תמונה מושלמת? היא שווה הרבה יותר.
        </p>

        <div className={cn(
          "space-y-6 text-lg text-white/90 transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <p>
            בעולם של היום, <strong>התדמית שלך</strong> היא הרושם הראשוני שאתה יוצר. אבל לא כולנו צלמים מקצועיים.
          </p>

          <p className="text-center text-xl py-4">
            <mark className="bg-sky-400/20 text-sky-300 px-2 py-1 rounded">לא צריך ציוד יקר. לא צריך לדעת לפוזז.</mark>
          </p>

          <p>
            אתה פשוט שולח לי כמה תמונות רגילות שלך, ואני דואג לכל השאר. <strong>בתוך 24 שעות</strong> אתה מקבל אלבום תדמית מקצועי.
          </p>

          <p>
            אני משתמש בטכנולוגיה המתקדמת ביותר כדי ליצור <strong>מודל מותאם אישית רק בשבילך</strong>. התוצאה היא תמונות שמשדרות את המקצועיות שלך בדיוק כפי שהיית רוצה להיראות.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIMarketingSection;
