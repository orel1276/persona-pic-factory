
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

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
          
          <div className="space-y-20 relative">
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
                    className="glass rounded-xl p-8 relative transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:bg-white/5"
                  >
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <span className="bg-sky-500 text-white rounded-full w-10 h-10 inline-flex items-center justify-center mr-3 font-bold">
                        {step.number}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                </div>
                
                {/* Circle in the middle */}
                <div className="hidden md:flex w-12 h-12 absolute left-1/2 transform -translate-x-1/2 rounded-full bg-sky-500 text-white items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
              </div>
            ))}
          </div>
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
