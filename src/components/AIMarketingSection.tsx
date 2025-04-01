
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
    <section id="ai-marketing" className="py-24 px-6 bg-white" ref={sectionRef}>
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
                קצת על עולם הבינה המלאכותית
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p className="font-medium">
                  אם אתם כאן, כנראה שכבר הבנתם שהעתיד כבר כאן והוא נקרא בינה מלאכותית.
                </p>
                
                <p>
                  בעולם שבו טכנולוגיה מתקדמת במהירות שיא, כבר אין צורך בציוד יקר, צוותי צילום ענקיים או תקציבי ענק כדי ליצור תוכן מדהים ומקצועי. הבינה המלאכותית מאפשרת לכם לייצר סרטוני פרסומת, תוכן ויזואלי וקמפיינים מרהיבים בקלות ובמהירות שלא דמיינתם.
                </p>
                
                <p className="font-medium">למה זה כל כך משמעותי?</p>
                
                <p>כי עסקים היום חייבים להתבלט, לחדש ולהרשים – אבל בלי להיכנס להוצאות ענק.</p>
                
                <p>עם הטכנולוגיה הזו, כל אחד יכול לייצר תוכן פרסומי מדהים, גם בלי ניסיון קודם.</p>
                
                <p className="font-medium">
                  בואו לגלות איך לייצר תוכן מרהיב, מדויק ומשכנע – בעזרת AI בלבד, ללא ציוד יקר וללא השקעות כבדות.
                </p>
                
                <p>
                  .זו הדרך החדשה של עולם הפרסום – בואו לקחת חלק במהפכה
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
              <div className="bg-white rounded-xl shadow-xl p-6 pb-0 relative h-[530px] border border-primary overflow-hidden">
                {/* נוסיף מסגרת ניאון בצד ימין */}
                <div className="absolute top-0 right-0 bottom-0 w-3 bg-primary shadow-[0_0_15px_rgba(255,0,150,0.7)]"></div>
                
                <img 
                  src="/lovable-uploads/1fe94a47-e803-45e8-a676-8b8a651a7fbf.png" 
                  alt="איש בחליפה" 
                  className="w-full object-contain h-[520px] absolute bottom-0 left-0 right-0 mx-auto"
                  style={{ objectPosition: 'center bottom' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMarketingSection;
