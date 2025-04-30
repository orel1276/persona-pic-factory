
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Loader, CheckCircle, AlertTriangle } from 'lucide-react';
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
import { contactFormSchema, type ContactFormData } from '@/lib/schemas/contact-form-schema';
import { sendContactEmail } from '@/lib/services/email-service';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface ContactFormProps {
  onSubmitSuccess: () => void;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
}

export const ContactForm = ({ onSubmitSuccess, isSubmitting, setIsSubmitting }: ContactFormProps) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [wasSubmittedSuccessfully, setWasSubmittedSuccessfully] = useState(false);
  const [submitAttempts, setSubmitAttempts] = useState(0);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      personalGuidance: true,
      result24Hours: true,
      privacy: true,
    },
  });

  // Prevent multiple rapid submission attempts
  const onSubmit = async (data: ContactFormData) => {
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    // Track submission attempts and prevent too many in a short time
    setSubmitAttempts(prev => prev + 1);
    if (submitAttempts > 3) {
      toast({
        title: "יותר מדי נסיונות",
        description: "אנא המתן מספר שניות ונסה שוב",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    setFormStatus('submitting');
    setErrorMessage(null);
    
    try {
      console.log("Form data being submitted:", data);
      
      // Validate phone number - remove non-digit characters for validation
      const phoneDigitsOnly = data.phone.replace(/\D/g, '');
      if (phoneDigitsOnly.length < 9) {
        throw new Error("מספר טלפון לא תקין");
      }
      
      await sendContactEmail(data);
      
      // Reset form after successful submission
      form.reset();
      
      // Update status and show success message
      setFormStatus('success');
      setWasSubmittedSuccessfully(true);
      
      // Call the success handler
      onSubmitSuccess();
      
      // Show success toast
      toast({
        title: "הטופס נשלח בהצלחה!",
        description: "נחזור אליך בהקדם",
      });
      
      // Reset status after a delay
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
      
      // Reset submission attempts counter after success
      setSubmitAttempts(0);
      
    } catch (err) {
      console.error('Error sending form:', err);
      setFormStatus('error');
      
      let errorMsg = 'אירעה שגיאה בשליחת הטופס';
      if (err instanceof Error) {
        errorMsg = err.message;
        setErrorMessage(errorMsg);
      }
      
      // Show error toast
      toast({
        title: "שגיאה בשליחת הטופס",
        description: "אנא נסה שוב או צור קשר ישירות בוואטסאפ",
        variant: "destructive",
      });
      
      // Reset attempt counter after a brief delay
      setTimeout(() => {
        setSubmitAttempts(Math.max(0, submitAttempts - 1));
      }, 10000);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {formStatus === 'success' && wasSubmittedSuccessfully && (
        <Alert className="mb-6 bg-green-900/30 border-green-500 text-white">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <AlertTitle>הטופס נשלח בהצלחה!</AlertTitle>
          <AlertDescription>
            תודה שפנית אלינו, נחזור אליך בהקדם.
          </AlertDescription>
        </Alert>
      )}
      
      {formStatus === 'error' && errorMessage && (
        <Alert className="mb-6 bg-red-900/30 border-red-500 text-white">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <AlertTitle>שגיאה בשליחת הטופס</AlertTitle>
          <AlertDescription>
            {errorMessage}
            <div className="mt-2">
              אנא נסה שוב או צור קשר ישירות בוואטסאפ
            </div>
          </AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-300">שם מלא *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="השם שלך"
                    className="w-full px-4 py-3 border border-gray-700 bg-gray-800/50 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-base text-white min-h-[48px]"
                    {...field}
                    disabled={formStatus === 'submitting'}
                    aria-required="true"
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
                <FormLabel className="text-sm font-medium text-gray-300">אימייל *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="your@email.com"
                    type="email"
                    className="w-full px-4 py-3 border border-gray-700 bg-gray-800/50 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-base text-white min-h-[48px]"
                    {...field}
                    disabled={formStatus === 'submitting'}
                    aria-required="true"
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
                <FormLabel className="text-sm font-medium text-gray-300">טלפון *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="050-1234567"
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-700 bg-gray-800/50 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-base text-white min-h-[48px]"
                    {...field}
                    disabled={formStatus === 'submitting'}
                    aria-required="true"
                    onChange={(e) => {
                      // Allow only numbers and hyphens in phone field
                      const value = e.target.value;
                      field.onChange(value);
                    }}
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
                <FormLabel className="text-sm font-medium text-gray-300">כמה מילים על מה שאתה צריך</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="ספר לי קצת על הצרכים שלך..."
                    className="w-full px-4 py-3 border border-gray-700 bg-gray-800/50 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-base text-white"
                    rows={4}
                    {...field}
                    disabled={formStatus === 'submitting'}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Features list with green checkmarks */}
          <div className="space-y-4 bg-gray-800/30 p-4 rounded-lg">
            <div className="flex items-center space-x-3 space-x-reverse">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-sm font-medium text-gray-300">ליווי אישי</span>
            </div>
            
            <div className="flex items-center space-x-3 space-x-reverse">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-sm font-medium text-gray-300">תוצאה תוך 24 שעות</span>
            </div>
            
            <div className="flex items-center space-x-3 space-x-reverse">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-sm font-medium text-gray-300">דיסקרטיות מלאה</span>
            </div>
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 mt-4 rounded-md transition-all text-lg min-h-[48px] ${
              formStatus === 'submitting' 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold shadow-md hover:shadow-lg hover:scale-[1.02]'
            }`}
          >
            {formStatus === 'submitting' ? (
              <span className="flex items-center justify-center">
                <Loader className="animate-spin mr-2" size={20} />
                שולח...
              </span>
            ) : (
              'שלח ובוא ניצור תדמית חדשה ביחד'
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};
