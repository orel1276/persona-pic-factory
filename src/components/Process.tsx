
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps: Step[] = [
    {
      number: 1,
      title: "שלח לי את התמונות הבסיסיות שלך",
      description: "לא צריך צילום מקצועי, לא צריך פוזות. תמונות רגילות מהטלפון שלך עושות את העבודה מצוין. תוך 10 דקות אנחנו מתחילים."
    },
    {
      number: 2,
      title: "אני יוצר מודל AI מותאם אישית רק לך",
      description: "בזמן שאתה ממשיך בחיים שלך, אני בונה מודל AI שמבין בדיוק איך אתה נראה. אין פה 'פתרון גנרי', זה אתה באיכות הכי גבוהה שאפשר."
    },
    {
      number: 3,
      title: "בחר איך אתה רוצה להראות",
      description: "מנכ\"ל מוביל? יועץ אסטרטגי? מרצה בכיר? פשוט תגיד לי מה המטרה שלך, ואני אדאג שהתמונות יעבירו בדיוק את המסר הזה."
    },
    {
      number: 4,
      title: "קבל תוצאות שישנו את החיים שלך",
      description: "תוך 24 שעות בדיוק, אתה מקבל אלבום שלם של תמונות מקצועיות שהולכות לשנות את האופן שבו לקוחות פוטנציאליים תופסים אותך. הם יראו מנהיג, לא סתם עוד יועץ."
    }
  ];

  return (
    <section id="process" className="py-24 bg-background mt-16">
      <div className="container mx-auto px-6" ref={processRef}>
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            התהליך הפשוט שהופך אותך למגנט של לקוחות
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-400 mb-4">
            ארבעה צעדים בדרך לתדמית שתשנה את העסק שלך
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            <strong>בזמן שאתה קורא את זה, המתחרים שלך כבר עובדים על התדמית שלהם</strong>
          </p>
        </div>

        {/* New grid layout for the steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={cn(
                "glass rounded-xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:bg-white/5 h-full flex flex-col",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
              )}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Step number and title */}
              <div className="flex items-center mb-4">
                <span className="bg-sky-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 font-bold">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold">
                  {step.title}
                </h3>
              </div>
              
              {/* Step description */}
              <p className="text-white/80">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Add standardized CTA at the end */}
        <div className="text-center mt-16">
          <a 
            href="#צור-קשר" 
            className="bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-block hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("צור-קשר");
            }}
          >
            התחל לשנות את התדמית שלך עכשיו
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
