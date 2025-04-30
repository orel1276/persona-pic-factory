
import emailjs from 'emailjs-com';
import { ContactFormData } from '../schemas/contact-form-schema';

const EMAIL_CONFIG = {
  serviceID: 'service_eot5ts1',
  templateID: 'template_1yq3xaj',
  publicKey: 'AhwH5k2tKikGCwcCG'
};

export const sendContactEmail = async (data: ContactFormData) => {
  try {
    // Initialize EmailJS with the public key
    emailjs.init(EMAIL_CONFIG.publicKey);
    
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

    // Send the email with timeout handling
    const emailPromise = emailjs.send(
      EMAIL_CONFIG.serviceID,
      EMAIL_CONFIG.templateID,
      templateParams
    );
    
    // Set a timeout for the email sending process
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Email sending timed out after 15 seconds')), 15000);
    });
    
    // Race between the email sending and the timeout
    const response = await Promise.race([emailPromise, timeoutPromise]);

    console.log('Email sent successfully:', response);

    // Return success response
    return { success: true, response };
  } catch (error) {
    console.error('Email sending error:', error);
    
    // Extract more useful error information
    let errorMessage = 'Unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    throw new Error(`Failed to send email: ${errorMessage}`);
  }
}
