
import React from 'react';

const AboutMeSection = () => {
  return (
    <section className="py-10 md:py-16 px-4 md:px-6 bg-[#05152a] text-center border-t border-white/10">
      <div className="container mx-auto max-w-3xl">
        <div className="mx-auto rounded-full w-32 h-32 md:w-40 md:h-40 mb-6 md:mb-8 overflow-hidden border-4 border-primary/30">
          <img 
            src="/lovable-uploads/be0497d4-c0af-40ca-a705-0db1d3b0ef85.png" 
            alt="אוראל - מומחה תדמית דיגיטלית"
            className="w-full h-full object-cover" 
          />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          נעים מאוד, אני אוראל – ואני הופך אנשים רגילים לפצצות תדמית
        </h2>
        
        <ul className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-lg mt-6">
          <li className="flex items-center justify-center">
            <span className="text-green-400 mr-2">✔️</span>
            <span className="text-white/90">מעל 3 שנות ניסיון</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="text-green-400 mr-2">✔️</span>
            <span className="text-white/90">למעלה מ-500 לקוחות מרוצים</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="text-green-400 mr-2">✔️</span>
            <span className="text-white/90">100% שביעות רצון</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMeSection;
