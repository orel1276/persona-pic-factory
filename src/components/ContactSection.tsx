
import React, { useState, useRef, useEffect } from 'react';
import { ContactForm } from './contact/ContactForm';
import { MessageCircle } from 'lucide-react';

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
      className={`py-16 md:py-24 px-4 md:px-6 bg-[#05152a] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      ref={sectionRef}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            צור קשר
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto px-4">
            מעוניין בתדמית חדשה שתמשוך לקוחות? השאר פרטים ואחזור אליך בהקדם
          </p>
        </div>

        <div className="bg-slate-800/60 p-4 md:p-8 rounded-xl shadow-lg border border-slate-700/50 mx-4 md:mx-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 text-center md:text-right">השאר פרטים</h3>
              <ContactForm 
                onSubmitSuccess={handleFormSuccess} 
                isSubmitting={isSubmitting} 
                setIsSubmitting={setIsSubmitting} 
              />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 text-center md:text-right">יצירת קשר ישיר</h3>
                <p className="text-white/80 mb-6 text-center md:text-right">
                  רוצה לדבר באופן מיידי? אפשר ליצור קשר ישירות בוואטסאפ או להשאיר פרטים בטופס.
                </p>

                {/* WhatsApp Button */}
                <button 
                  onClick={openWhatsApp}
                  className="bg-[#25D366] hover:bg-[#1da851] w-full text-white font-medium py-4 px-5 rounded-lg shadow-md transition-all duration-300 text-lg flex items-center justify-center gap-3 hover:shadow-lg mb-6 min-h-[48px]"
                >
                  <MessageCircle size={24} />
                  רוצה לדבר איתי ישירות? לחץ כאן לוואטסאפ
                </button>
                
                <div className="bg-slate-700/40 rounded-lg p-4 text-center md:text-right">
                  <h4 className="font-bold text-white mb-2">10 תמונות מקצועיות תוך 24 שעות</h4>
                  <p className="text-white/80">
                    תקבל סט של 10 תמונות תדמית מקצועיות שיהפכו אותך למומחה בעיני הלקוחות שלך.
                    לא צריך סטודיו, לא צריך צלם מקצועי - רק תמונות רגילות מהטלפון.
                  </p>
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
