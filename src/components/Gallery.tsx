
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface BeforeAfterImage {
  before: string;
  after: string;
  description: string;
  style?: string;
}

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Example images - in a real application these would be your actual before/after samples
  const images: BeforeAfterImage[] = [
    {
      before: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      after: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      description: "ממנהל שנראה סתמי למנכ\"ל שכולם רוצים לעבוד איתו",
      style: "מראה של מנהיג"
    },
    {
      before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      after: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      description: "מבלתי נראית למומחית שאי אפשר להתעלם ממנה",
      style: "סמכותיות ומקצועיות"
    },
    {
      before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      after: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      description: "מיזם רגיל למותג שמושך השקעות",
      style: "מראה של מוביל שוק"
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="גלריה" className="py-24 bg-white mt-16">
      <div className="container mx-auto px-6" ref={galleryRef}>
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            התוצאות מדברות בעצמן
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ההבדל בין להיות נעלם לבין להיות בלתי נשכח
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <strong>זה לא עוד עריכת תמונות</strong>, זה שינוי תפיסה של הלקוחות לגביך
          </p>
        </div>

        <div 
          className={cn(
            "max-w-5xl mx-auto transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
          <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col md:flex-row">
              {/* Before image */}
              <div className="w-full md:w-1/2 relative">
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-primary py-1 px-3 rounded-full text-sm font-medium z-10">
                  איך אתה נראה עכשיו
                </div>
                <img 
                  src={images[activeIndex].before} 
                  alt="Before" 
                  className="w-full h-80 md:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm text-gray-800 py-1 px-3 rounded-md text-sm font-medium z-10">
                  נבלע בים של מתחרים
                </div>
              </div>
              
              {/* After image */}
              <div className="w-full md:w-1/2 relative">
                <div className="absolute top-4 right-4 bg-primary text-white py-1 px-3 rounded-full text-sm font-medium z-10">
                  איך אתה יכול להראות
                </div>
                {images[activeIndex].style && (
                  <div className="absolute top-4 left-4 bg-sky-500 text-white py-1 px-3 rounded-full text-sm font-medium z-10">
                    {images[activeIndex].style}
                  </div>
                )}
                <img 
                  src={images[activeIndex].after} 
                  alt="After" 
                  className="w-full h-80 md:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm text-gray-800 py-1 px-3 rounded-md text-sm font-medium z-10">
                  בולט מעל כולם
                </div>
              </div>
            </div>
            
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-primary mb-2">
                {images[activeIndex].description}
              </h3>
              <p className="text-muted-foreground">
                <strong>זה לא רק איך שאתה נראה</strong>, זה איך שהלקוחות תופסים אותך
              </p>
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-primary p-2 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-primary p-2 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-primary scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Add standardized CTA */}
        <div className="text-center mt-16">
          <a 
            href="#צור-קשר" 
            className="bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-block hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("צור-קשר");
            }}
          >
            בוא נדבר על התמונה שלך
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
