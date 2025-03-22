
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  image: string;
}

const Testimonials = () => {
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

    return () => {
      observer.disconnect();
    };
  }, []);

  const testimonials: Testimonial[] = [
    {
      quote: "שירות מדהים! קיבלתי תמונות תדמית באיכות סטודיו שלא הייתי מצליח להשיג אפילו בצילום מקצועי יקר. התהליך היה פשוט והתוצאות היו הרבה מעבר למה שציפיתי.",
      author: "יובל כהן",
      position: "מנכ\"ל, חברת טכנולוגיה",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f"
    },
    {
      quote: "בתור יועצת תדמית, אני ממליצה ללקוחות שלי על השירות הזה כל הזמן. התמונות מדהימות, מקצועיות ונראות אותנטיות לחלוטין. שווה כל שקל!",
      author: "מיכל לוי",
      position: "יועצת תדמית ומיתוג אישי",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    },
    {
      quote: "לא האמנתי שאפשר להגיע לתוצאות כאלה בלי צלם מקצועי. חסכתי זמן יקר וקיבלתי תמונות שהרימו את הפרופיל המקצועי שלי לגמרי. תודה רבה!",
      author: "אמיר גולן",
      position: "עורך דין ושותף בכיר",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    }
  ];

  return (
    <section id="עדויות" className="py-24 bg-secondary">
      <div className="container mx-auto px-6" ref={testimonialsRef}>
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            מה לקוחותינו אומרים
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            עדויות מלקוחות מרוצים
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ראה מה אומרים לקוחות שכבר התנסו בשירות שלנו והשתמשו בתמונות התדמית המקצועיות שיצרנו
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-xl p-8 shadow-lg transition-all duration-700 transform hover:shadow-xl hover:-translate-y-1",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              )}
              style={{ transitionDelay: isVisible ? `${index * 200}ms` : '0ms' }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  {/* Quote icon */}
                  <svg className="w-10 h-10 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z" />
                  </svg>
                  <p className="text-muted-foreground leading-relaxed">{testimonial.quote}</p>
                </div>
                
                <div className="mt-auto flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
