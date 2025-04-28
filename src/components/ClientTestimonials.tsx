
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            מה הלקוחות שלנו אומרים
          </h2>
          <p className="text-muted-foreground text-lg">
            תגובות אמיתיות אחרי שקיבלו את התמונות החדשות
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
