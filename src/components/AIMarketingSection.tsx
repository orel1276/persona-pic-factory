
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const AIMarketingSection = () => {
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

    const element = document.getElementById('ai-marketing');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ai-marketing"
      className="py-16 md:py-24 px-6 relative overflow-hidden bg-background"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
          {/* Text Content - Left side for desktop, top for mobile */}
          <div className="w-full md:w-[55%] space-y-8 text-right order-last md:order-first">
            <h2 
              className={cn(
                "text-3xl md:text-4xl font-bold text-primary transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              אני אוראל, ואני הופך אנשים רגילים לפצצות תדמית
            </h2>

            <div 
              className={cn(
                "space-y-6 text-lg text-foreground/90 transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <p>
                אני לא עורך תמונות – אני יוצר תדמית שמושכת לקוחות.
              </p>

              <p>
                בגיל 33, צברתי ניסיון מעשי בהבנת מה באמת יוצר את הרושם הראשוני בעולם הדיגיטלי.
              </p>

              <p>
                המשימה שלי? להפוך אותך ל<span className="text-primary">מגנט לקוחות חדשים</span> מהר יותר – בלי שתצטרך לדבר הרבה.
              </p>

              <p>
                בשנה האחרונה יצרתי תדמיות שגרמו לאנשים לקבל פניות, שיתופי פעולה ואמון – מהרגע הראשון.
              </p>

              <p>
                אני כאן כדי לעזור לך להראות כמו <span className="text-primary">המומחה שאתה באמת</span> – גם אם אתה מצלם רק עם הטלפון.
              </p>
            </div>

            <div 
              className={cn(
                "p-6 rounded-xl bg-slate-900/50 border border-border/50 space-y-4 transition-all duration-700 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <h3 className="font-semibold text-xl text-primary">למה כדאי לעבוד איתי?</h3>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex gap-2 items-start">
                  <span className="text-primary mt-1">✓</span>
                  <span>אני לא עורך תמונות, אני מעצב תדמית מנצחת</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-primary mt-1">✓</span>
                  <span>אני מבין בדיוק איך לגרום ללקוחות לראות אותך כמו מקצוען</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-primary mt-1">✓</span>
                  <span>אני נותן יתרון תחרותי עם תדמית חזקה שתגרום לעסק שלך לבלוט</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Image - Right side for desktop, bottom for mobile */}
          <div 
            className={cn(
              "relative w-full md:w-[45%] order-first md:order-last transition-all duration-1000 delay-400 flex items-center justify-center md:justify-start",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {/* Circular image container */}
            <div className="relative w-72 h-72 md:w-[350px] md:h-[350px]">
              {/* Background glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/10 shadow-[0_0_25px_rgba(255,0,150,0.2)]"></div>
              
              {/* Main circular image with border */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 overflow-hidden">
                <img 
                  src="/lovable-uploads/1fe94a47-e803-45e8-a676-8b8a651a7fbf.png" 
                  alt="אוראל - מומחה תדמית דיגיטלית" 
                  className="w-full h-full object-cover object-center"
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
