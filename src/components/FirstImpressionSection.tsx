
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { AspectRatio } from './ui/aspect-ratio';

const FirstImpressionSection = () => {
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

    const element = document.getElementById('first-impression');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="first-impression"
      className="py-20 md:py-28 px-6 relative overflow-hidden bg-background/90"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Text content (Right side in RTL) */}
          <div className="flex-1 flex flex-col items-start text-right space-y-8 md:space-y-10 order-2 md:order-1">
            <h2 
              className={cn(
                "text-4xl md:text-6xl font-bold transition-all duration-700 w-full",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <span className="text-pink-500">אני אוראל</span>, ואני הופך אנשים
              <br />
              <span className="text-pink-500">רגילים לפצצות תדמית</span>
            </h2>
            
            <p 
              className={cn(
                "text-xl md:text-2xl text-foreground/90 transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              אני לא צורך תמונות - אני יוצר תדמית שמושכת לקוחות.
            </p>
            
            <p 
              className={cn(
                "text-lg md:text-xl text-foreground/90 transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              בגיל 33, צברתי ניסיון משמעותי בהבנת מה באמת יוצר את הרושם הראשוני בעולם הדיגיטלי.
            </p>
            
            <p 
              className={cn(
                "text-lg md:text-xl text-foreground/90 transition-all duration-700 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              המשימה שלי להפוך אותך <span className="text-pink-500 font-semibold">למגנט לקוחות חדשים</span> - כדי שתצטרך לדבר הרבה.
            </p>
            
            <p 
              className={cn(
                "text-lg md:text-xl text-foreground/90 transition-all duration-700 delay-400",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              בשנה האחרונה יצרתי תדמיות שגרמו לאנשים לקבל פניות, שיתופי פעולה ואמון — מהרגע הראשון.
            </p>
            
            <p 
              className={cn(
                "text-lg md:text-xl text-foreground/90 transition-all duration-700 delay-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              אני כאן כדי לעזור לך להראות כמו <span className="text-pink-500 font-semibold">המומחה שאתה באמת</span> - גם אם אתה מצליח רק עם הטלפון.
            </p>
            
            <h3 
              className={cn(
                "text-3xl md:text-4xl font-bold mt-6 text-center w-full transition-all duration-700 delay-600",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              למה כדאי לעבוד איתי?
            </h3>
            
            <div 
              className={cn(
                "w-full space-y-4 transition-all duration-700 delay-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="text-pink-500 text-xl">✓</span>
                <p className="text-lg md:text-xl">אני לא עורך תמונות, אני מעצב תדמית מנצחת</p>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-pink-500 text-xl">✓</span>
                <p className="text-lg md:text-xl">אני מבין בדיוק איך ברגום ללקוחות לראות אותך כמו מקצוען</p>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-pink-500 text-xl">✓</span>
                <p className="text-lg md:text-xl">אני נותן יחס אישי והתחרות עם תדמית חזקה שתגרום לעסק שלך לבלוט</p>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection("צור-קשר")}
              className={cn(
                "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold py-5 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-xl md:text-2xl mt-8 md:mt-12 self-center transition-opacity duration-700 delay-800",
                isVisible ? "opacity-100" : "opacity-0"
              )}
            >
              בוא נבנה לך תדמית מנצחת
            </button>
          </div>
          
          {/* Profile image (Left side in RTL) */}
          <div 
            className={cn(
              "flex-1 flex justify-center items-center order-1 md:order-2 transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="relative">
              <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-pink-500 shadow-xl">
                <div className="w-full h-full relative">
                  <img 
                    src="/public/lovable-uploads/fe246979-6ed6-4789-9d31-1c0544641070.png" 
                    alt="אוראל - מומחה תדמית" 
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Gradient overlay at bottom to hide cut-off */}
                  <div className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
              </div>
              {/* Decorative circle */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] md:w-[430px] md:h-[430px] rounded-full border-2 border-pink-500/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstImpressionSection;
