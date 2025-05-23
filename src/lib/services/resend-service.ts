
import { ContactFormData } from '../schemas/contact-form-schema';
import { supabase } from '@/integrations/supabase/client';

/**
 * Sends contact form data via Supabase Edge Function
 */
export const sendContactEmailResend = async (data: ContactFormData) => {
  try {
    console.log('Starting email sending process via Edge Function...');
    console.log('Form data being sent:', data);
    
    // Full URL to the edge function
    const edgeFunctionUrl = 'https://wihtcqxiledpufidlufp.supabase.co/functions/v1/send-email';
    console.log('Calling Edge Function at:', edgeFunctionUrl);
    
    // Always use the anon key in the headers to ensure consistent authentication
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpaHRjcXhpbGVkcHVmaWRsdWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNjYwOTgsImV4cCI6MjA2MTk0MjA5OH0.CMn6O_iNz7zkT35U-_CN-QqaA0H5A_GAfNT3xJdkOqs',
    };
    
    // Call our Supabase Edge Function
    const response = await fetch(edgeFunctionUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });

    console.log('Edge Function response status:', response.status);
    console.log('Edge Function response headers:', Object.fromEntries(response.headers.entries()));

    // Try to parse the JSON response, but handle cases where it might not be valid JSON
    let responseData;
    const responseText = await response.text();
    console.log('Raw response text:', responseText);
    
    try {
      responseData = JSON.parse(responseText);
      console.log('Edge Function response data:', responseData);
    } catch (e) {
      console.error('Failed to parse response as JSON:', responseText);
      return { success: false, error: 'תשובה לא תקינה מהשרת' };
    }

    if (!response.ok) {
      console.error('Error response from Edge Function:', responseData);
      
      // Check for specific error types
      if (response.status === 401) {
        return { 
          success: false, 
          error: 'שגיאת הרשאות בשליחת הטופס',
          details: { code: 'auth/unauthorized' }
        };
      }
      
      // Check for Resend testing mode errors
      if (responseData.error && responseData.error.includes('testing emails')) {
        return { 
          success: false, 
          error: 'הטופס נשלח בהצלחה, אך בשלב זה נשמר רק במערכת ולא נשלח למייל',
          details: { code: 'resend/testing-mode' },
          testingMode: true,
          formSubmitted: true
        };
      }
      
      return { 
        success: false, 
        error: responseData.error || 'שגיאה בשליחת האימייל',
        details: responseData
      };
    }

    // Return success response
    return { 
      success: true, 
      data: responseData,
      formSubmitted: true
    };
  } catch (error) {
    console.error('Email sending error:', error);
    
    let errorMessage = 'שגיאה בשליחת האימייל';
    
    if (error instanceof Error) {
      errorMessage = `${error.message} (${error.name})`;
      console.error('Error details:', error.stack);
    }
    
    return { 
      success: false, 
      error: errorMessage,
      isNetworkError: error instanceof TypeError && error.message.includes('fetch')
    };
  }
};

// For a smooth transition, let's provide a function with the same signature as the old one
export const sendContactEmail = sendContactEmailResend;
