
import emailjs from 'emailjs-com';
import { ContactFormData } from '../schemas/contact-form-schema';

// Updated EmailJS configuration
const EMAIL_CONFIG = {
  serviceID: 'service_eot5ts1',
  templateID: 'template_1yq3xaj',
  publicKey: 'AhwH5k2tKikGCwcCG',
  // Make sure to use your actual user ID - this is required for newer versions of EmailJS
  userID: 'AhwH5k2tKikGCwcCG'
};

export const sendContactEmail = async (data: ContactFormData) => {
  try {
    // Initialize EmailJS with the user ID (important for newer versions)
    emailjs.init(EMAIL_CONFIG.userID);
    
    // Prepare the template parameters with all required fields
    const templateParams = {
      from_name: data.name,
      reply_to: data.email,
      phone: data.phone || 'לא הוזן',
      message: data.message || 'לא הוזן הודעה',
      personalGuidance: 'כן',
      result24Hours: 'כן',
      privacy: 'כן',
      to_name: 'FilmKal',
      subject: 'פנייה חדשה מהאתר',
      email: data.email,
      to_email: 'orel1276@gmail.com'
    };

    console.log('Sending email with params:', templateParams);

    // Send the email using the direct send method which has better error handling
    const response = await emailjs.send(
      EMAIL_CONFIG.serviceID,
      EMAIL_CONFIG.templateID,
      templateParams,
      EMAIL_CONFIG.userID // Pass the user ID as the last parameter
    );

    console.log('Email sent successfully:', response);

    // Return success response
    return { success: true, response };
  } catch (error) {
    console.error('Email sending error:', error);
    
    // Extract more useful error information
    let errorMessage = 'Unknown error occurred';
    
    // Better error handling for EmailJS specific errors
    if (error && typeof error === 'object' && 'status' in error) {
      const emailJsError = error as { status: number; text: string };
      
      if (emailJsError.status === 404) {
        errorMessage = 'שגיאת שרת: חשבון או תבנית אימייל לא נמצאו';
      } else if (emailJsError.status === 400) {
        errorMessage = 'שגיאת שרת: בקשה לא תקינה';
      } else if (emailJsError.status === 403) {
        errorMessage = 'שגיאת שרת: אין הרשאה לשלוח אימייל';
      } else if (emailJsError.text) {
        errorMessage = `שגיאת שרת: ${emailJsError.text}`;
      }
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    throw new Error(`שגיאה בשליחת הטופס: ${errorMessage}`);
  }
}
