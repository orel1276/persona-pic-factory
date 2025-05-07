
import { ContactFormData } from '../schemas/contact-form-schema';

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
    
    // Call our Supabase Edge Function with the correct name
    const response = await fetch(edgeFunctionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      // Remove credentials flag as it might cause CORS issues
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
      return { 
        success: false, 
        error: responseData.error || 'שגיאה בשליחת האימייל',
        details: responseData
      };
    }

    // Return success response
    return { success: true, data: responseData.data };
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
