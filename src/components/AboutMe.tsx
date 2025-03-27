
import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-8 neon-text-pink">נעים להכיר, אוראל עבייד</h2>
            <div className="space-y-4 text-white/80">
              <p>
                שלום! אני אוראל, מומחה לחדשנות דיגיטלית ויישום בינה מלאכותית בעולם הצילום והתדמית.
              </p>
              <p>
                העולם הדיגיטלי השתנה, ואיתו גם תחום התדמית והמיתוג האישי. אני מאמין שכל אחד צריך 
                וראוי לתמונות מקצועיות שישקפו את הייחודיות שלו - בלי לשבור את הכיס ובלי לבזבז זמן יקר.
              </p>
              <p>
                בשנתיים האחרונות, התמחיתי בפיתוח שיטות עבודה חדשניות המשלבות בינה מלאכותית בתחום
                יצירת התוכן הויזואלי, וסייעתי למאות לקוחות לשדרג את התדמית הדיגיטלית שלהם.
              </p>
              <p>
                אני כאן כדי לעזור לך להתבלט במרחב הדיגיטלי בצורה מקצועית, מהירה ונוחה - בדיוק כפי שאתה.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20">
              <img 
                src="/placeholder.svg" 
                alt="אוראל עבייד - מומחה לצילומי תדמית AI" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
