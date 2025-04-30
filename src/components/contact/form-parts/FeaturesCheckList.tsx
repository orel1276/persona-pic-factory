
import React from 'react';
import { Check } from 'lucide-react';

export const FeaturesCheckList = () => {
  return (
    <div className="space-y-4 bg-gray-800/30 p-5 rounded-lg border border-gray-700/50 shadow-inner">
      <h3 className="text-gray-100 font-bold text-lg mb-3">מה שתקבלו:</h3>
      
      <div className="flex items-center space-x-3 space-x-reverse">
        <span className="flex items-center justify-center bg-green-500/20 p-1 rounded-full">
          <Check className="h-4 w-4 text-green-500" />
        </span>
        <span className="text-sm font-medium text-gray-300">ליווי אישי</span>
      </div>
      
      <div className="flex items-center space-x-3 space-x-reverse">
        <span className="flex items-center justify-center bg-green-500/20 p-1 rounded-full">
          <Check className="h-4 w-4 text-green-500" />
        </span>
        <span className="text-sm font-medium text-gray-300">תוצאה תוך 24 שעות</span>
      </div>
      
      <div className="flex items-center space-x-3 space-x-reverse">
        <span className="flex items-center justify-center bg-green-500/20 p-1 rounded-full">
          <Check className="h-4 w-4 text-green-500" />
        </span>
        <span className="text-sm font-medium text-gray-300">דיסקרטיות מלאה</span>
      </div>
    </div>
  );
};
