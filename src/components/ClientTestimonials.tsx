
import React, { useEffect, useRef, useState } from 'react';
import TestimonialCard from './testimonials/TestimonialCard';
import { useIsMobile } from '@/hooks/use-mobile';

const ClientTestimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      messages: [
        {
          text: "תקשיב, אני לא מפסיק לקבל תגובות על התמונות!\nזה מטורף כמה תדמית יכולה להשתנות מתמונה אחת טובה.\nאנשים שואלים איפה צילמתי, והכי כיף שזה באמת אני – בלי פוזות מיותרות.\nתודה רבה על העבודה המטורפת והתוצאה שהרבה מעבר למה שציפיתי 🙏🏼",
          time: "14:26"
        }
      ]
    },
    {
      messages: [
        {
          text: "וואלה, בהתחלה לא האמנתי שזה ייצא כזה רמה.\nשלחתי תמונות פשוטות מהטלפון — ויצאה תוצאה שנראית מיליון דולר.\nהשירות היה מהיר, מקצועי, בלי כאב ראש, ועם תוצאה שמדברת בעד עצמה.\nתודה אלופים 🙌🏼 ממליץ לכולם!",
          time: "15:18"
        }
      ]
    },
    {
      messages: [
        {
          text: "אני חייב לפרגן — אין דברים כאלה.\nמרגע שהעליתי את התמונות לאוויר, קיבלתי פניות וביקורות מעולות.\nזה באמת משנה איך שאתה נראה בעיני אחרים.\nתודה על שירות ברמה הגבוהה ביותר ועל סבלנות אין קץ ❤️",
          time: "16:04"
        }
      ]
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="py-20 px-6 relative overflow-hidden bg-[#111B21]"
      ref={testimonialsRef}
      dir="rtl"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            הלקוחות של <span className="neon-text-blue">Film</span><span className="neon-text-pink">Kal</span> משתפים
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
