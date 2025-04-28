
import React, { useEffect, useRef, useState } from 'react';
import TestimonialCard from './testimonials/TestimonialCard';

const ClientTestimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "מאיה",
      position: "יועצת עסקית",
      messages: [
        {
          text: "יא אלופה! אני לא מאמינה מה עשית מהתמונות ששלחתי.\nבאמת שלא ציפיתי שזה ייראה ככה... כאילו סטודיו של אלפי שקלים.\nהצלחת אחי! תודה ענקית 🙏🏼",
          time: "14:22"
        }
      ],
      avatar: "https://i.pravatar.cc/150?img=44"
    },
    {
      name: "ניר",
      position: "בעל עסק לשיווק דיגיטלי",
      messages: [
        {
          text: "שמע, לא האמנתי שאפשר להוציא משהו כזה מתמונות מהטלפון.\nנראה מיליון דולר!\nכבר העליתי את זה לפייסבוק והתגובות עפו.",
          time: "15:45"
        }
      ],
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "אודליה",
      position: "מאמנת כושר",
      messages: [
        {
          text: "איזה תוצאה מטורפת!!\nהלקוחות ישר שאלו איפה צילמתי את זה חחח 😅\nתודה על השירות המהיר והמטורף, ממליצה עליך לכולם!",
          time: "16:30"
        }
      ],
      avatar: "https://i.pravatar.cc/150?img=28"
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="py-20 relative overflow-hidden bg-gray-50"
      ref={testimonialsRef}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-20">
          {/* Small header with turquoise background */}
          <div className="inline-block bg-[#00f0ff]/10 rounded-full px-4 py-1.5 mb-8">
            <span className="text-sm md:text-base font-medium text-[#00f0ff]">
              חוויות מהתמונות החדשות
            </span>
          </div>

          {/* Main title */}
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6 text-center max-w-3xl">
            מה הלקוחות שלנו אומרים אחרי השדרוג
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground text-center max-w-2xl">
            תגובות אמיתיות מאנשים שעברו שינוי בתדמית ובביטחון
          </p>
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
