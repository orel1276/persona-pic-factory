
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
      personalGuidance: data.personalGuidance ? 'כן' : 'לא',
      result24Hours: data.result24Hours ? 'כן' : 'לא',
      privacy: data.privacy ? 'כן' : 'לא',
      to_name: 'FilmKal',
      subject: 'פנייה חדשה מהאתר',
      email: data.email,
      to_email: 'orel12761276@gmail.com'
    };

    console.log('Sending email with params:', templateParams);

    // Send the email
    const response = await emailjs.send(
      EMAIL_CONFIG.serviceID,
      EMAIL_CONFIG.templateID,
      templateParams
    );

    console.log('Email sent successfully:', response);

    // Return success response
    return { success: true, response };
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}
