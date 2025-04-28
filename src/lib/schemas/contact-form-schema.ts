
import * as z from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'נא להזין שם מלא' }),
  email: z.string().email({ message: 'נא להזין כתובת אימייל תקינה' }),
  phone: z.string().min(9, { message: 'נא להזין מספר טלפון תקין' }).optional(),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
