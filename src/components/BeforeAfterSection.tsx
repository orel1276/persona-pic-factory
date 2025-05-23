
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const BeforeAfterSection = () => {
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

    const element = document.getElementById('before-after-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const comparisonItems = [
    {
      before: "תמונות רגילות מהטלפון",
      after: "תמונות תדמית מקצועיות",
      differences: [
        { before: "נראות חובבניות", after: "נראות מקצועיות ואיכותיות" },
        { before: "לא תמיד מחמיאות", after: "ממצבות אותך בזווית הטובה ביותר" },
        { before: "רקע אקראי", after: "רקע מותאם למיתוג שלך" },
        { before: "מתערבבות בהמון", after: "בולטות ומושכות תשומת לב" },
        { before: "לא משדרות סמכותיות", after: "משדרות מקצועיות ובטחון" }
      ]
    },
    {
      before: "צילום סטודיו מקצועי",
      after: "תמונות תדמית AI",
      differences: [
        { before: "זמן המתנה של שבועות", after: "תוצאות תוך 24 שעות" },
        { before: "עלות של אלפי שקלים", after: "עלות נמוכה משמעותית" },
        { before: "צורך בתיאום והגעה לסטודיו", after: "נוח מהבית/משרד" },
        { before: "תוצאה מוגבלת לסט אחד", after: "גמישות לשנות רקע וסגנון" },
        { before: "לחץ וחוסר נוחות בצילום", after: "תהליך קל ונטול לחץ" }
      ]
    }
  ];

  return (
    <section
      id="before-after-section"
      className="py-12 md:py-24 px-4 md:px-6 bg-white mt-8 md:mt-12"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-5 text-primary px-2 md:px-4">
            למה תמונות תדמית שווה הרבה יותר?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto px-2 md:px-4">
            ההבדל בין להיות סתם עוד אחד בשוק, לבין להיות הבחירה המובנת מאליה
          </p>
        </div>

        <div className="space-y-8 md:space-y-12 px-2 md:px-0">
          {comparisonItems.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-lg shadow-lg border border-slate-100 overflow-hidden transition-all duration-700 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {isMobile ? (
                // Mobile layout - stacked with improved UI
                <>
                  {/* Before Column */}
                  <div className="p-5 md:p-8 bg-slate-50 border-b border-slate-100 relative">
                    {/* Mobile hint text for tapping */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs py-1 px-3 rounded-full shadow-md z-10">
                      לחץ לראות אחרי
                    </div>
                    <div className="flex items-center mb-6 justify-center mt-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-200 flex items-center justify-center mr-3 md:mr-4">
                        <span className="text-slate-700 text-xs md:text-sm font-bold">לפני</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-700">{item.before}</h3>
                    </div>
                    <ul className="space-y-3 md:space-y-4">
                      {item.differences.map((diff, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-red-500 mr-2 flex-shrink-0">✕</span>
                          <p className="text-slate-600 text-sm md:text-base">{diff.before}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* After Column */}
                  <div className="p-5 md:p-8 bg-gradient-to-br from-sky-50 to-white">
                    <div className="flex items-center mb-6 justify-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sky-500 flex items-center justify-center mr-3 md:mr-4">
                        <span className="text-white text-xs md:text-sm font-bold">אחרי</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-sky-600">{item.after}</h3>
                    </div>
                    <ul className="space-y-3 md:space-y-4">
                      {item.differences.map((diff, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                          <p className="text-slate-800 text-sm md:text-base">{diff.after}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                // Desktop layout - side by side
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Before Column */}
                  <div className="p-6 md:p-8 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-100">
                    <div className="flex items-center mb-6 justify-center md:justify-start">
                      <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mr-4">
                        <span className="text-slate-700 text-sm font-bold">לפני</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-700">{item.before}</h3>
                    </div>
                    <ul className="space-y-4">
                      {item.differences.map((diff, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-red-500 mr-2">✕</span>
                          <p className="text-slate-600">{diff.before}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* After Column */}
                  <div className="p-6 md:p-8 bg-gradient-to-br from-sky-50 to-white">
                    <div className="flex items-center mb-6 justify-center md:justify-start">
                      <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center mr-4">
                        <span className="text-white text-sm font-bold">אחרי</span>
                      </div>
                      <h3 className="text-xl font-bold text-sky-600">{item.after}</h3>
                    </div>
                    <ul className="space-y-4">
                      {item.differences.map((diff, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <p className="text-slate-800">{diff.after}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12 px-2 md:px-0">
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base md:text-lg w-full md:w-auto min-h-[48px]"
          >
            מוכן לשדרג את התדמית שלך? לחץ כאן
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
