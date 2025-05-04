
// Follow this setup guide to integrate the Deno runtime into your application:
// https://deno.land/manual/examples/deploy_node_server
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

// Update CORS headers to be more specific - allow both localhost and your production domain
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://filmkal.com',  // Update with your actual domain
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Credentials': 'true',  // Important for credentials: 'include'
  'Content-Type': 'application/json',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    console.log("Request received by Edge Function");
    
    // Log the request URL and headers for debugging
    console.log('Request URL:', req.url);
    console.log('Request headers:', Object.fromEntries(req.headers.entries()));
    
    const data = await req.json();
    console.log('Received form data:', data);

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set');
      throw new Error('RESEND_API_KEY environment variable is not set');
    }

    // Prepare the email content
    const emailContent = {
      from: 'onboarding@resend.dev', // Use the verified sender domain from Resend
      to: 'filmkal321@gmail.com', // Recipient email
      subject: 'פנייה חדשה מהאתר',
      html: `
        <div dir="rtl" style="font-family: sans-serif; padding: 20px;">
          <h2>התקבלה פנייה חדשה מהאתר</h2>
          <p><strong>שם:</strong> ${data.name}</p>
          <p><strong>אימייל:</strong> ${data.email}</p>
          <p><strong>טלפון:</strong> ${data.phone || 'לא הוזן'}</p>
          <p><strong>הודעה:</strong> ${data.message || 'לא הוזנה הודעה'}</p>
          <p><strong>ליווי אישי:</strong> ${data.personalGuidance ? 'כן' : 'לא'}</p>
          <p><strong>תוצאה תוך 24 שעות:</strong> ${data.result24Hours ? 'כן' : 'לא'}</p>
          <p><strong>דיסקרטיות מלאה:</strong> ${data.privacy ? 'כן' : 'לא'}</p>
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
      console.error('Error response from Resend:', responseData);
      throw new Error(responseData.message || 'שגיאה בשליחת האימייל');
    }

    // Return success response with CORS headers
    return new Response(
      JSON.stringify({ success: true, data: responseData }),
      { 
        status: 200, 
        headers: corsHeaders
      }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    
    let errorMessage = 'שגיאה בשליחת האימייל';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    // Return error response with CORS headers
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { 
        status: 400, 
        headers: corsHeaders
      }
    );
  }
})
