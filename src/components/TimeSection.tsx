
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const TimeSection = () => {
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

    const element = document.getElementById('time-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="time-section"
      className="py-16 md:py-24 px-6 bg-background"
    >
      <div className="container mx-auto max-w-4xl text-center">
        {/* Main Title */}
        <h2 
          className={cn(
            "text-3xl md:text-4xl font-bold text-primary mb-6 transition-all duration-700 leading-snug",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          הזמן שלך שווה הרבה יותר – בוא ננצל אותו נכון.
        </h2>

        {/* Supporting Text */}
        <p 
          className={cn(
            "text-lg md:text-xl text-muted-foreground mb-12 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          תדמית מקצועית ונכונה יכולה לחסוך לך שעות ולהכניס לקוחות מהר יותר.
        </p>

        {/* Benefits List */}
        <div 
          className={cn(
            "space-y-4 mb-12 max-w-2xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {[
            "תוצאה שתגרום ללקוחות להרגיש ביטחון כבר מהשנייה הראשונה.",
            "חיסכון אדיר בזמן, באנרגיות ובכאב ראש.",
            "תהליך מהיר, מדויק, פשוט וברור – בלי עקומות למידה.",
            "תדמית מנצחת שמושכת לקוחות איכותיים יותר."
          ].map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 text-right"
            >
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-lg text-foreground/90">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div 
          className={cn(
            "transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Button 
            className="w-[90%] sm:w-[80%] md:w-auto text-lg py-6 px-8"
            size="lg"
          >
            התחל לשדרג את התדמית שלך
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TimeSection;
