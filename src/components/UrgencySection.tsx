
import React from 'react';

const UrgencySection = () => {
  return (
    <section className="py-6 md:py-8 px-4 bg-[#05152a] text-center border-t border-white/5">
      <div className="container mx-auto">
        <div className="bg-yellow-500/10 py-4 px-6 rounded-lg inline-block mx-auto">
          <p className="text-lg md:text-xl text-yellow-400 font-bold flex items-center justify-center">
            <span className="mr-2 text-2xl">⚠️</span>
            נותרו רק 5 מקומות לחודש הקרוב!
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
