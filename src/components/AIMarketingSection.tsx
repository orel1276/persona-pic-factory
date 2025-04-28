
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const AIMarketingSection = () => {
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

    const element = document.getElementById('ai-marketing');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ai-marketing"
      className="py-16 md:py-24 px-4 relative overflow-hidden bg-background"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Image - On the left for desktop */}
          <div 
            className={cn(
              "w-full md:w-[45%] order-last md:order-first transition-all duration-1000 delay-400",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <img
              src="/lovable-uploads/622ad20a-206a-464e-bcf4-8919bf081a04.png"
              alt="אוראל - מומחה תדמית דיגיטלית"
              className="w-full h-auto max-w-xl mx-auto"
              style={{ objectFit: 'contain', objectPosition: 'center' }}
            />
          </div>

          {/* Text Content - On the right for desktop */}
          <div className="w-full md:w-[55%] space-y-8 text-right">
            <h2 
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-bold text-primary transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              אני אוראל, ואני הופך אנשים רגילים לפצצות תדמית.
            </h2>

            <p 
              className={cn(
                "text-xl md:text-2xl text-muted-foreground transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              אני לא עורך תמונות – אני יוצר תדמית שמושכת לקוחות.
            </p>

            <div 
              className={cn(
                "space-y-4 text-lg text-foreground/90 transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
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
                "p-6 rounded-xl bg-muted/50 border border-border/50 space-y-4 transition-all duration-700 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <h3 className="font-semibold text-xl text-primary">למה כדאי לעבוד איתי?</h3>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex gap-2 items-start">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>אני לא עורך תמונות, אני מעצב תדמית מנצחת</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>אני מבין בדיוק איך לגרום ללקוחות לראות אותך כמו מקצוען</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>אני נותן יתרון תחרותי עם תדמית חזקה שתגרום לעסק שלך לבלוט</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMarketingSection;
