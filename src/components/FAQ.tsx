
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "איך התהליך עובד?",
      answer: "התהליך פשוט: שלח לנו מספר תמונות שלך, ובעזרת בינה מלאכותית נייצר עבורך תמונות תדמית מקצועיות באיכות סטודיו. אנחנו מאמנים מודל AI עם התמונות שלך ויוצרים תוצאות מותאמות אישית."
    },
    {
      question: "כמה תמונות אני צריך לשלוח?",
      answer: "לתוצאות האיכותיות ביותר, מומלץ לשלוח 10-20 תמונות שונות שמציגות אותך מזוויות שונות, בתאורה שונה ובהבעות פנים מגוונות."
    },
    {
      question: "כמה זמן לוקח לקבל את התמונות?",
      answer: "אנו מספקים את התמונות תוך 24 שעות, ובכך חוסכים לך זמן יקר בהשוואה לתהליך צילום מסורתי. תקבל עדכון ממני אישית על זמן ההפקה המשוער."
    },
    {
      question: "האם אני יכול לבקש סגנונות ספציפיים?",
      answer: "בהחלט! אנו יכולים ליצור תמונות במגוון סגנונות, רקעים ואווירות. פשוט שתף איתנו את הרעיונות שלך ואנחנו נעשה את המיטב כדי להשיג את הלוק המדויק שאתה מחפש."
    },
    {
      question: "האם התמונות נראות מלאכותיות?",
      answer: "המטרה שלנו היא ליצור תמונות שנראות טבעיות וריאליסטיות. אנו משתמשים בטכנולוגיה המתקדמת ביותר כדי להבטיח שהתמונות נראות מקצועיות ואותנטיות, ממש כאילו צולמו בסטודיו מקצועי."
    },
    {
      question: "מה אם אני לא מרוצה מהתוצאות?",
      answer: "שביעות הרצון שלך היא העדיפות העליונה שלנו. אם אינך מרוצה מהתוצאות, אנחנו נבצע תיקונים ושינויים עד שתהיה מרוצה לחלוטין. אם עדיין אינך מרוצה, נחזיר לך את כספך."
    },
    {
      question: "האם יש לי זכויות שימוש מלאות בתמונות?",
      answer: "כן, אתה מקבל זכויות שימוש מלאות בכל התמונות. אתה יכול להשתמש בהן בכל פלטפורמה, אתר, פרופיל חברתי או חומרי שיווק, ללא הגבלת זמן."
    },
    {
      question: "מה ההבדל בין השירות שלכם לבין סתם להשתמש באפליקציות AI?",
      answer: "בניגוד לאפליקציות גנריות, אנחנו בונים מודל AI מותאם אישית במיוחד עבורך. זה מבטיח תוצאות באיכות גבוהה הרבה יותר שנראות כמוך באמת, ולא כמו גרסה מעוותת. בנוסף, יש לך ליווי אישי ואפשרות לתיקונים והתאמות."
    },
    {
      question: "האם אתם שומרים על פרטיות המידע שלי?",
      answer: "אנחנו מחויבים לשמירה על הפרטיות שלך. התמונות שאתה שולח והתוצרים הסופיים נשמרים בסודיות מלאה ולא משותפים עם צד שלישי ללא הסכמתך המפורשת."
    },
    {
      question: "איך התמונות ישפרו את העסק שלי?",
      answer: "תדמית מקצועית מושכת לקוחות, בונה אמון ומשפרת את הרושם הראשוני. לקוחותינו מדווחים על עלייה משמעותית באחוזי התגובה, יותר פניות ויצירת קשר מלקוחות איכותיים יותר לאחר שדרוג התדמית שלהם."
    }
  ];

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
          <p className="text-white/70 mb-6 px-4">לא מצאת תשובה לשאלה שלך? צור איתי קשר ישירות</p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full border border-white/20 transition-all duration-300 w-full md:w-auto max-w-xs mx-auto min-h-[48px]"
          >
            יש לי שאלה נוספת
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
