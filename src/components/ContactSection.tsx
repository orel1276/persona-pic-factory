
import React, { useState, useRef, useEffect } from 'react';
import { ContactForm } from './contact/ContactForm';
import { WhatsApp } from 'lucide-react';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleFormSuccess = () => {
    console.log('Form submitted successfully');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/972528028988', '_blank');
  };

  return (
    <section 
      id="contact" 
      className={`py-16 md:py-24 px-4 bg-[#05152a] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      ref={sectionRef}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            צור קשר
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            מעוניין בתדמית חדשה שתמשוך לקוחות? השאר פרטים ואחזור אליך בהקדם
          </p>
        </div>

        <div className="bg-slate-800/60 p-8 rounded-xl shadow-lg border border-slate-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">השאר פרטים</h3>
              <ContactForm 
                onSubmitSuccess={handleFormSuccess} 
                isSubmitting={isSubmitting} 
                setIsSubmitting={setIsSubmitting} 
              />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">יצירת קשר ישיר</h3>
                <p className="text-white/80 mb-6">
                  רוצה לדבר באופן מיידי? אפשר ליצור קשר ישירות בוואטסאפ או להשאיר פרטים בטופס.
                </p>

                {/* WhatsApp Button */}
                <button 
                  onClick={openWhatsApp}
                  className="bg-[#25D366] hover:bg-[#1da851] w-full text-white font-medium py-4 px-5 rounded-lg shadow-md transition-all duration-300 text-lg flex items-center justify-center gap-3 hover:shadow-lg mb-6"
                >
                  <WhatsApp size={24} />
                  רוצה לדבר איתי ישירות? לחץ כאן לוואטסאפ
                </button>
                
                <div className="space-y-4 text-white/80">
                  <div className="p-4 bg-slate-700/40 rounded-lg">
                    <h4 className="font-bold text-white mb-2">למה לבחור בי?</h4>
                    <p>תדמית מקצועית שתוכל להשתמש בה בכל מקום - ברשתות חברתיות, באתר שלך, בחומרי שיווק, ועוד.</p>
                  </div>
                  
                  <div className="p-4 bg-slate-700/40 rounded-lg">
                    <h4 className="font-bold text-white mb-2">איך זה עובד?</h4>
                    <p>אתה שולח לי תמונות פשוטות מהטלפון, ואני מחזיר לך תדמית מקצועית תוך 24 שעות.</p>
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

export default ContactSection;
