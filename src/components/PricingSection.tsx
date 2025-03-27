
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface PricingPlan {
  title: string;
  subtitle: string;
  originalPrice: number;
  discountedPrice: number;
  features: string[];
  buttonText: string;
  recommended?: boolean;
}

const PricingSection = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
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

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
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

  const pricingPlans: PricingPlan[] = [
    {
      title: "אלבום תדמית אישי",
      subtitle: "לאנשים פרטיים",
      originalPrice: 349,
      discountedPrice: 249,
      features: [
        "10-15 תמונות תדמית באיכות סטודיו",
        "מגוון רקעים וסגנונות",
        "אימון מודל AI על התמונות שלך",
        "קבלת התמונות תוך 48 שעות",
        "שימוש אישי ומקצועי",
        "פורמט באיכות גבוהה"
      ],
      buttonText: "תיצור לי אלבום עכשיו"
    },
    {
      title: "אלבום למוצר ומותג",
      subtitle: "לבעלי עסקים",
      originalPrice: 449,
      discountedPrice: 349,
      features: [
        "15-20 תמונות למוצר או מותג",
        "התאמה לזהות המותג שלך",
        "אימון מודל ייעודי למוצר שלך",
        "רישיון שימוש מסחרי מלא",
        "קבלת התמונות תוך 48 שעות",
        "ייעוץ שיווקי בסיסי בחינם"
      ],
      buttonText: "בואו נתחיל",
      recommended: true
    }
  ];

  return (
    <section id="תמחור" className="py-24 px-6 bg-white" ref={pricingRef}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            מחירים מיוחדים לתקופת ההיכרות
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="neon-text-pink">מחירון </span>
            <span className="neon-text-blue">שירותים</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            בחר את החבילה המתאימה לך ותתחיל להופיע בצורה המקצועית ביותר
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-2xl overflow-hidden transition-all duration-700 transform shadow-lg border",
                plan.recommended 
                  ? "border-primary/30 shadow-primary/10" 
                  : "border-gray-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              )}
              style={{ 
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms',
              }}
            >
              {plan.recommended && (
                <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-2">
                  <p className="text-sm font-medium">החבילה הפופולרית ביותר</p>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-6">{plan.subtitle}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">₪{plan.discountedPrice}</span>
                  <span className="text-gray-400 line-through mr-2">₪{plan.originalPrice}</span>
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded mr-2">מחיר היכרות</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => scrollToSection("צור-קשר")}
                  className={cn(
                    "w-full py-3 rounded-lg font-medium transition-all",
                    plan.recommended 
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl" 
                      : "bg-white border-2 border-primary text-primary hover:bg-primary/5"
                  )}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
