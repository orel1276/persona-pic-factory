
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { UseFormReturn } from 'react-hook-form';
import { ContactFormData } from '@/lib/schemas/contact-form-schema';

interface MessageFieldProps {
  form: UseFormReturn<ContactFormData>;
  disabled: boolean;
}

export const MessageField = ({ form, disabled }: MessageFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-medium text-gray-300">כמה מילים על מה שאתה צריך</FormLabel>
          <FormControl>
            <Textarea
              placeholder="ספר לי קצת על הצרכים שלך..."
              className="w-full px-4 py-3 border border-gray-700 bg-gray-800/50 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-base text-white"
              rows={4}
              {...field}
              disabled={disabled}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
