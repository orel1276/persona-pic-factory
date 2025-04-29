
import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const CTA = () => {
  const isMobile = useIsMobile();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="צור-קשר" className="py-16 md:py-24 px-6 bg-[#05152a] border-t border-white/10 mt-12 md:mt-16">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight px-4">
          <span className="block mb-2">זה הזמן להחליט:</span>
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">
            האם אתה רוצה שיראו אותך כמו כולם?
          </span>
          <span className="block mt-2">או כמו המומחה שאתה באמת?</span>
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto px-4">
          בעולם שבו אלפי אנשים מתחרים על תשומת הלב של הלקוחות שלך, לא מספיק להיות טוב - 
          <span className="font-bold"> אתה חייב להיראות טוב.</span>
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-10 mb-10 mx-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 md:space-x-reverse">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 w-full">
              <p className="text-yellow-300 font-bold">מבצע מיוחד!</p>
              <p className="text-white text-lg">20% הנחה לנרשמים השבוע</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 w-full">
              <p className="text-red-400 font-bold">מקומות אחרונים!</p>
              <p className="text-white text-lg">נותרו רק 5 מקומות לחודש זה</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 w-full">
              <p className="text-green-400 font-bold">בונוס מיוחד!</p>
              <p className="text-white text-lg">2 תמונות נוספות בחינם</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6 px-4">
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold py-5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-xl md:text-2xl w-full md:w-auto"
          >
            כן! אני רוצה תדמית מנצחת - התחל עכשיו
          </button>
          
          <p className="text-white/60 text-sm">
            *אין התחייבות. פשוט השאר פרטים ונחזור אליך תוך 24 שעות.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
