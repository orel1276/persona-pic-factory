
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

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
          text: "יא אלוף! אני לא מאמינה מה עשית מהתמונות ששלחתי.\nבאמת שלא ציפיתי שזה ייראה ככה... כאילו סטודיו של אלפי שקלים.\nהצלת אותי! תודה ענקית 🙏🏼",
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
      avatar: "https://i.pravatar.cc/150?img=32"
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

  const WhatsAppBubble = ({ text, time }: { text: string, time: string }) => (
    <div className="bg-[#E7FFE1] rounded-lg p-4 mb-2 max-w-[85%] mr-auto relative">
      <p className="text-[#111B21] whitespace-pre-line text-base">{text}</p>
      <span className="text-xs text-gray-500 block text-right mt-1">{time}</span>
    </div>
  );

  return (
    <section 
      id="testimonials" 
      className="py-20 relative overflow-hidden bg-gray-50"
      ref={testimonialsRef}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            הלקוחות שלנו מספרים
          </h2>
          <p className="text-gray-600 text-lg">
            מה אנשים אומרים על השירות שלנו
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* WhatsApp-like header */}
              <div className="bg-[#075E54] text-white p-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm opacity-90">{testimonial.position}</p>
                  </div>
                </div>
              </div>
              
              {/* Messages area */}
              <div className="p-4 bg-[#E5DDD5]">
                {testimonial.messages.map((message, idx) => (
                  <WhatsAppBubble 
                    key={idx}
                    text={message.text}
                    time={message.time}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
