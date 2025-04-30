
import React from 'react';

const CTASection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-primary text-center">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          קל! פשוט תשאיר פרטים ונחזור אליך עם תדמית חדשה
        </h2>
        
        <div className="text-white/90 mb-8 text-lg">
          <p>השאר את הפרטים שלך בטופס למטה ואחזור אליך תוך 24 שעות עם כל המידע.</p>
          <p>אתה תקבל הסבר מלא על התהליך, ותוך 24 שעות מרגע אישור ההזמנה - תקבל 10 תמונות תדמית מותאמות אישית.</p>
        </div>
        
        <button 
          onClick={scrollToContact}
          className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          רוצה להתחיל? השאר פרטים עכשיו
        </button>
      </div>
    </section>
  );
};

export default CTASection;
