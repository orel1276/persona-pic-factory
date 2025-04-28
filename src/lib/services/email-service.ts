
import emailjs from 'emailjs-com';
import { ContactFormData } from '../schemas/contact-form-schema';

const EMAIL_CONFIG = {
  serviceID: 'service_eot5ts1',
  templateID: 'template_1yq3xaj',
  publicKey: 'AhwH5k2tKikGCwcCG',
  targetEmail: 'orel1276@gmail.com'
};

export const sendContactEmail = async (data: ContactFormData) => {
  emailjs.init(EMAIL_CONFIG.publicKey);
  
  const templateParams = {
    from_name: data.name,
    reply_to: data.email,
    phone: data.phone || 'לא הוזן',
    message: data.message || 'לא הוזן הודעה',
    to_email: EMAIL_CONFIG.targetEmail,
  };

  return emailjs.send(
    EMAIL_CONFIG.serviceID,
    EMAIL_CONFIG.templateID,
    templateParams
  );
};
