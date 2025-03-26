
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
      answer: "בדרך כלל אנו מספקים את התמונות תוך 24-48 שעות, תלוי בעומס העבודה הנוכחי. לפרויקטים דחופים יותר, יש לנו אופציית מסירה מהירה."
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
      question: "מה המחיר של השירות?",
      answer: "המחירים שלנו תחרותיים הרבה יותר מאשר שכירת צלם סטודיו מקצועי. אנחנו מציעים חבילות שונות בהתאם לצרכים שלך. צור איתנו קשר לקבלת הצעת מחיר מותאמת אישית."
    },
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 neon-text-pink">שאלות נפוצות</h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/5 rounded-lg overflow-hidden border border-white/10"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/5 transition-colors">
                <span className="text-lg font-medium neon-text-blue">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-white/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
