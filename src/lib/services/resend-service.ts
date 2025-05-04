
import { ContactFormData } from '../schemas/contact-form-schema';

/**
 * Sends contact form data via Supabase Edge Function
 */
export const sendContactEmailResend = async (data: ContactFormData) => {
  try {
    console.log('Starting email sending process via Edge Function...');
    
    // Call our Supabase Edge Function with the updated URL
    const response = await fetch('https://wihtcqxiledpufidlufp.supabase.co/functions/v1/rapid-worker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      // Add credentials to ensure cookies are sent
      credentials: 'include',
    });

    console.log('Edge Function response status:', response.status);

    // Try to parse the JSON response, but handle cases where it might not be valid JSON
    let responseData;
    const responseText = await response.text();
    
    try {
      responseData = JSON.parse(responseText);
      console.log('Edge Function response data:', responseData);
    } catch (e) {
      console.error('Failed to parse response as JSON:', responseText);
      return { success: false, error: 'תשובה לא תקינה מהשרת' };
    }

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
