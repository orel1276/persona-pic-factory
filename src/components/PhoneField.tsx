
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
                // Allow only numbers and hyphens in phone field
                const value = e.target.value;
                field.onChange(value);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
