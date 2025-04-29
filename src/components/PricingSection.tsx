
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

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

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const redirectToPayment = () => {
    navigate("/payment"); 
  };

  return (
    <section id="תמחור" className="py-20 md:py-24 px-6 bg-background" ref={pricingRef}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 md:mb-6 text-primary">
            כמה שווה להיראות כמו מותג?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            בחר את התדמית שמגיעה לך – ותמיד תיראה כמו הגרסה הכי טובה שלך.
          </p>
        </div>

        {/* Single Card Design */}
        <div 
          className={cn(
            "max-w-2xl mx-auto rounded-2xl overflow-hidden transition-all duration-700 transform bg-slate-800/60 shadow-xl border border-border/50",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
          {/* Featured Tag */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-slate-800 text-center py-2 px-4 font-medium text-sm">
            מחיר היכרות - לזמן מוגבל בלבד
          </div>
          
          <div className="p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">החבילה המלאה לתדמית שמוכרת</h3>
            <p className="text-foreground/80 mb-6">כל מה שצריך כדי להיראות כמו מומחה – בלי צלם, בלי סטודיו, בלי מאמץ.</p>
            
            <div className="mb-8 flex flex-col md:flex-row md:items-end gap-2 md:gap-4">
              <div className="flex items-center">
                <span className="text-foreground/40 line-through text-xl md:text-2xl">₪549</span>
                <div className="w-12 h-[2px] bg-gradient-to-r from-red-500 to-transparent mx-2 rotate-[-15deg]"></div>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold text-primary">₪349 בלבד</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground/90">10 תמונות AI מרהיבות</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground/90">התאמה אישית למיתוג שלך</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground/90">קבלת תוצאה תוך 24 שעות</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground/90">דיסקרטיות מלאה</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground/90">מודל AI שנבנה במיוחד עבורך</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground/90">תיקונים חופשיים לפי הצורך</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground/90">ליווי אישי לאורך התהליך</span>
              </div>
            </div>
            
            <button
              onClick={redirectToPayment}
              className="w-full py-4 rounded-full font-bold text-white text-xl transition-all hover:scale-[1.02] shadow-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700"
            >
              רוצה להיראות כמו מותג? לחץ כאן לרכישה
            </button>
            
            <p className="text-foreground/60 text-sm mt-4 text-center">
              זה לא המחיר שאתה משלם על תמונה – זה המחיר שאתה משלם על איך שרואים אותך.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
