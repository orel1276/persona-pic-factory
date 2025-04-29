
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutMe = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 md:py-24 px-6 bg-background mt-16 md:mt-20" ref={aboutRef}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-rubik leading-tight">
            אני אוראל, ואני הופך אנשים רגילים לפצצות תדמית
          </h2>
          <p className="text-lg text-foreground/70 mt-4">
            אני לא סתם "עורך תמונות" – אני יוצר נראות שמושכת לקוחות
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div 
            className={cn(
              "w-80 h-80 md:w-[400px] md:h-[400px] transition-all duration-1000 delay-100 flex items-center justify-center",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {/* Circular image container - Large and prominent */}
            <div className="relative w-full h-full">
              {/* Background glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/10 shadow-[0_0_25px_rgba(255,0,150,0.2)]"></div>
              
              {/* Main circular image with border */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 overflow-hidden">
                <img 
                  src="/lovable-uploads/be0497d4-c0af-40ca-a705-0db1d3b0ef85.png" 
                  alt="אוראל - מומחה תדמית דיגיטלית" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "flex-shrink-0 transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            {/* Text content - Centered */}
            <div className="space-y-6 text-foreground/90 max-w-2xl text-center mx-auto">
              <p className="text-lg">
                נעים מאוד, אני <strong>אוראל עבייד</strong> – ואני הופך אנשים רגילים לפצצות תדמית.
              </p>
              
              <p className="text-lg">
                אני יוצר לאנשים תמונות שמוכרות את עצמם – בלי צורך בסטודיו יקר, ציוד מסובך או צילומים מעיקים. אתה פשוט שולח לי תמונות רגילות מהטלפון.
              </p>
              
              <p className="text-lg">
                בזכות שילוב של ניסיון בעיצוב ובינה מלאכותית מתקדמת, אני יודע בדיוק איך להפוך את התמונות שלך לתמונות מקצועיות שמושכות עיניים. התוצאה? תדמית חדשה שגורמת ללקוחות לרצות לעבוד איתך.
              </p>
              
              <div className="mt-8 bg-slate-800/50 p-6 rounded-xl border border-border/50 hover:shadow-md transition-all duration-300 max-w-xl mx-auto">
                <h3 className="text-xl font-bold text-primary mb-4">למה כדאי לך לעבוד איתי?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start justify-center">
                    <span className="text-green-500 flex-shrink-0 me-2">✓</span>
                    <span>אני לא עורך תמונות, אני <strong>מעצב תדמית מנצחת</strong></span>
                  </li>
                  <li className="flex items-start justify-center">
                    <span className="text-green-500 flex-shrink-0 me-2">✓</span>
                    <span>אני מבין בדיוק <strong>איך לגרום ללקוחות לראות אותך כמומחה מוביל</strong></span>
                  </li>
                  <li className="flex items-start justify-center">
                    <span className="text-green-500 flex-shrink-0 me-2">✓</span>
                    <span>אני נותן לך <strong>יתרון מוחץ על המתחרים</strong> שלך עם תדמית חזקה</span>
                  </li>
                </ul>
              </div>

              {/* Add standardized CTA */}
              <div className="text-center mt-8">
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-block hover:scale-105 w-[90%] sm:w-auto"
                >
                  רוצה תדמית שמוכרת? השאר פרטים
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
