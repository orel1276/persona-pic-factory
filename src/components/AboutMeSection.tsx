
import React from 'react';

const AboutMeSection = () => {
  return (
    <section className="py-14 md:py-20 px-4 md:px-6 bg-[#05152a] text-center border-t border-white/10">
      <div className="container mx-auto max-w-3xl">
        <div className="mx-auto rounded-full w-48 h-48 md:w-56 md:h-56 mb-8 md:mb-10 overflow-hidden border-4 border-primary/30">
          <img 
            src="/lovable-uploads/be0497d4-c0af-40ca-a705-0db1d3b0ef85.png" 
            alt="אוראל - מומחה תדמית דיגיטלית"
            className="w-full h-full object-cover" 
          />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          נעים מאוד, אני אוראל – ואני הופך אנשים רגילים לפצצות תדמית
        </h2>
        
        <div className="text-white/90 text-lg mb-8 space-y-4">
          <p>
            כבר למעלה מ-3 שנים אני עוזר לאנשי מקצוע ובעלי עסקים להפוך לסמכויות בתחומם דרך תמונות תדמית מקצועיות.
          </p>
          <p>
            המסע שלי התחיל כשגיליתי את הפער העצום בין איך שאנשים נתפסים לבין מה שהם באמת יודעים לעשות.
            התמחיתי בטכנולוגיות AI כדי לאפשר לכולם להיראות כמו המומחים שהם באמת.
          </p>
          <p>
            היום, אחרי מאות לקוחות מרוצים, פיתחתי שיטה שמאפשרת לכל אחד לקבל תמונות ברמת סטודיו מקצועי - 
            בלי להוציא אלפי שקלים ובלי לצאת מהבית.
          </p>
        </div>
        
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
