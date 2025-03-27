
import React from 'react';

const ClientTestimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold neon-text-pink mb-6">לקוחות משתפים</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            הנה מה שלקוחותינו אומרים על תמונות התדמית המבוססות בינה מלאכותית
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-xl mb-2 neon-text-blue">דני כהן</div>
                <div className="text-sm text-white/60 mb-4">יזם ומרצה</div>
                <div className="bg-[#128C7E]/10 border border-[#128C7E]/20 rounded-lg p-4 relative">
                  <svg className="absolute top-0 right-4 transform -translate-y-1/2 text-[#128C7E]" width="16" height="8" viewBox="0 0 16 8" fill="currentColor">
                    <path d="M0 8L8 0L16 8H0Z" />
                  </svg>
                  <p className="text-white/90">
                    "וואו! חייב להגיד שהתמונות שקיבלתי פשוט הדהימו אותי. בלי סטודיו, בלי צלם, ועדיין קיבלתי תמונות מקצועיות שהרימו את הפרופיל העסקי שלי. חסכתי המון זמן וכסף!"
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-xl mb-2 neon-text-blue">לימור אבני</div>
                <div className="text-sm text-white/60 mb-4">מנהלת שיווק</div>
                <div className="bg-[#128C7E]/10 border border-[#128C7E]/20 rounded-lg p-4 relative">
                  <svg className="absolute top-0 right-4 transform -translate-y-1/2 text-[#128C7E]" width="16" height="8" viewBox="0 0 16 8" fill="currentColor">
                    <path d="M0 8L8 0L16 8H0Z" />
                  </svg>
                  <p className="text-white/90">
                    "שירות מדהים! תוך 24 שעות קיבלתי אלבום שלם של תמונות מקצועיות. השתמשתי בהן לאתר שלי, ללינקדאין ולחומרי שיווק והתגובות היו מעולות. ממליצה בחום!"
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-xl mb-2 neon-text-blue">אבי לוי</div>
                <div className="text-sm text-white/60 mb-4">עורך דין</div>
                <div className="bg-[#128C7E]/10 border border-[#128C7E]/20 rounded-lg p-4 relative">
                  <svg className="absolute top-0 right-4 transform -translate-y-1/2 text-[#128C7E]" width="16" height="8" viewBox="0 0 16 8" fill="currentColor">
                    <path d="M0 8L8 0L16 8H0Z" />
                  </svg>
                  <p className="text-white/90">
                    "כעורך דין, התדמית שלי חשובה מאוד. התמונות שקיבלתי היו מקצועיות ומרשימות והתהליך היה נוח וקל. לא האמנתי שאפשר להגיע לתוצאות כאלה בלי צילום בסטודיו!"
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 4 */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-xl mb-2 neon-text-blue">מיטל דוד</div>
                <div className="text-sm text-white/60 mb-4">יועצת פיננסית</div>
                <div className="bg-[#128C7E]/10 border border-[#128C7E]/20 rounded-lg p-4 relative">
                  <svg className="absolute top-0 right-4 transform -translate-y-1/2 text-[#128C7E]" width="16" height="8" viewBox="0 0 16 8" fill="currentColor">
                    <path d="M0 8L8 0L16 8H0Z" />
                  </svg>
                  <p className="text-white/90">
                    "חיפשתי דרך לרענן את הנוכחות המקצועית שלי ברשת, והתמונות שקיבלתי עשו בדיוק את זה. השירות היה אישי ומקצועי והתוצאות פשוט מדהימות. מומלץ בחום!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
