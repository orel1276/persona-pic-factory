
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const AIMarketingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

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
    <section 
      id="ai-marketing" 
      className={cn(
        "py-16 md:py-24 px-4 md:px-6",
        isMobile ? "bg-white" : "bg-white"
      )} 
      ref={sectionRef}
    >
      <div className="container mx-auto max-w-6xl">
        {isMobile ? (
          // Mobile layout - card style similar to the reference image
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col items-center p-6 text-center">
              <img 
                src="/lovable-uploads/9e8a0eb5-4508-4524-af39-c52a45cd44ca.png" 
                alt="AI Marketing" 
                className="w-24 h-24 object-contain mb-4"
              />
              
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                קצת על עולם הבינה המלאכותית
              </h2>
              
              <div className="space-y-4 text-gray-700 text-right">
                <p className="font-medium">
                  אם אתם כאן, כנראה שכבר הבנתם שהעתיד כבר כאן והוא נקרא בינה מלאכותית.
                </p>
                
                <p>
                  בעולם שבו טכנולוגיה מתקדמת במהירות שיא, כבר אין צורך בציוד יקר, צוותי צילום ענקיים או תקציבי ענק כדי ליצור תוכן מדהים ומקצועי. הבינה המלאכותית מאפשרת לכם לייצר סרטוני פרסומת, תוכן ויזואלי וקמפיינים מרהיבים בקלות ובמהירות שלא דמיינתם.
                </p>
                
                <p className="font-medium">למה זה כל כך משמעותי?</p>
                <p>כי עסקים היום חייבים להתבלט, לחדש ולהרשים – אבל בלי להיכנס להוצאות ענק.</p>
                
                <p className="font-bold">עם הטכנולוגיה הזו, כל אחד יכול לייצר תוכן פרסומי מדהים, גם בלי ניסיון קודם.</p>
              </div>

              <div className="mt-4 mb-2 w-64 h-px bg-primary/50"></div>
              
              <p className="text-gray-700 font-medium text-center">
                בואו לקחת חלק במהפכה!
              </p>
            </div>
          </div>
        ) : (
          // Desktop layout with existing side-by-side design
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
                  
                  <p className="font-bold">עם הטכנולוגיה הזו, כל אחד יכול לייצר תוכן פרסומי מדהים, גם בלי ניסיון קודם.</p>
                  
                  <p>
                    בואו לגלות איך לייצר תוכן מרהיב, מדויק ומשכנע – בעזרת AI בלבד, ללא ציוד יקר וללא השקעות כבדות.
                  </p>
                  
                  <p className="font-medium">
                    זו הדרך החדשה של עולם הפרסום – בואו לקחת חלק במהפכה!
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
                {/* Pink border on the left */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary"></div>
                <img 
                  src="/lovable-uploads/44777209-852d-4ab9-90df-4757cb57f428.png" 
                  alt="איש עם חליפה - דוגמה לתמונת תדמית מקצועית" 
                  className="rounded-tr-lg rounded-br-lg shadow-2xl w-full object-cover h-[500px]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIMarketingSection;
