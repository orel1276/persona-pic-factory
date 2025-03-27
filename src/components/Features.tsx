
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
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

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const features: Feature[] = [
    {
      title: "חיסכון כספי משמעותי",
      description: "חסוך אלפי שקלים על צילומי סטודיו, צלם מקצועי, תאורה ועוד. קבל תוצאות מעולות במחיר נמוך משמעותית.",
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
      title: "חיסכון בזמן יקר",
      description: "שכח מהצורך לתאם צילומים, להגיע לסטודיו, לעבור הכנות ארוכות. פשוט שלח תמונות קיימות וקבל תוצאות מהירות.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      title: "תוצאות מקצועיות",
      description: "בזכות הטכנולוגיה המתקדמת של הבינה המלאכותית, התוצאות שלנו עומדות בסטנדרטים הגבוהים ביותר ולא נופלות מצילום מקצועי.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    },
    {
      title: "אפשרויות מגוונות",
      description: "אין צורך להסתפק בסט תמונות אחד. קבל מגוון רחב של אפשרויות, רקעים, תנוחות ועוד, כדי למצוא את התמונה המושלמת.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="15" y1="3" x2="15" y2="21"></line>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="3" y1="15" x2="21" y2="15"></line>
        </svg>
      )
    },
    {
      title: "דיסקרטיות מלאה",
      description: "כל התמונות והמידע שלך מטופלים בדיסקרטיות מוחלטת. אנחנו לא משתמשים בתמונות שלך לשום מטרה אחרת ללא אישורך.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    {
      title: "התאמה אישית",
      description: "המודל מאומן על התמונות האישיות שלך, מה שמבטיח תוצאה אותנטית שמשקפת את המראה האמיתי שלך בגרסה המיטבית.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    }
  ];

  return (
    <section id="יתרונות" className="py-24 bg-white">
      <div className="container mx-auto px-6" ref={featuresRef}>
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium">
              למה לבחור בנו?
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            היתרונות של תמונות תדמית מבוססות בינה מלאכותית
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            אנחנו משלבים טכנולוגיה חדשנית עם הבנה מעמיקה של צילום מקצועי כדי לספק לך את התוצאות הטובות ביותר
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-xl p-8 transition-all duration-700 transform shadow-lg border border-gray-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                isVisible && `transition-delay-${index * 100}`
              )}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                animationDelay: `${index * 100}ms` 
              }}
            >
              <div className="text-primary mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-12">
        <a 
          href="#צור-קשר" 
          className="neon-button inline-block"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById("צור-קשר");
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          תיצור לי אלבום עכשיו
        </a>
      </div>
    </section>
  );
};

export default Features;
