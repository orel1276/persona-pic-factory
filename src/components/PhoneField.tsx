
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { ContactFormData } from '@/lib/schemas/contact-form-schema';

interface PhoneFieldProps {
  form: UseFormReturn<ContactFormData>;
  disabled: boolean;
}

export const PhoneField = ({ form, disabled }: PhoneFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="phone"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-medium text-gray-300">טלפון *</FormLabel>
          <FormControl>
            <Input
              placeholder="050-1234567"
              type="tel"
              className="w-full px-4 py-3 border border-gray-700 bg-gray-800/50 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-base text-white min-h-[48px]"
              {...field}
              disabled={disabled}
              aria-required="true"
              onChange={(e) => {
                // Allow only numbers, spaces, and hyphens in phone field
                const value = e.target.value;
                const formattedValue = value.replace(/[^\d\s-]/g, '');
                field.onChange(formattedValue);
              }}
              onBlur={(e) => {
                // Format phone number on blur for better user experience
                const value = e.target.value.trim();
                const digitsOnly = value.replace(/\D/g, '');
                
                // Simple Israeli phone number format checking
                if (digitsOnly.length >= 9 && digitsOnly.length <= 10) {
                  let formattedPhone = digitsOnly;
                  if (digitsOnly.length === 10 && digitsOnly.startsWith('0')) {
                    // Format as 050-1234567
                    formattedPhone = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3)}`;
                  } else if (digitsOnly.length === 9) {
                    // Format as 050-123456
                    formattedPhone = `0${digitsOnly.slice(0, 2)}-${digitsOnly.slice(2)}`;
                  }
                  field.onChange(formattedPhone);
                }
                
                field.onBlur();
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
