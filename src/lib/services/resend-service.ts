
import { ContactFormData } from '../schemas/contact-form-schema';

// Resend API configuration with actual API key
const RESEND_API_KEY = 're_CrodkTDc_HkTCbnMbx6R4rEiyFk7K7oL9'; // Updated with the actual API key

/**
 * Sends contact form data via Resend
 */
export const sendContactEmailResend = async (data: ContactFormData) => {
  try {
    // Prepare the email content
    const emailContent = {
      from: 'contact@filmkal.com',
      to: 'filmkal321@gmail.com', // Updated recipient email
      subject: 'פנייה חדשה מהאתר',
      html: `
        <div dir="rtl" style="font-family: sans-serif; padding: 20px;">
          <h2>התקבלה פנייה חדשה מהאתר</h2>
          <p><strong>שם:</strong> ${data.name}</p>
          <p><strong>אימייל:</strong> ${data.email}</p>
          <p><strong>טלפון:</strong> ${data.phone || 'לא הוזן'}</p>
          <p><strong>הודעה:</strong> ${data.message || 'לא הוזנה הודעה'}</p>
          <p><strong>ליווי אישי:</strong> כן</p>
          <p><strong>תוצאה תוך 24 שעות:</strong> כן</p>
          <p><strong>דיסקרטיות מלאה:</strong> כן</p>
        </div>
      `,
    };

    console.log('Sending email with Resend:', emailContent);

    // Send the email using Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailContent),
    });

    const responseData = await response.json();
    console.log('Resend API response:', responseData);

    if (!response.ok) {
      throw new Error(responseData.message || 'שגיאה בשליחת האימייל');
    }

    // Return success response
    return { success: true, response: responseData };
  } catch (error) {
    console.error('Email sending error:', error);
    
    let errorMessage = 'שגיאה בשליחת האימייל';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    throw new Error(`שגיאה בשליחת הטופס: ${errorMessage}`);
  }
};

// For a smooth transition, let's provide a function with the same signature as the old one
export const sendContactEmail = sendContactEmailResend;
