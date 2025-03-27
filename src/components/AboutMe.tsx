
import React, { useEffect, useState, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const AboutMe = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-gray-100" ref={aboutRef}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold relative inline-block text-primary">
            נעים להכיר, אוראל עבייד
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></span>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div 
            className={cn(
              "flex-shrink-0 mb-8 md:mb-0 transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-75 animate-pulse"></div>
              <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-white/10 relative">
                <AvatarImage src="/lovable-uploads/771bc8c8-0b86-4f67-b32f-9c3aa6a84932.png" alt="אוראל עבייד" />
                <AvatarFallback className="text-5xl bg-accent">אע</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div 
            className={cn(
              "text-gray-700 text-lg max-w-2xl transition-all duration-1000 delay-300 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="space-y-6">
              <p>
                בן 33, יוצר דיגיטלי ומומחה לטכנולוגיות בינה מלאכותית. את הקריירה שלי התחלתי כעורך וידאו מקצועי, 
                אך התשוקה שלי לחדשנות הובילה אותי להתמחות בעולם המרתק של ה-AI.
              </p>
              
              <p>
                אני מקדיש את ימיי לחקירה, למידה והתנסות מתמדת בטכנולוגיות החדשניות ביותר בתחום. 
                השילוב הייחודי שלי בין הבנה ויזואלית עמוקה לבין שליטה בכלי AI מתקדמים מאפשר לי ליצור תוכן 
                שלא רק נראה מדהים, אלא גם משרת מטרות שיווקיות ומקצועיות.
              </p>
              
              <p>
                החזון שלי פשוט: להנגיש טכנולוגיה מתקדמת ולאפשר לכל אדם ועסק להציג את עצמו בצורה המקצועית 
                והמרשימה ביותר, ללא הצורך בידע טכני מורכב, השקעת זמן עצומה או הוצאות כספיות גבוהות.
              </p>
              
              <p>
                אני מאמין שהמפגש בין יצירתיות אנושית לבין עוצמת הבינה המלאכותית פותח אפשרויות בלתי מוגבלות, 
                ואני נרגש להיות חלק מהמהפכה הזו ולהעניק לך את היתרונות שהיא מציעה.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
