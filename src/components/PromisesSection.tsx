
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const PromisesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('promises-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const promises = [
    {
      title: "מהירות ביצוע",
      description: "תוצאות תוך 24 שעות - כי אני מבין שהזמן שלך יקר",
      icon: "⚡"
    },
    {
      title: "דיסקרטיות מלאה",
      description: "התמונות שלך לא יופיעו בשום מקום ללא הסכמתך המפורשת",
      icon: "🔒"
    },
    {
      title: "אחריות לשביעות רצון",
      description: "לא מרוצה? אני אתקן עד שתהיה מרוצה לחלוטין או כספך יוחזר",
      icon: "✅"
    },
    {
      title: "תמיכה אישית",
      description: "ליווי מלא לאורך כל התהליך עם מענה מהיר לכל שאלה",
      icon: "👨‍💻"
    }
  ];

  return (
    <section
      id="promises-section"
      className="py-16 md:py-24 px-6 relative bg-gradient-to-b from-[#05152a] to-[#081c3a]"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sky-400">
            ההתחייבות שלי אליך
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            אני לא רק מציע תמונות, אני נותן לך הבטחה לתוצאות שישנו את האופן שבו אנשים רואים אותך
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promises.map((promise, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-700 transform hover:bg-white/10",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <div className="mr-4 text-3xl">{promise.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-sky-400 mb-2">{promise.title}</h3>
                  <p className="text-white/80">{promise.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-slate-800/80 to-slate-900/80 rounded-xl border border-sky-500/20">
          <h3 className="text-xl md:text-2xl font-bold text-center text-white mb-6">
            ההבטחה שלי אליך במילה אחת: <span className="text-sky-400">תוצאות.</span>
          </h3>
          <p className="text-center text-white/80 mb-8">
            תמונות שלא רק נראות טוב, אלא גם <span className="font-bold">עובדות</span> בשבילך לייצר לקוחות חדשים ולבנות אמון.
          </p>
          <div className="flex justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
            >
              מקומות פנויים מוגבלים - השאר פרטים עכשיו
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromisesSection;
