
import React from 'react';

const OfferSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-[#05152a] text-center">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-slate-800/40 rounded-2xl p-6 md:p-10 border border-white/10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            החבילה המלאה לתדמית שמוכרת
          </h2>
          
          <div className="flex justify-center items-center gap-3 mb-6">
            <p className="text-white/70 line-through text-lg">549 ש"ח</p>
            <p className="text-2xl md:text-3xl font-bold text-primary">349 ש"ח בלבד</p>
          </div>
          
          <ul className="space-y-3 text-lg max-w-md mx-auto mb-8">
            <li className="flex items-center justify-start">
              <span className="text-green-400 mr-2 flex-shrink-0">✅</span>
              <span className="text-white/90">10 תמונות AI באיכות גבוהה</span>
            </li>
            <li className="flex items-center justify-start">
              <span className="text-green-400 mr-2 flex-shrink-0">✅</span>
              <span className="text-white/90">התאמה אישית למיתוג שלך</span>
            </li>
            <li className="flex items-center justify-start">
              <span className="text-green-400 mr-2 flex-shrink-0">✅</span>
              <span className="text-white/90">תוצאה תוך 24 שעות</span>
            </li>
            <li className="flex items-center justify-start">
              <span className="text-green-400 mr-2 flex-shrink-0">✅</span>
              <span className="text-white/90">דיסקרטיות מלאה</span>
            </li>
            <li className="flex items-center justify-start">
              <span className="text-green-400 mr-2 flex-shrink-0">✅</span>
              <span className="text-white/90">ליווי אישי לאורך כל התהליך</span>
            </li>
          </ul>
          
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg w-full md:w-auto"
          >
            רוצה תדמית חדשה? השאר פרטים עכשיו
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
