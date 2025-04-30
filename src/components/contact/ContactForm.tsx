
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
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

interface ContactFormProps {
  onSubmitSuccess: () => void;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
}

export const ContactForm = ({ onSubmitSuccess, isSubmitting, setIsSubmitting }: ContactFormProps) => {
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

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      console.log("Form data being submitted:", data);
      await sendContactEmail(data);
      
      // Reset form after successful submission
      form.reset();
      
      // Call the success handler
      onSubmitSuccess();
      
      // Show success toast
      toast({
        title: "הטופס נשלח בהצלחה!",
        description: "נחזור אליך בהקדם",
      });
    } catch (err) {
      console.error('Error sending form:', err);
      
      // Show error toast
      toast({
        title: "שגיאה בשליחת הטופס",
        description: "אנא נסה שוב מאוחר יותר או צור קשר ישירות בוואטסאפ",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold shadow-md hover:shadow-lg hover:scale-[1.02]'
          }`}
        >
          {isSubmitting ? 'שולח...' : 'שלח ובוא ניצור תדמית חדשה ביחד'}
        </Button>
      </form>
    </Form>
  );
};
