
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
    <section id="ai-marketing" className="py-24 px-6 bg-transparent" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div 
            className={cn(
              "md:w-1/2 relative transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            )}
          >
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                קצת על שיווק דיגיטלי
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p className="font-medium">
                  אם אתם כאן, כנראה שכבר נמצאים כאן, וראוי לעשות את הצעדים הבאים להשמיע את העסק שלכם.
                </p>
                
                <p>
                  אם אתם כבר נמצאים כאן, כנראה שמעתם על שיווק דיגיטלי. עסקים חדשים ותיקים כיום צריכים את השיווק דיגיטלי שיעזור להם את העסק.
                </p>
                
                <p className="font-medium">כי כל עסק צריך פתרונות דיגיטליים, ולמה?</p>
                
                <p>כשמשווקים שיעלו את תוכנית התקשורת של האתר שלהם בעלי עסקים שמצליחים איש שיווק שיודע כאשמטעות כל הכלים תוכנית את עסקים ולגרום להם להשאיר אתכם בתודעת יצירה והפקה.</p>
                
                <p className="font-bold">כי לא כל עסק מספיק שיווק ולא כל עסק מנהל עסק.</p>
                
                <p>
                  כי עסקים היום חייבים להתבלט, לחדש ולהרשים – אבל בלי להיכנס להוצאות ענק.
                </p>
                
                <p className="font-medium">
                  למה זה קורה?
                </p>
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "md:w-1/2 transition-all duration-1000 delay-300 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            )}
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/be0497d4-c0af-40ca-a705-0db1d3b0ef85.png" 
                alt="איש עם חליפה - דוגמה לתמונת תדמית מקצועית" 
                className="w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMarketingSection;
