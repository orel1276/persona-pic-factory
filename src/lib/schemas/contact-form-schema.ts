
import * as z from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'נא להזין שם מלא' }),
  email: z.string().email({ message: 'נא להזין כתובת אימייל תקינה' }),
  phone: z.string().min(9, { message: 'נא להזין מספר טלפון תקין' }),
  message: z.string().optional(),
  // These fields are auto-filled with defaults
  personalGuidance: z.boolean().default(true),
  result24Hours: z.boolean().default(true),
  privacy: z.boolean().default(true)
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
