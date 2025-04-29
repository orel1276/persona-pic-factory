
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const TrustSection = () => {
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

    const element = document.getElementById('trust-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // You can adjust these statistics based on your actual experience
  const stats = [
    { value: "3+", label: "שנות ניסיון" },
    { value: "500+", label: "לקוחות מרוצים" },
    { value: "5,000+", label: "תמונות תדמית" },
    { value: "100%", label: "שביעות רצון" }
  ];

  // Add logo names or image paths here
  const logos = [
    "חברה 1",
    "חברה 2", 
    "חברה 3",
    "חברה 4",
    "חברה 5"
  ];

  return (
    <section
      id="trust-section"
      className="py-16 md:py-20 px-6 bg-[#05152a] mt-12"
    >
      <div className="container mx-auto max-w-4xl">
        <div 
          className={cn(
            "mb-12 text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-4">
            למה אלפי אנשים סומכים עלי?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto px-4">
            תדמית משדרת אמינות, ואני משקיע בכל לקוח כאילו התדמית שלו היא התדמית שלי
          </p>
        </div>

        {/* Stats Counter */}
        <div 
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 transition-all duration-700 delay-200 px-4 md:px-0",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 text-center">
              <div className="text-2xl md:text-4xl font-bold text-sky-400 mb-2">{stat.value}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div 
          className={cn(
            "bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 mb-12 transition-all duration-700 delay-300 mx-4 md:mx-0",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="flex flex-wrap justify-center items-center gap-3">
            <div className="bg-white/10 rounded-full px-4 py-2 text-white/80 text-sm">✓ תשלום מאובטח</div>
            <div className="bg-white/10 rounded-full px-4 py-2 text-white/80 text-sm">✓ דיסקרטיות מלאה</div>
            <div className="bg-white/10 rounded-full px-4 py-2 text-white/80 text-sm">✓ שירות אישי</div>
            <div className="bg-white/10 rounded-full px-4 py-2 text-white/80 text-sm">✓ אחריות מלאה</div>
            <div className="bg-white/10 rounded-full px-4 py-2 text-white/80 text-sm">✓ זמינות 24/7</div>
          </div>
        </div>

        {/* Certifications or Additional Trust Elements */}
        <div 
          className={cn(
            "text-center transition-all duration-700 delay-400 px-4 md:px-0",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p className="text-white/70 text-sm mb-3">
            בעל תעודת מומחה בבניית תדמית דיגיטלית | מוסמך עיצוב תמונה מתקדם | מומחה AI לתמונות
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10"></div>
            <div className="w-8 h-8 rounded-full bg-white/10"></div>
            <div className="w-8 h-8 rounded-full bg-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
