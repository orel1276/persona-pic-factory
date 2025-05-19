
import React from 'react';

interface GalleryNavigationProps {
  handlePrev: () => void;
  handleNext: () => void;
  imagesCount: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  resetShowAfter: () => void;
}

export const GalleryNavigation: React.FC<GalleryNavigationProps> = ({
  handlePrev,
  handleNext,
  imagesCount,
  activeIndex,
  setActiveIndex,
  resetShowAfter
}) => {
  return (
    <>
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
      
      {/* Dots navigation */}
      <div className="flex justify-center mt-5 md:mt-6 space-x-2">
        {Array.from({ length: imagesCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              resetShowAfter();
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === index ? 'bg-primary scale-125' : 'bg-gray-300'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};
