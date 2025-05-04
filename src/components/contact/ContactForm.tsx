
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/hooks/use-toast';
import { Form } from '@/components/ui/form';
import { contactFormSchema, type ContactFormData } from '@/lib/schemas/contact-form-schema';
import { sendContactEmail } from '@/lib/services/resend-service';

// Import the refactored components
import { NameField } from './form-fields/NameField';
import { EmailField } from './form-fields/EmailField';
import { PhoneField } from './form-fields/PhoneField';
import { MessageField } from './form-fields/MessageField';
import { FeaturesCheckList } from './form-parts/FeaturesCheckList';
import { SubmitButton } from './form-parts/SubmitButton';
import { FormAlerts } from './form-parts/FormAlerts';

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
      
      const result = await sendContactEmail(data);
      console.log("Email send result:", result);
      
      if (!result.success) {
        throw new Error(result.error || "שגיאה בשליחת הטופס");
      }
      
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
      }
      setErrorMessage(errorMsg);
      
      // Show error toast
      toast({
        title: "שגיאה בשליחת הטופס",
        description: errorMsg,
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
      <FormAlerts 
        formStatus={formStatus} 
        wasSubmittedSuccessfully={wasSubmittedSuccessfully} 
        errorMessage={errorMessage} 
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <NameField form={form} disabled={formStatus === 'submitting'} />
          <EmailField form={form} disabled={formStatus === 'submitting'} />
          <PhoneField form={form} disabled={formStatus === 'submitting'} />
          <MessageField form={form} disabled={formStatus === 'submitting'} />
          
          {/* Features list with green checkmarks */}
          <FeaturesCheckList />
          
          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </Form>
    </>
  );
};
