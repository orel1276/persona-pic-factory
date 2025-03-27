
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const ClientTestimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section 
      id="testimonials" 
      className="py-24 px-6 bg-black" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.8)'
      }}
      ref={testimonialsRef}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="neon-text-blue">לקוחות </span>
            <span className="neon-text-pink">משתפים</span>
          </h2>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* WhatsApp style message tiles */}
            <div className="bg-[#E5DDD5] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 duration-300 relative">
              <div className="bg-[#00A884] text-white p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white rounded-full mr-2 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=68" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">רחל</p>
                    <p className="text-xs opacity-90">יועצת תדמית</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="bg-white rounded-lg p-3 mb-2 ml-auto max-w-[80%]">
                  <p className="text-sm">היי, איך התמונות החדשות שלך? כבר משתמש בהן?</p>
                  <span className="text-xs text-gray-500 block text-right">12:20</span>
                </div>
                <div className="bg-[#DCF8C6] rounded-lg p-3 ml-auto max-w-[80%]">
                  <p className="text-sm">וואו, התמונות מדהימות! סוף סוף יש לי תמונת פרופיל מקצועית 🔥</p>
                  <span className="text-xs text-gray-500 block text-right">12:22</span>
                </div>
                <div className="flex justify-center mt-3">
                  <div className="flex items-center text-[#00A884]">
                    <div className="h-px bg-[#00A884] w-24"></div>
                    <span className="mx-2 text-xs">ממש מרוצה מהתוצאות</span>
                    <div className="h-px bg-[#00A884] w-24"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E5DDD5] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 duration-300 relative">
              <div className="bg-[#00A884] text-white p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white rounded-full mr-2 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=32" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">יוסי</p>
                    <p className="text-xs opacity-90">איש עסקים</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="bg-white rounded-lg p-3 mb-2 ml-auto max-w-[80%]">
                  <p className="text-sm">זה המחיר הסופי? כולל הכל?</p>
                  <span className="text-xs text-gray-500 block text-right">17:45</span>
                </div>
                <div className="bg-[#DCF8C6] rounded-lg p-3 ml-auto max-w-[80%]">
                  <p className="text-sm">כן, והתוצאה שווה כל שקל! 👌 ממליץ בחום</p>
                  <span className="text-xs text-gray-500 block text-right">17:46</span>
                </div>
                <div className="flex justify-center mt-3">
                  <div className="flex items-center text-[#00A884]">
                    <div className="h-px bg-[#00A884] w-24"></div>
                    <span className="mx-2 text-xs">שמח שבחרתי בשירות שלך</span>
                    <div className="h-px bg-[#00A884] w-24"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E5DDD5] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 duration-300 relative">
              <div className="bg-[#00A884] text-white p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white rounded-full mr-2 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=44" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">מיכל</p>
                    <p className="text-xs opacity-90">מאמנת עסקית</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="bg-[#DCF8C6] rounded-lg p-3 mb-2 ml-auto max-w-[80%]">
                  <p className="text-sm">רציתי להגיד תודה! קיבלתי המון תגובות חיוביות על תמונות הפרופיל החדשות 😊</p>
                  <span className="text-xs text-gray-500 block text-right">9:30</span>
                </div>
                <div className="bg-white rounded-lg p-3 mb-2 mr-auto max-w-[80%]">
                  <p className="text-sm">שמח לשמוע! זו בדיוק המטרה שלנו</p>
                  <span className="text-xs text-gray-500 block text-right">9:32</span>
                </div>
                <div className="flex justify-center mt-3">
                  <div className="flex items-center text-[#00A884]">
                    <div className="h-px bg-[#00A884] w-24"></div>
                    <span className="mx-2 text-xs">תוצאות מרשימות</span>
                    <div className="h-px bg-[#00A884] w-24"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E5DDD5] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 duration-300 relative">
              <div className="bg-[#00A884] text-white p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white rounded-full mr-2 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=13" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">דני</p>
                    <p className="text-xs opacity-90">יזם</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="bg-[#DCF8C6] rounded-lg p-3 mb-2 ml-auto max-w-[80%]">
                  <p className="text-sm">אין מילים. האתר שלי נראה אחר לגמרי עם התמונות החדשות של המוצרים 🤩</p>
                  <span className="text-xs text-gray-500 block text-right">16:15</span>
                </div>
                <div className="bg-[#DCF8C6] rounded-lg p-3 ml-auto max-w-[80%]">
                  <p className="text-sm">אשתף את זה עם כל מי שאני מכיר 👍</p>
                  <span className="text-xs text-gray-500 block text-right">16:16</span>
                </div>
                <div className="flex justify-center mt-3">
                  <div className="flex items-center text-[#00A884]">
                    <div className="h-px bg-[#00A884] w-24"></div>
                    <span className="mx-2 text-xs">לקוח לכל החיים</span>
                    <div className="h-px bg-[#00A884] w-24"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E5DDD5] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 duration-300 relative">
              <div className="bg-[#00A884] text-white p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white rounded-full mr-2 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=23" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">נועה</p>
                    <p className="text-xs opacity-90">מעצבת גרפית</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="bg-white rounded-lg p-3 mb-2 mr-auto max-w-[80%]">
                  <p className="text-sm">העלית את התמונות החדשות לאתר?</p>
                  <span className="text-xs text-gray-500 block text-right">20:20</span>
                </div>
                <div className="bg-[#DCF8C6] rounded-lg p-3 ml-auto max-w-[80%]">
                  <p className="text-sm">כן, וכבר קיבלתי 3 לקוחות חדשים תוך יומיים! תודה ענקית 🙏</p>
                  <span className="text-xs text-gray-500 block text-right">20:23</span>
                </div>
                <div className="flex justify-center mt-3">
                  <div className="flex items-center text-[#00A884]">
                    <div className="h-px bg-[#00A884] w-24"></div>
                    <span className="mx-2 text-xs">השקעה שמשתלמת</span>
                    <div className="h-px bg-[#00A884] w-24"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {[0, 1, 2, 3, 4].map((idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === idx ? 'bg-primary' : 'bg-white/30'
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
