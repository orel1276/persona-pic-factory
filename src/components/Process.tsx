
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface Step {
  number: number;
  title: string;
  description: string;
}

const Process = () => {
  const processRef = useRef<HTMLDivElement>(null);
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

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const steps: Step[] = [
    {
      number: 1,
      title: "שלח לנו מספר תמונות שלך",
      description: "שלח לנו 10-20 תמונות שונות שלך מזוויות שונות, בתאורות שונות ועם הבעות פנים מגוונות. ככל שהתמונות יהיו מגוונות יותר, כך המודל ילמד טוב יותר את מאפייני הפנים שלך."
    },
    {
      number: 2,
      title: "אנחנו מאמנים מודל ייחודי עבורך",
      description: "באמצעות אלגוריתמים מתקדמים של בינה מלאכותית, אנחנו מאמנים מודל שלומד את המאפיינים הייחודיים שלך ויודע לשחזר אותם בדיוק רב בסביבות ובמצבים חדשים."
    },
    {
      number: 3,
      title: "בחר את הסגנון והרקע הרצויים",
      description: "בחר מתוך מגוון רחב של סגנונות צילום, רקעים, תאורות ומצבים שיתאימו למטרת התמונה - בין אם זה לפרופיל LinkedIn מקצועי, לאתר אישי או לכל מטרה אחרת."
    },
    {
      number: 4,
      title: "קבל תמונות מקצועיות באיכות סטודיו",
      description: "תוך זמן קצר תקבל מגוון תמונות מקצועיות באיכות גבוהה, מוכנות לשימוש. כל התמונות עוברות ביקורת איכות לפני שליחתן אליך."
    }
  ];

  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={processRef}>
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            התהליך שלנו
          </span>
          <h2 className="text-3xl md:text-4xl font-bold neon-text-pink mb-6">
            כיצד אנחנו יוצרים תמונות תדמית מושלמות
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            תהליך פשוט, מהיר ואפקטיבי שמבטיח תוצאות מעולות
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={cn(
                  "flex flex-col md:flex-row items-center transition-all duration-1000 transform",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                )}
                style={{ transitionDelay: isVisible ? `${index * 200}ms` : '0ms' }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-1 md:text-left md:pl-12'}`}>
                  <div 
                    className="glass rounded-xl p-8 relative transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                  >
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <span className="bg-primary text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">
                        {step.number}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                </div>
                
                {/* Circle in the middle */}
                <div className="hidden md:flex w-10 h-10 absolute left-1/2 transform -translate-x-1/2 rounded-full bg-primary text-white items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
