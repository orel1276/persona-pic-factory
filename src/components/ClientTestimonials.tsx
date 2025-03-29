
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const ClientTestimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // מעקב אחרי גלילה לסקשן
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

  // נתוני העדויות
  const testimonials = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "וואו, התמונות מדהימות! סוף סוף יש לי תמונת פרופיל מקצועית שמייצגת אותי נכון. השירות היה מהיר והתוצאות היו הרבה מעבר למה שציפיתי.",
      author: "רחל, יועצת תדמית"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "אני יכול להגיד בוודאות שהתמונות החדשות שיפרו את הנוכחות העסקית שלי. אנשים מגיבים יותר לפוסטים שלי וקיבלתי המון פניות חדשות.",
      author: "יוסי, איש עסקים"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1611162616305-c69587195d3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "לא האמנתי שאפשר להגיע לתוצאות כאלה בלי צלם מקצועי. חסכתי זמן יקר וקיבלתי תמונות שהרימו את הפרופיל המקצועי שלי לגמרי. ממליצה בחום!",
      author: "מיכל, מאמנת עסקית"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1611162616475-b1a91bde599a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "אין מילים. האתר שלי נראה אחר לגמרי עם התמונות החדשות של המוצרים. אשתף את זה עם כל מי שאני מכיר.",
      author: "דני, יזם"
    }
  ];

  // פונקציות ניווט
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      id="testimonials" 
      className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden"
      style={{ 
        background: "linear-gradient(135deg, hsl(var(--primary)/0.1) 0%, hsl(var(--secondary)/0.1) 100%)"
      }}
      ref={testimonialsRef}
      dir="rtl"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary neon-text-pink">
            לקוחות משתפים
          </h2>
        </div>

        <div 
          className={cn(
            "max-w-3xl mx-auto relative rounded-xl overflow-hidden shadow-xl bg-white",
            isVisible ? "opacity-100" : "opacity-0",
            "transition-opacity duration-1000"
          )}
        >
          {/* כפתורי ניווט */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
            aria-label="הקודם"
          >
            &#10094;
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
            aria-label="הבא"
          >
            &#10095;
          </button>
          
          {/* מעטפת הסליידר */}
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full p-6 md:p-8">
                <div className="flex flex-col items-center">
                  <img 
                    src={testimonial.image} 
                    alt={`עדות מ${testimonial.author}`} 
                    className="w-full max-w-2xl h-auto rounded-lg shadow-lg mb-6 object-cover"
                  />
                  <p className="text-muted-foreground text-base md:text-lg mb-4 text-center max-w-2xl">
                    "{testimonial.text}"
                  </p>
                  <p className="font-bold text-primary">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* נקודות ניווט */}
          <div className="flex justify-center py-4 bg-white">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 mx-1 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-primary scale-125" 
                    : "bg-muted hover:bg-muted-foreground/50"
                )}
                aria-label={`עבור לעדות ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* אלמנטים דקורטיביים */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              backgroundColor: `hsl(var(--${Math.random() > 0.5 ? 'primary' : 'secondary'})/${Math.random() * 0.3 + 0.1})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
