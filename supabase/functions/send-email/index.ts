
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { Resend } from "https://esm.sh/resend@3.1.0";

// Initialize Supabase client with the service role key for the Edge Function
// This key has admin privileges and bypasses RLS
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

const supabaseClient = createClient(supabaseUrl, supabaseServiceRoleKey);

console.log("Edge Function initialized with Supabase URL:", supabaseUrl);
console.log("Service Role Key available:", !!supabaseServiceRoleKey);

Deno.serve(async (req) => {
  console.log("Edge Function: send-email function called");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  
  try {
    const data = await req.json();
    console.log("Received data:", JSON.stringify(data));
    
    // Initialize Resend with API key
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    console.log("Resend API key available:", !!resendApiKey);
    
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY not found in environment variables");
    }
    
    const resend = new Resend(resendApiKey);
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone) {
      return new Response(
        JSON.stringify({ 
          error: "Missing required fields (name, email, or phone)" 
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }
    
    // Store lead in database using service role to bypass RLS
    console.log("Storing lead in database using service role...");
    const { error: insertError } = await supabaseClient
      .from("leads")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message || "",
      });

    if (insertError) {
      console.error("Error inserting lead:", insertError);
      return new Response(
        JSON.stringify({ error: `Error storing lead: ${insertError.message}` }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }
    
    // שינוי כתובת השולח לכתובת ברירת המחדל של Resend במקום להשתמש בדומיין שלא מאומת
    console.log("Sending email...");
    const { error: emailError } = await resend.emails.send({
      from: "Filmkal <onboarding@resend.dev>", // שימוש בכתובת ברירת המחדל של Resend
      to: ["orel1276@gmail.com"], // שימוש רק בכתובת המייל המאומתת של בעל החשבון
      subject: `פנייה חדשה מאתר התדמית - ${data.name}`,
      html: `
        <div dir="rtl" style="text-align: right; font-family: Arial, sans-serif;">
          <h2>פנייה חדשה מאתר התדמית</h2>
          <p><strong>שם:</strong> ${data.name}</p>
          <p><strong>אימייל:</strong> ${data.email}</p>
          <p><strong>טלפון:</strong> ${data.phone}</p>
          ${data.message ? `<p><strong>הודעה:</strong> ${data.message}</p>` : ""}
          <p>נא ליצור קשר בהקדם.</p>
        </div>
      `,
    });
    
    if (emailError) {
      console.error("Error sending email:", emailError);
      return new Response(
        JSON.stringify({ 
          error: `Error sending email: ${emailError.message || "Unknown error"}`,
          details: emailError
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }
    
    // Return success response
    console.log("Email sent successfully");
    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Email sent and lead stored successfully" 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
    
  } catch (error) {
    // Log and return any errors
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error:", errorMessage);
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
