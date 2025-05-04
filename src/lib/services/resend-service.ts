
import { ContactFormData } from '../schemas/contact-form-schema';

/**
 * Sends contact form data via Supabase Edge Function
 */
export const sendContactEmailResend = async (data: ContactFormData) => {
  try {
    console.log('Starting email sending process via Edge Function...');
    
    // Call our Supabase Edge Function
    const response = await fetch('https://csbjxbryfrxkxngxydgz.supabase.co/functions/v1/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    console.log('Edge Function response:', responseData);

    if (!response.ok) {
      console.error('Error response from Edge Function:', responseData);
      return { success: false, error: responseData.error || 'שגיאה בשליחת האימייל' };
    }

    // Return success response
    return { success: true, data: responseData.data };
  } catch (error) {
    console.error('Email sending error:', error);
    
    let errorMessage = 'שגיאה בשליחת האימייל';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    return { success: false, error: errorMessage };
  }
};

// For a smooth transition, let's provide a function with the same signature as the old one
export const sendContactEmail = sendContactEmailResend;
