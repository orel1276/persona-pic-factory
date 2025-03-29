
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

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

    return () => {
      observer.disconnect();
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      messages: [
        { text: "היי, איך התמונות החדשות שלך? כבר משתמש בהן?", isUser: false, time: "12:20" },
        { text: "וואו, התמונות מדהימות! סוף סוף יש לי תמונת פרופיל מקצועית 🔥", isUser: true, time: "12:22" }
      ],
      author: "רחל",
      position: "יועצת תדמית",
      avatar: "https://i.pravatar.cc/150?img=68"
    },
    {
      id: 2,
      messages: [
        { text: "זה המחיר הסופי? כולל הכל?", isUser: false, time: "17:45" },
        { text: "כן, והתוצאה שווה כל שקל! 👌 ממליץ בחום", isUser: true, time: "17:46" }
      ],
      author: "יוסי",
      position: "איש עסקים",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
      id: 3,
      messages: [
        { text: "רציתי להגיד תודה! קיבלתי המון תגובות חיוביות על תמונות הפרופיל החדשות 😊", isUser: true, time: "9:30" },
        { text: "שמח לשמוע! זו בדיוק המטרה שלנו", isUser: false, time: "9:32" }
      ],
      author: "מיכל",
      position: "מאמנת עסקית",
      avatar: "https://i.pravatar.cc/150?img=44"
    },
    {
      id: 4,
      messages: [
        { text: "אין מילים. האתר שלי נראה אחר לגמרי עם התמונות החדשות של המוצרים 🤩", isUser: true, time: "16:15" },
        { text: "אשתף את זה עם כל מי שאני מכיר 👍", isUser: true, time: "16:16" }
      ],
      author: "דני",
      position: "יזם",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    {
      id: 5,
      messages: [
        { text: "העלית את התמונות החדשות לאתר?", isUser: false, time: "20:20" },
        { text: "כן, וכבר קיבלתי 3 לקוחות חדשים תוך יומיים! תודה ענקית 🙏", isUser: true, time: "20:23" }
      ],
      author: "נועה",
      position: "מעצבת גרפית",
      avatar: "https://i.pravatar.cc/150?img=23"
    }
  ];

  const ChatBubble = ({ text, isUser, time }: { text: string, isUser: boolean, time: string }) => (
    <div className={`${isUser ? 'ml-auto bg-[#DCF8C6]' : 'mr-auto bg-white'} rounded-lg p-3 mb-2 max-w-[80%]`}>
      <p className="text-sm">{text}</p>
      <span className="text-xs text-gray-500 block text-right">{time}</span>
    </div>
  );

  const WhatsAppCard = ({ testimonial, className }: { testimonial: typeof testimonials[0], className?: string }) => (
    <div className={cn("bg-[#E5DDD5] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl", className)}>
      <div className="bg-[#00A884] text-white p-3">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white rounded-full mr-2 overflow-hidden">
            <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-medium">{testimonial.author}</p>
            <p className="text-xs opacity-90">{testimonial.position}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        {testimonial.messages.map((message, idx) => (
          <ChatBubble 
            key={idx} 
            text={message.text} 
            isUser={message.isUser} 
            time={message.time} 
          />
        ))}
      </div>
    </div>
  );

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
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary neon-text-pink">
            לקוחות משתפים:
          </h2>
        </div>

        {isMobile ? (
          <div className="relative mt-8 overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex space-x-4 px-4" style={{ direction: 'ltr' }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-shrink-0 w-[80vw] max-w-xs">
                  <WhatsAppCard testimonial={testimonial} />
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-4 pointer-events-none bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        ) : (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <WhatsAppCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-2 mt-8">
              <CarouselPrevious className="static transform-none mx-2 bg-primary hover:bg-primary/80 text-white border-none" />
              <CarouselNext className="static transform-none mx-2 bg-primary hover:bg-primary/80 text-white border-none" />
            </div>
          </Carousel>
        )}
      </div>
      
      {/* Subtle animation patterns for background effect */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-repeat opacity-5"
             style={{
               backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48cGF0aCBkPSJNMywxN2MzNy41LDAsNTctMTQsOTQtMTR2MTRIMTdWODJjMzcuNSwwLDU3LTE0LDk0LTE0djE0SDE3djY1YzM3LjUsMCw1Ny0xNCw5NC0xNHYxNEgzVjE3eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')"
             }}></div>
      </div>
      
      {/* Add animated floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
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
