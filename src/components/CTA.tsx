import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const CTA = () => {
  const isMobile = useIsMobile();

  const redirectToPayment = () => {
    // Replace with your actual payment URL when available
    window.location.href = "https://paypage.example.com/filmkal-package"; 
  };

  // Replace any onClick or href in the button with this function
  // Example:
  // <button 
  //   onClick={redirectToPayment}
  //   className="..."
  // >
  //   הדף לרכישה
  // </button>

  return (
    <section id="צור-קשר" className="py-16 md:py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
          רוצה להפוך את התדמית שלך למכונת לידים משומנת?
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          דבר איתי עוד היום – וביחד נבנה לך תדמית שתגרום ללקוחות לרצות לעבוד איתך.
        </p>
        <button
          onClick={redirectToPayment}
          className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-xl"
        >
          בוא נדבר על התמונה שלך
        </button>
      </div>
    </section>
  );
};

export default CTA;
