
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { BeforeAfterImage } from './gallery/BeforeAfterImage';
import { GalleryNavigation } from './gallery/GalleryNavigation';
import { GalleryDescription } from './gallery/GalleryDescription';
import { galleryImages } from './gallery/galleryData';

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAfter, setShowAfter] = useState<boolean | null>(null);
  const isMobile = useIsMobile();

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

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    resetShowAfter();
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    resetShowAfter();
  };

  // Function to toggle before/after image on mobile
  const toggleAfterImage = () => {
    if (isMobile) {
      setShowAfter(prev => prev === null ? true : !prev);
    }
  };

  // Function to reset the showAfter state
  const resetShowAfter = () => {
    setShowAfter(null);
  };

  return (
    <section id="גלריה" className="py-12 md:py-24 bg-white mt-8 md:mt-12">
      <div className="container mx-auto px-4 md:px-6" ref={galleryRef}>
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-primary text-sm font-medium mb-3 md:mb-4">
            התוצאות מדברות בעצמן
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4 px-2 md:px-4">
            ההבדל בין להיות נעלם לבין להיות בלתי נשכח
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-2 md:px-4">
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
            {/* BeforeAfterImage component */}
            <BeforeAfterImage 
              before={galleryImages[activeIndex].before}
              after={galleryImages[activeIndex].after}
              description={galleryImages[activeIndex].description}
              style={galleryImages[activeIndex].style}
              showAfter={showAfter}
              toggleAfterImage={toggleAfterImage}
              isMobile={isMobile}
            />
            
            {/* Description */}
            <GalleryDescription 
              description={galleryImages[activeIndex].description}
              scrollToSection={scrollToSection}
            />
            
            {/* Navigation */}
            <GalleryNavigation 
              handlePrev={handlePrev}
              handleNext={handleNext}
              imagesCount={galleryImages.length}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              resetShowAfter={resetShowAfter}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
