
import React from 'react';

const UrgencySection = () => {
  return (
    <section className="py-8 md:py-10 px-4 bg-[#05152a] text-center border-t border-white/5">
      <div className="container mx-auto">
        <div className="bg-yellow-500/10 py-6 px-8 rounded-lg mx-auto max-w-3xl">
          <div className="mb-4">
            <p className="text-xl md:text-2xl text-yellow-400 font-bold flex items-center justify-center mb-3">
              <span className="mr-2 text-3xl">⚠️</span>
              נותרו רק 5 מקומות לשבוע הקרוב!
            </p>
            <p className="text-white/90 text-lg">
              אל תפספס את ההזדמנות לשדרג את התדמית המקצועית שלך
            </p>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-600/20 rounded-lg inline-block">
            <p className="text-lg md:text-xl text-white font-bold flex items-center justify-center">
              <span className="text-yellow-300 mr-2">🔥</span>
              הנחה נוספת של 20% ל-24 שעות הקרובות בלבד!
              <span className="text-yellow-300 ml-2">🔥</span>
            </p>
            <p className="text-white/80 text-sm mt-2">מחיר אחרי הנחה: 223 ₪</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
