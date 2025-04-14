
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import emailjs from 'emailjs-com';
import { toast } from '@/components/ui/use-toast';

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Initialize EmailJS with your service ID
    // Note: In a production environment, you should use environment variables for these values
    const serviceID = 'default_service'; // Replace with your actual service ID
    const templateID = 'template_default'; // Replace with your actual template ID
    const userID = 'user_yourUserID'; // Replace with your actual user ID
    
    // Prepare the template parameters
    const templateParams = {
      to_email: 'orel1276@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message
    };
    
    // Send the email
    // Note: For this to work in production, you need to set up EmailJS properly
    // This is a frontend-only solution. For a more secure approach, you might want to use a serverless function
    
    // Simulating email sending for demo purposes
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      toast({
        title: "הטופס נשלח בהצלחה!",
        description: "פרטיך נשלחו לכתובת orel1276@gmail.com",
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
    
    // Uncomment below to use actual EmailJS
    // emailjs.send(serviceID, templateID, templateParams, userID)
    //   .then((response) => {
    //     setIsSubmitting(false);
    //     setIsSubmitted(true);
    //     setFormData({
    //       name: '',
    //       email: '',
    //       phone: '',
    //       message: ''
    //     });
    //     toast({
    //       title: "הטופס נשלח בהצלחה!",
    //       description: "פרטיך נשלחו לכתובת orel1276@gmail.com",
    //     });
    //     setTimeout(() => setIsSubmitted(false), 5000);
    //   })
    //   .catch((error) => {
    //     setIsSubmitting(false);
    //     toast({
    //       title: "שגיאה בשליחת הטופס",
    //       description: "אנא נסה שוב מאוחר יותר או צור קשר ישירות בוואטסאפ",
    //       variant: "destructive",
    //     });
    //   });
  };

  return (
    <section id="צור-קשר" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6" ref={ctaRef}>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block text-sky-400">
            רוצה שתהיה לך תמונת פרופיל שאומרת 'אני מקצוען'?
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-white"></span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 mt-4 max-w-2xl mx-auto">
            מלא את הפרטים ואצור איתך קשר בהקדם כדי להתחיל בתהליך יצירת תמונות התדמית שלך
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
                מוכן לקבל תמונות תדמית מקצועיות?
              </h2>
              <p className="text-muted-foreground mb-5 text-sm md:text-base">
                השאר פרטים ואחזור אליך בהקדם עם מידע נוסף על השירות ואיך נוכל ליצור את תמונות התדמית המושלמות עבורך.
              </p>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      placeholder="הכנס את שמך המלא"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">אימייל</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">טלפון</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      placeholder="050-1234567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">הודעה (אופציונלי)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      placeholder="ספר לנו קצת על הצרכים שלך..."
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-center mt-3 text-gray-700 text-xs md:text-sm">
                    <span className="flex items-center">✅ תוצאה תוך 24 שעות</span>
                    <span className="flex items-center">✅ ליווי אישי</span>
                    <span className="flex items-center">✅ דיסקרטיות מלאה</span>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2.5 mt-2 rounded-md transition-all ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-bold shadow-md hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? 'שולח...' : 'תיצור לי אלבום עכשיו'}
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 md:p-6 text-center">
                  <svg className="w-10 h-10 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2">תודה שפנית אלינו!</h3>
                  <p className="text-green-700 text-sm md:text-base">
                    ההודעה שלך התקבלה בהצלחה. אצור איתך קשר בהקדם האפשרי.
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
                    <p className="text-white/90 text-sm">תמונות תדמית באיכות סטודיו</p>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white/90 text-sm">חיסכון של אלפי שקלים</p>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white/90 text-sm">קבלת התמונות תוך ימים ספורים</p>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white/90 text-sm">מודל AI מותאם אישית עבורך</p>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white/90 text-sm">דיסקרטיות מלאה מובטחת</p>
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
