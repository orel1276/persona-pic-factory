
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface WhatsAppMessage {
  content: string;
  time: string;
  isRight?: boolean;
}

const ClientTestimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialSets.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const testimonialSets = [
    [
      { content: "תודה רבה, התמונות יצאו מדהימות! אני בהלם כמה הן נראות טבעיות ומקצועיות", time: "17:43", isRight: false },
      { content: "שמח שאתה מרוצה! שלחת לי תמונות איכותיות וזה עזר מאוד לתוצאה סופית", time: "17:45" },
      { content: "אני הולך להשתמש בזה לפרופיל לינקדאין שלי, זה ישדרג אותו משמעותית 💯", time: "17:48", isRight: false },
    ],
    [
      { content: "וואו, לא האמנתי שאפשר להגיע לתוצאות כאלה! פשוט מדהים 😮", time: "12:32", isRight: false },
      { content: "אלה תמונות שהייתי צריך לשלם אלפי שקלים לצלם עבורן", time: "12:33", isRight: false },
      { content: "תודה על המחמאה! מטרתי היא להביא לך תוצאות ברמה של סטודיו מקצועי 👍", time: "12:35" },
    ],
    [
      { content: "הלקוחות שלי בארץ ובחו\"ל התלהבו מהתמונות החדשות באתר. ממליצה לכל בעל עסק!", time: "19:21", isRight: false },
      { content: "מעולה! תמונות טובות יכולות להגדיל משמעותית את אחוזי ההמרה", time: "19:22" },
      { content: "בהחלט, כבר ראיתי עלייה בפניות מאז שהחלפתי את התמונות 🔥", time: "19:24", isRight: false },
    ],
    [
      { content: "הזמנתי את האלבום לבן שלי שמחפש עבודה, הוא ממש התרגש כשקיבל את התמונות", time: "21:15", isRight: false },
      { content: "שמח לשמוע! זה בדיוק הסיבה שאני עושה את זה - לעזור לאנשים להציג את עצמם בצורה הטובה ביותר", time: "21:18" },
      { content: "בטח אפנה אליך עוד אנשים, השירות הוא פשוט 10/10", time: "21:20", isRight: false },
    ],
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-background" ref={testimonialsRef}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            חוויות אמיתיות
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="neon-text-pink">לקוחות </span>
            <span className="neon-text-blue">משתפים</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            הנה מה שלקוחותינו האמיתיים אומרים על התמונות שיצרנו עבורם
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(${currentIndex * 100}%)` }}
          >
            {testimonialSets.map((messages, setIndex) => (
              <div 
                key={setIndex}
                className="min-w-full px-4"
              >
                <div className="bg-[#ECE5DD] rounded-lg p-6 max-w-2xl mx-auto">
                  <div className="bg-[#128C7E] text-white text-center py-2 rounded-t-lg -mt-6 -mx-6 mb-4">
                    <h4 className="font-medium">WhatsApp</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {messages.map((message, idx) => (
                      <div 
                        key={idx} 
                        className={`flex ${message.isRight ? 'justify-start' : 'justify-end'}`}
                      >
                        <div 
                          className={cn(
                            "max-w-xs md:max-w-sm rounded-lg p-3 relative",
                            message.isRight 
                              ? "bg-white text-gray-800 rounded-tr-none" 
                              : "bg-[#DCF8C6] text-gray-800 rounded-tl-none"
                          )}
                        >
                          <p className="text-sm md:text-base">{message.content}</p>
                          <span className="text-[10px] text-gray-500 block text-right mt-1">{message.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonialSets.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === idx ? 'bg-primary' : 'bg-white/30'
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
