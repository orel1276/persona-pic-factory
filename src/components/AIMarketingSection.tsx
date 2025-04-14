
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
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-sky-400">
          העולם השתנה – זה הזמן לנצל את זה
        </h2>

        <div className={cn(
          "space-y-6 text-lg text-white/90 transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <p>
            בעידן הדיגיטלי של היום, התדמית החזותית שלך היא הרושם הראשוני שאתה יוצר. אבל לא כולנו צלמים מקצועיים ולא לכולנו יש את הזמן או התקציב להשקיע בצילומי סטודיו יקרים. כאן הטכנולוגיה של <mark className="bg-sky-400/20 text-sky-300 px-1 rounded">AI</mark> נכנסת לתמונה.
          </p>

          <p>
            בעזרת השירות שלנו, אתה יכול לקבל תמונות תדמית באיכות מקצועית <mark className="bg-sky-400/20 text-sky-300 px-1 rounded">בלי ציוד</mark> יקר, <mark className="bg-sky-400/20 text-sky-300 px-1 rounded">ללא ניסיון קודם</mark> בצילום, ומבלי לצאת מהבית. פשוט שלח לנו מספר תמונות רגילות שלך, ואנחנו נדאג לשאר.
          </p>

          <p>
            אנחנו משתמשים בטכנולוגיה המתקדמת ביותר כדי ליצור מודל מותאם אישית שלומד את המאפיינים הייחודיים שלך, ואז מייצר תמונות חדשות שנראות טבעיות ומקצועיות. התוצאה היא תמונות תדמית שמשדרות את המקצועיות שלך בדיוק כפי שהיית רוצה להיראות.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIMarketingSection;
