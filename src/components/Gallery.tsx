
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

  const images: BeforeAfterImage[] = [
    {
      before: "/lovable-uploads/e3cca4db-8fba-49dd-ba8b-9a1e161caa6b.png",
      after: "/lovable-uploads/e5e1d8f0-83ff-4854-a2b0-7426c9181c65.png",
      description: "סתם נהג אוטובוס",
      style: "מנהיג דרך חדשה"
    },
    {
      before: "/lovable-uploads/d880f8be-861b-42de-912d-0c9268eaa245.png",
      after: "/lovable-uploads/21f854b3-6b2e-4140-a6cc-776dde6ba2c4.png",
      description: "ממראה רגיל למנהיג עסקי מלא השראה",
      style: "יוקרה ומקצועיות שלא ניתן להתעלם מהן"
    },
    {
      before: "/lovable-uploads/7cb08be2-c284-43f9-9056-3d48b4f8e0d5.png",
      after: "/lovable-uploads/4e1b1ec2-2ba4-4607-b401-6e1087bcedfc.png",
      description: "כשאתה יודע שאין גבולות למה שאפשר להשיג",
      style: "מראה שמשדר עוצמה והצלחה"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="גלריה" className="py-16 md:py-24 bg-white mt-12">
      <div className="container mx-auto px-4 md:px-6" ref={galleryRef}>
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            התוצאות מדברות בעצמן
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4 px-4">
            ההבדל בין להיות נעלם לבין להיות בלתי נשכח
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            <strong>זה לא עוד עריכת תמונות</strong>, זה שינוי תפיסה של הלקוחות לגביך
          </p>
        </div>

        <div 
          className={cn(
            "max-w-5xl mx-auto transition-all duration-1000 transform px-4 md:px-0",
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
                  עבור על התמונה כדי לראות את ההבדל
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
                  עבור עריכת תדמית מקצועית
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
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-primary p-2 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-primary p-2 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
        <div className="text-center mt-16 px-4 md:px-0">
          <a 
            href="#צור-קשר" 
            className="bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-bold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-block hover:scale-105 w-full md:w-auto min-h-[48px]"
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
