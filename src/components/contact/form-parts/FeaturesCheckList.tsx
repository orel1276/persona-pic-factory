
import React from 'react';

export const FeaturesCheckList = () => {
  return (
    <div className="space-y-4 bg-gray-800/30 p-4 rounded-lg">
      <div className="flex items-center space-x-3 space-x-reverse">
        <span className="text-green-500 text-xl">✓</span>
        <span className="text-sm font-medium text-gray-300">ליווי אישי</span>
      </div>
      
      <div className="flex items-center space-x-3 space-x-reverse">
        <span className="text-green-500 text-xl">✓</span>
        <span className="text-sm font-medium text-gray-300">תוצאה תוך 24 שעות</span>
      </div>
      
      <div className="flex items-center space-x-3 space-x-reverse">
        <span className="text-green-500 text-xl">✓</span>
        <span className="text-sm font-medium text-gray-300">דיסקרטיות מלאה</span>
      </div>
    </div>
  );
};
