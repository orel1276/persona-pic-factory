
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
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <div className="w-full md:w-7/12 space-y-6 text-right">
            <h2 
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-bold text-primary transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              אני אוראל, ואני יוצר תדמית שמושכת לקוחות.
            </h2>

            <p 
              className={cn(
                "text-xl md:text-2xl text-muted-foreground transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              לא סתם עריכה. לא עוד תמונות. אני יוצר תדמית שמרגישה אמיתית – ומביאה לקוחות.
            </p>

            <div 
              className={cn(
                "space-y-4 text-lg text-foreground/90 transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <p>
                אני אוראל, בן 33, מומחה ביצירת תדמית דיגיטלית שמושכת את האנשים הנכונים.
                בעזרת כמה תמונות פשוטות מהטלפון שלך – אני הופך אותך לנוכחות מקצועית, אותנטית ומשכנעת.
              </p>

              <p>
                המשימה שלי? להראות לעולם בדיוק את מה שהכי טוב בך – עוד לפני שהם פוגשים אותך.
              </p>

              <p>
                בשנה האחרונה עזרתי לעשרות עסקים להיראות מקצועיים, לעורר אמון ולכבוש לקוחות – בלי להוציא עשרות אלפי שקלים על צילומי סטודיו.
              </p>
            </div>

            <div 
              className={cn(
                "p-6 rounded-xl border border-border/50 space-y-4 transition-all duration-700 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <h3 className="font-semibold text-xl text-primary">למה כדאי לעבוד איתי?</h3>
              <ul className="space-y-3">
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

          {/* Image */}
          <div 
            className={cn(
              "w-full md:w-5/12 transition-all duration-1000 delay-400",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <img
              src="/lovable-uploads/d880f8be-861b-42de-912d-0c9268eaa245.png"
              alt="אוראל - מומחה תדמית דיגיטלית"
              className="w-[80%] md:w-full max-w-lg mx-auto transform scale-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMarketingSection;
