
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-16 neon-text-blue">מי אני</h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-75 animate-pulse"></div>
              <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-white/10 relative">
                <AvatarImage src="/lovable-uploads/771bc8c8-0b86-4f67-b32f-9c3aa6a84932.png" alt="Profile picture" />
                <AvatarFallback className="text-5xl bg-accent">AI</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="text-white/90 text-lg max-w-2xl">
            <p className="mb-6">
              כאיש שיווק עם ניסיון של למעלה מ-30 שנה, אני התמחיתי ביצירת נוכחות דיגיטלית מרשימה עבור עסקים ואנשי מקצוע. 
              לאורך הקריירה שלי, הבנתי את החשיבות העצומה של תמונות תדמית איכותיות בבניית מותג אישי ומקצועי.
            </p>
            <p className="mb-6">
              היום, אני משלב את הידע השיווקי שלי עם טכנולוגיית בינה מלאכותית מתקדמת כדי להציע פתרון חדשני: 
              תמונות תדמית מקצועיות ברמת סטודיו - ללא צלם, ללא סטודיו, וללא הוצאות גבוהות.
            </p>
            <p>
              המומחיות שלי היא לקחת מספר תמונות רגילות שלך ולהפוך אותן ליצירות מופת שמשדרות מקצועיות, 
              אמינות וכריזמה. אני מאמין שכל אחד צריך וראוי לייצוג ויזואלי מרשים שמשקף את הפוטנציאל האמיתי שלו.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
