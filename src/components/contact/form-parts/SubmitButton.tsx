
import React from 'react';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className={`w-full py-4 mt-4 rounded-md transition-all text-lg min-h-[48px] ${
        isSubmitting 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold shadow-md hover:shadow-lg hover:scale-[1.02]'
      }`}
    >
      {isSubmitting ? (
        <span className="flex items-center justify-center">
          <Loader className="animate-spin mr-2" size={20} />
          שולח...
        </span>
      ) : (
        'שלח ובוא ניצור תדמית חדשה ביחד'
      )}
    </Button>
  );
};
