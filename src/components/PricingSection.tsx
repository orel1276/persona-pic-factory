
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface PricingPlan {
  title: string;
  subtitle: string;
  originalPrice: number;
  discountedPrice: number;
  features: string[];
  buttonText: string;
  recommended?: boolean;
  buttonVariant: 'blue' | 'pink';
}

const PricingSection = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
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
      subtitle: "להפוך אותך למגנט ללקוחות",
      originalPrice: 349,
      discountedPrice: 249,
      features: [
        "10 תמונות תדמית מקצועיות",
        "התאמה אישית לסגנון שלך",
        "קבלת התוצאה תוך 24 שעות",
        "רישיון מלא לשימוש",
        "ליווי אישי לאורך כל התהליך",
        "מגוון רקעים מקצועיים",
        "תיקון ראשון חינם"
      ],
      buttonText: "בוא ניצור את האלבום האישי שלך",
      buttonVariant: 'pink'
    },
    {
      title: "אלבום למוצר ומותג",
      subtitle: "לשדרג את העסק שלך למובילות",
      originalPrice: 449,
      discountedPrice: 349,
      features: [
        "10 תמונות מותג מקצועיות",
        "התאמה מלאה לזהות המותג",
        "קבלת התוצאה תוך 24 שעות",
        "רישיון מסחרי מלא",
        "ליווי אישי לאורך התהליך",
        "מגוון רקעים עסקיים",
        "תיקונים ללא הגבלה"
      ],
      buttonText: "התחל ליצור אלבום למותג שלך",
      recommended: true,
      buttonVariant: 'blue'
    }
  ];

  return (
    <section id="תמחור" className="py-20 md:py-24 px-6 bg-gradient-to-b from-white to-gray-50" ref={pricingRef}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 md:mb-6 text-sky-500">
            כמה שווה להשקיע בעצמך?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            בחר את התוכנית שמתאימה לך – ותן לעולם לראות את הגרסה הכי טובה שלך
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-2xl overflow-hidden transition-all duration-700 transform bg-white shadow-lg hover:shadow-xl border border-gray-100",
                plan.recommended 
                  ? "border-primary/10" 
                  : "border-gray-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              )}
              style={{ 
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms',
              }}
            >
              {plan.recommended && (
                <div className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white text-center py-2">
                  <p className="text-sm font-medium">הבחירה המועדפת של הלקוחות שלנו</p>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-5 md:mb-6">{plan.subtitle}</p>
                
                <div className="mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-gray-900">₪{plan.discountedPrice}</span>
                  <span className="text-gray-400 line-through mr-2">₪{plan.originalPrice}</span>
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded mr-2">מבצע מיוחד</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => scrollToSection("צור-קשר")}
                  className={cn(
                    "w-full py-3 md:py-4 rounded-full font-medium text-white transition-all hover:scale-[1.02] shadow-lg",
                    plan.buttonVariant === 'blue' 
                      ? "bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500" 
                      : "bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500"
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
