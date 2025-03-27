
import React from 'react';

const CTA = () => {
  return (
    <section id="צור-קשר" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 neon-text-pink">
            הרם את המותג שלך למקום הבא
          </h2>
          
          <p className="text-xl mb-8 text-white/90">
            צור איתנו קשר היום כדי להתחיל ליצור את תמונות התדמית המושלמות שיקפיצו את העסק שלך קדימה
          </p>
          
          <a 
            href="https://wa.me/+972526355533?text=היי,%20אני%20מעוניין%20בשירותי%20צילום%20AI%20לתמונות%20תדמית"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button-large"
          >
            תיצור לי אלבום עכשיו
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
