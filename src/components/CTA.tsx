
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import emailjs from 'emailjs-com';
import { toast } from '@/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  name: z.string().min(2, { message: 'נא להזין שם מלא' }),
  email: z.string().email({ message: 'נא להזין כתובת אימייל תקינה' }),
  phone: z.string().min(9, { message: 'נא להזין מספר טלפון תקין' }).optional(),
  message: z.string().optional(),
});

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

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

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // EmailJS configuration
    // Using public keys which is fine for client-side usage
    const serviceID = 'service_eot5ts1'; // Update with your actual EmailJS service ID
    const templateID = 'template_1yq3xaj'; // Update with your actual EmailJS template ID
    const publicKey = 'AhwH5k2tKikGCwcCG'; // Update with your actual EmailJS public key
    
    // Prepare the template parameters
    const templateParams = {
      from_name: data.name,
      reply_to: data.email,
      phone: data.phone || 'לא הוזן',
      message: data.message || 'לא הוזן הודעה',
      to_email: 'orel1276@gmail.com',
    };
    
    // Initialize EmailJS (this is the recommended way in newer versions)
    emailjs.init(publicKey);
    
    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setIsSubmitted(true);
        form.reset();
        
        toast({
          title: "הטופס נשלח בהצלחה!",
          description: "פרטיך נשלחו לכתובת orel1276@gmail.com",
        });
        
        // Reset submitted state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setIsSubmitting(false);
        
        toast({
          title: "שגיאה בשליחת הטופס",
          description: "אנא נסה שוב מאוחר יותר או צור קשר ישירות בוואטסאפ",
          variant: "destructive",
        });
      });
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">שם מלא</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="השם שלך"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">אימייל</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="your@email.com"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">טלפון</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="050-1234567"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">כמה מילים על מה שאתה צריך</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="ספר לי קצת על הצרכים שלך..."
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                              rows={3}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex flex-wrap gap-2 justify-center mt-3 text-gray-700 text-xs md:text-sm">
                      <span className="flex items-center">✅ תוצאה תוך 24 שעות</span>
                      <span className="flex items-center">✅ ליווי אישי</span>
                      <span className="flex items-center">✅ דיסקרטיות מלאה</span>
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-2.5 mt-2 rounded-md transition-all text-lg ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-bold shadow-md hover:shadow-lg'
                      }`}
                    >
                      {isSubmitting ? 'שולח...' : 'בוא ניצור את התמונה שתספר את הסיפור שלך'}
                    </Button>
                  </form>
                </Form>
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
