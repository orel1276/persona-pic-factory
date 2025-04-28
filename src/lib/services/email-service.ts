
import emailjs from 'emailjs-com';
import { ContactFormData } from '../schemas/contact-form-schema';

const EMAIL_CONFIG = {
  serviceID: 'service_eot5ts1',
  templateID: 'template_1yq3xaj',
  publicKey: 'AhwH5k2tKikGCwcCG'
};

export const sendContactEmail = async (data: ContactFormData) => {
  try {
    emailjs.init(EMAIL_CONFIG.publicKey);
    
    const templateParams = {
      from_name: data.name,
      reply_to: data.email,
      phone: data.phone || 'לא הוזן',
      message: data.message || 'לא הוזן הודעה',
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceID,
      EMAIL_CONFIG.templateID,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error('שליחת האימייל נכשלה');
    }

    return response;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}
