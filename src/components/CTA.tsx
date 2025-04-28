
import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ContactForm } from './contact/ContactForm';

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSubmitSuccess = () => {
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset submitted state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="צור-קשר" className="py-16 md:py-24 bg-background mt-16">
      <div className="container mx-auto px-4 md:px-6" ref={ctaRef}>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block text-sky-400">
            מוכן לראות את עצמך בגרסה הכי טובה שלך?
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-white"></span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 mt-4 max-w-2xl mx-auto">
            שלח לי פרטים ואיצור איתך קשר <strong>תוך שעות</strong> כדי להתחיל
          </p>
        </div>
        
        <div 
          className={cn(
            "max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-3/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                בוא נהפוך אותך למקצוען שנראה כמו מקצוען
              </h2>
              <p className="text-muted-foreground mb-5 text-sm md:text-base">
                איך אתה רוצה להיראות בעיני הלקוחות שלך? מלא פרטים ונתחיל לעבוד על זה.
              </p>
              
              {!isSubmitted ? (
                <ContactForm
                  onSubmitSuccess={handleSubmitSuccess}
                  isSubmitting={isSubmitting}
                />
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 md:p-6 text-center">
                  <svg className="w-10 h-10 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2">יצרת איתי קשר בהצלחה!</h3>
                  <p className="text-green-700 text-sm md:text-base">
                    אני אחזור אליך ממש בקרוב. בינתיים, כבר אפשר להתחיל לחשוב איזה תדמית תרצה ליצור.
                  </p>
                </div>
              )}
            </div>
            
            <div 
              className="lg:w-2/5 bg-background hidden lg:block"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1629397266492-dcc68dbdbef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="h-full w-full bg-gradient-to-r from-gray-900/80 to-gray-800/50 p-6 lg:p-8 flex flex-col justify-center">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white/90 text-sm">תמונות שנראות <strong>מקצועיות</strong></p>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white/90 text-sm">חיסכון של <strong>אלפי שקלים</strong></p>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white/90 text-sm"><strong>במקום לחכות שבועות</strong> – קבל את התמונות תוך ימים</p>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white/90 text-sm">מודל AI <strong>שנוצר רק בשבילך</strong></p>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white/90 text-sm"><strong>דיסקרטיות מלאה</strong> מובטחת</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
