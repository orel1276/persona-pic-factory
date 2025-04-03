
import React, { useEffect, useState, useRef } from 'react';
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
          <h2 className="text-4xl font-bold text-primary">
            נעים להכיר, אוראל עבייד
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div 
            className={cn(
              "flex-shrink-0 mb-8 md:mb-0 transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            {/* Adjusted circle and image for better proportions */}
            <div className="relative w-72 h-72">
              {/* Neon gradient circle background with enhanced glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_30px_rgba(255,0,150,0.7)]"></div>
              
              {/* Person image - adjusted positioning for better proportions */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <img 
                  src="/lovable-uploads/1fe94a47-e803-45e8-a676-8b8a651a7fbf.png" 
                  alt="אוראל עבייד" 
                  className="object-cover w-full h-full"
                  style={{ 
                    objectPosition: "center 15%",
                    transform: "scale(1.1)"
                  }}
                />
              </div>
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
