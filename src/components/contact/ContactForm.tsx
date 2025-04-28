
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/components/ui/use-toast';
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
}

export const ContactForm = ({ onSubmitSuccess, isSubmitting }: ContactFormProps) => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendContactEmail(data);
      form.reset();
      onSubmitSuccess();
      toast({
        title: "הטופס נשלח בהצלחה!",
        description: "פרטיך נשלחו לכתובת orel1276@gmail.com",
      });
    } catch (err) {
      console.log('FAILED...', err);
      toast({
        title: "שגיאה בשליחת הטופס",
        description: "אנא נסה שוב מאוחר יותר או צור קשר ישירות בוואטסאפ",
        variant: "destructive",
      });
    }
  };

  return (
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
  );
};
