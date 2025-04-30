
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "איך התהליך עובד?",
      answer: "התהליך פשוט: שלח לי מספר תמונות שלך, ובעזרת בינה מלאכותית אייצר עבורך תמונות תדמית מקצועיות באיכות סטודיו. אני מאמן מודל AI עם התמונות שלך ויוצר תוצאות מותאמות אישית."
    },
    {
      question: "כמה זמן לוקח לקבל את התמונות?",
      answer: "אני מספק את התמונות תוך 24 שעות, ובכך חוסך לך זמן יקר בהשוואה לתהליך צילום מסורתי. תקבל עדכון ממני אישית על זמן ההפקה המדויק."
    },
    {
      question: "האם התמונות נראות מלאכותיות?",
      answer: "המטרה שלי היא ליצור תמונות שנראות טבעיות וריאליסטיות. אני משתמש בטכנולוגיה המתקדמת ביותר כדי להבטיח שהתמונות נראות מקצועיות ואותנטיות, ממש כאילו צולמו בסטודיו מקצועי."
    },
    {
      question: "מה אם אני לא מרוצה מהתוצאות?",
      answer: "שביעות הרצון שלך היא העדיפות העליונה שלי. אם אינך מרוצה מהתוצאות, אני אבצע תיקונים ושינויים עד שתהיה מרוצה לחלוטין. אם עדיין אינך מרוצה, אחזיר לך את כספך."
    },
    {
      question: "איך התמונות ישפרו את העסק שלי?",
      answer: "תדמית מקצועית מושכת לקוחות, בונה אמון ומשפרת את הרושם הראשוני. לקוחותיי מדווחים על עלייה משמעותית באחוזי התגובה, יותר פניות ויצירת קשר מלקוחות איכותיים יותר לאחר שדרוג התדמית שלהם."
    }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/972528028988', '_blank');
  };

  return (
    <section id="faq" className="py-16 md:py-20 px-6 bg-background mt-12">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 text-sky-400">שאלות נפוצות</h2>
        <p className="text-center text-white/80 mb-8 md:mb-10 text-lg px-4">כל מה שרצית לדעת על תמונות תדמית AI</p>
        
        <Accordion type="single" collapsible className="w-full space-y-4 px-4 md:px-0">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/5 rounded-lg overflow-hidden border border-white/10"
            >
              <AccordionTrigger className="px-4 md:px-6 py-4 hover:no-underline hover:bg-white/5 transition-colors text-right">
                <span className="text-base md:text-lg font-medium text-sky-400">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 py-4 text-white/80 text-right text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-white/70 mb-6 px-4">לא מצאת תשובה לשאלה שלך? דבר איתי ישירות</p>
          <button 
            onClick={openWhatsApp}
            className="bg-[#25D366] hover:bg-[#1da851] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 w-full md:w-auto max-w-xs mx-auto min-h-[48px] flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
              <path d="M9 10a.5.5 0 0 1 1 0c0 .97 1.08 1.73 2 1.73a.5.5 0 0 1 0 1 2.93 2.93 0 0 1-3-2.73z"></path>
            </svg>
            יש לי שאלה נוספת
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
