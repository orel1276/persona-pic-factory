
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

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

    const element = document.getElementById('about-me-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-me-section"
      className="py-16 md:py-24 px-6 bg-[#05152a]"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          {/* Main heading with updated text */}
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 text-pink-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            נעים מאוד אני אוראל עבייד - ואני הופך אנשים רגילים לפצצות תדמית
          </h2>
          
          {/* Subheading */}
          <p 
            className={cn(
              "text-lg text-white/90 mb-10 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            אני לא סתם "עורך תמונות" - אני יוצר נראות שמושכת לקוחות
          </p>

          {/* Profile image */}
          <div 
            className={cn(
              "mb-10 transition-all duration-700 delay-200",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          >
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-pink-500/30 shadow-xl relative">
              <div className="absolute inset-0 rounded-full border-8 border-pink-500/20"></div>
              <img 
                src="/lovable-uploads/be0497d4-c0af-40ca-a705-0db1d3b0ef85.png"
                alt="אוראל - מומחה תדמית"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main content - Removed the repeated line */}
          <div className="space-y-6 max-w-2xl mx-auto">
            <p 
              className={cn(
                "text-lg text-white/90 transition-all duration-700 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              אני יוצר לאנשים תמונות שמוכרות את עצמן – בלי צורך בסטודיו יקר, ציוד מסובך, או צילומים מעיקים. אתה פשוט שולח לי תמונות רגילות מהטלפון.
            </p>
            
            <p 
              className={cn(
                "text-lg text-white/90 transition-all duration-700 delay-400",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              בזכות שילוב של ניסיון בעיצוב ובינה מלאכותית מתקדמת, אני יודע בדיוק איך להפוך את התמונות שלך לתמונות מקצועיות שמושכות עיניים. התוצאה? תדמית חדשה שגורמת ללקוחות לרצות לעבוד איתך.
            </p>

            {/* Call to action section */}
            <div 
              className={cn(
                "mt-10 p-8 bg-[#0c1f3d] rounded-xl border border-white/5 transition-all duration-700 delay-600",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <h3 className="text-2xl font-bold text-pink-500 mb-4">למה כדאי לך לעבוד איתי?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <p className="text-white/90">אני לא עורך תמונות, אני מעצב תדמית מנצחת</p>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <p className="text-white/90">אני מבין בדיוק איך לגרום ללקוחות לראות אותך כמומחה מוביל</p>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <p className="text-white/90">אני נותן לך יתרון מוחץ על המתחרים שלך עם תדמית חזקה</p>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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

export default AIMarketingSection;
