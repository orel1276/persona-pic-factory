
import * as z from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'נא להזין שם מלא' }),
  email: z.string().email({ message: 'נא להזין כתובת אימייל תקינה' }),
  phone: z.string().min(9, { message: 'נא להזין מספר טלפון תקין' }).optional(),
  message: z.string().optional(),
  personalGuidance: z.boolean().optional().default(false),
  result24Hours: z.boolean().optional().default(false),
  privacy: z.boolean().optional().default(false),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
