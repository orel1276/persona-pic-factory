
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { ContactFormData } from '@/lib/schemas/contact-form-schema';

interface NameFieldProps {
  form: UseFormReturn<ContactFormData>;
  disabled: boolean;
}

export const NameField = ({ form, disabled }: NameFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-medium text-gray-300">שם מלא *</FormLabel>
          <FormControl>
            <Input
              placeholder="השם שלך"
              className="w-full px-4 py-3 border border-gray-700 bg-gray-800/50 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-base text-white min-h-[48px]"
              {...field}
              disabled={disabled}
              aria-required="true"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
