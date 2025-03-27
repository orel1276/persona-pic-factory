
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
      description: "תוך 24 שעות תקבל מגוון תמונות מקצועיות באיכות גבוהה, מוכנות לשימוש. כל התמונות עוברות ביקורת איכות לפני שליחתן אליך."
    }
  ];

  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={processRef}>
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <AspectRatio ratio={3/4} className="bg-black/20">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                  alt="איש בחליפה - דוגמא לתמונת תדמית מקצועית"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold neon-text-pink">
              מהפכת הבינה המלאכותית בעולם התדמית
            </h2>
            <p className="text-lg text-white/90">
              העולם השתנה, וכיום אין צורך בציוד יקר, סטודיו מקצועי או צלם יקר כדי ליצור תמונות תדמית מרשימות. 
              הבינה המלאכותית מאפשרת לך לקבל תמונות באיכות סטודיו מקצועי תוך 24 שעות בלבד וממש בנוחות הבית שלך.
            </p>
            <p className="text-lg text-white/90">
              במקום להשקיע אלפי שקלים בציוד, צלם וסטודיו, תוכל לקבל תוצאות מרשימות בחלק קטן מהמחיר. 
              אנחנו משתמשים בטכנולוגיה המתקדמת ביותר כדי ליצור תמונות שנראות טבעיות, מקצועיות ומשקפות את הייחודיות שלך.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold neon-text-pink mb-6">
            התהליך הפשוט שלנו
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
                      {index % 2 === 0 ? (
                        <>
                          {step.title}
                          <span className="bg-primary text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">
                            {step.number}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="bg-primary text-white rounded-full w-8 h-8 inline-flex items-center justify-center ml-3">
                            {step.number}
                          </span>
                          {step.title}
                        </>
                      )}
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
