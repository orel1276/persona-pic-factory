
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
  bestValue?: boolean;
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
      subtitle: "להפוך אותך למגנט של לקוחות",
      originalPrice: 349,
      discountedPrice: 249,
      features: [
        "10 תמונות תדמית שמושכות לקוחות",
        "מגוון רקעים שמשדרים מקצועיות",
        "מודל AI בהתאמה אישית רק לך",
        "קבלת תוצאות תוך 24 שעות בדיוק",
        "רישיון לשימוש אישי ומקצועי",
        "איכות גבוהה לכל פלטפורמה",
        "תיקון ראשון חינם - אם לא תהיה מרוצה ב-100%"
      ],
      buttonText: "אני רוצה להפוך למגנט של לקוחות"
    },
    {
      title: "אלבום למוצר ומותג",
      subtitle: "לשדרג את העסק שלך למובילות",
      originalPrice: 449,
      discountedPrice: 349,
      features: [
        "10 תמונות מותג שמוכרות בלי מילים",
        "התאמה לזהות המותג שיוצרת עקביות",
        "מודל ייעודי שמבין את המוצר שלך",
        "רישיון מסחרי מלא - בלי הגבלות",
        "תוצאות תוך 24 שעות שמשנות את המשחק",
        "ליווי אישי לאורך כל התהליך"
      ],
      buttonText: "קח את העסק שלי לשלב הבא",
      recommended: true,
      bestValue: true
    }
  ];

  return (
    <section id="תמחור" className="py-24 px-6 bg-white" ref={pricingRef}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            מחירים מיוחדים לזמן מוגבל
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-sky-500">תהיה כנה עם עצמך - </span>
            <span className="text-primary">כמה לקוחות אחד שווה לך?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            אם תדמית טובה יותר תביא לך אפילו לקוח אחד נוסף, ההשקעה הזו כבר החזירה את עצמה פי 10
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-2xl overflow-hidden transition-all duration-700 transform shadow-lg border relative",
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
                  <p className="text-sm font-medium">הבחירה של רוב הלקוחות שלנו</p>
                </div>
              )}
              
              {plan.bestValue && (
                <div className="absolute top-4 right-4 bg-yellow-500 text-black py-1 px-3 rounded-full text-sm font-bold z-10 transform rotate-12">
                  ROI מטורף
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-6">{plan.subtitle}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">₪{plan.discountedPrice}</span>
                  <span className="text-gray-400 line-through mr-2">₪{plan.originalPrice}</span>
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded mr-2">מבצע בלעדי</span>
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
                      ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-black shadow-lg hover:shadow-xl" 
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
