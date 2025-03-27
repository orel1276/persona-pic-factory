
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
            <div className="relative">
              {/* Pink border on the left */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="איש עסקים בחליפה" 
                className="rounded-tr-lg rounded-br-lg shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
          
          <div 
            className={cn(
              "md:w-1/2 transition-all duration-1000 delay-300 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              קצת על שיווק דיגיטלי
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                אם אתם כבר נמצאים כאן, כנראה שמעתם את הביקוש המטורף שיש למשווקים דיגיטליים, עסקים חדשים נפתחים כל הזמן והדבר הראשון שהם צריכים זה משווק דיגיטלי שיגרום להם את העסק שלא מדבר על 600 אלף בעלי עסקים קיימים שמחפשים כל יום אנשי שיווק.
              </p>
              
              <p className="font-medium">למה זה קורה?</p>
              <p>כי יש עסקים שנופלים, ולמה?</p>
              
              <p className="font-bold">כי הם לא עשו מספיק שיווק ולכן לא עשו מספיק כסף!</p>
              
              <p>
                כמשווקים שעברו את תוכנית ההכשרה שלי אתם תדעו לתת משפחת מלאה לאותם בעלי עסקים שמחפשים איש שיווק שידע את העבודה ושילווה אותם לטווח הרחוק באמצעות כל הכלים בתוכנית אתם תדעו גם איך להתנהל עסקית ולגרום להם להשאיר אתכם לתקופות ארוכות וככה להנות מהכנסה יציבה ומספקת.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMarketingSection;
