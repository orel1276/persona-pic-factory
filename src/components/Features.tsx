
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
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

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
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

  const features: Feature[] = [
    {
      title: "תוצאה אמיתית – כאילו צולמת בסטודיו",
      description: "בזכות טכנולוגיה מתקדמת, התמונות ייראו טבעיות, אמינות ומקצועיות – מבלי להרגיש שהן נוצרו בקליק.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    },
    {
      title: "חיסכון אדיר בזמן וכסף",
      description: "בלי סטודיו, בלי עמידות בתורים ובלי הוצאות מיותרות. תוצאה מרשימה – במהירות ובעלות נוחה.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
          <line x1="12" y1="6" x2="12" y2="8"></line>
          <line x1="12" y1="16" x2="12" y2="18"></line>
        </svg>
      )
    },
    {
      title: "תדמית שמחוברת אליך באמת",
      description: "התמונות מותאמות אישית – משקפות בדיוק את מי שאתה ומה שאתה רוצה לשדר: ביטחון, חום, מקצועיות או אמינות.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      title: "אבטחת פרטיות מלאה",
      description: "כל החומרים שלך נשמרים בדיסקרטיות מוחלטת. התמונות שלך הן שלך בלבד, ללא שימוש חוזר.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="יתרונות" className="py-16 md:py-24 px-6 bg-white">
      <div className="container mx-auto" ref={featuresRef}>
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium">
              למה לבחור בנו?
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-5 md:mb-6 px-2 leading-tight">
            תדמית מקצועית, זמינה ומהירה – מבלי לקום מהכיסא
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto px-2">
            שילוב חכם של בינה מלאכותית ומגע אישי – כדי להוציא ממך את הגרסה הכי מרשימה שלך, בלי סטודיו, בלי ימי צילום, ובלי לקרוע את הכיס.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-xl p-6 md:p-8 transition-all duration-700 transform shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-xl h-full",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
              )}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                animationDelay: `${index * 100}ms` 
              }}
            >
              <div className="text-sky-500 mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-12 md:mt-16">
        <a 
          href="#צור-קשר" 
          className="bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-block hover:scale-105 w-[90%] sm:w-auto"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("צור-קשר");
          }}
        >
          בוא נדבר על התמונה שלך
        </a>
      </div>
    </section>
  );
};

export default Features;
