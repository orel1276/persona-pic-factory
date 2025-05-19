
import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface BeforeAfterImageProps {
  before: string;
  after: string;
  description: string;
  style?: string;
  showAfter: boolean | null;
  toggleAfterImage: () => void;
  isMobile: boolean;
}

export const BeforeAfterImage: React.FC<BeforeAfterImageProps> = ({
  before,
  after,
  description,
  style,
  showAfter,
  toggleAfterImage,
  isMobile
}) => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Before image */}
      <div 
        className="w-full md:w-1/2 relative"
        onClick={toggleAfterImage}
      >
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-primary py-1 px-3 rounded-full text-sm font-medium z-10">
          איך אתה נראה עכשיו
        </div>
        <img 
          src={before} 
          alt="Before" 
          className={cn(
            "w-full h-80 md:h-[500px] object-cover transition-transform duration-500 hover:scale-105",
            isMobile && showAfter === true ? "hidden" : "block"
          )}
        />
        {isMobile && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
            <div className="bg-white text-primary font-bold py-2 px-4 rounded-lg shadow-lg">
              לחץ לראות אחרי
            </div>
          </div>
        )}
        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm text-gray-800 py-1 px-3 rounded-md text-sm font-medium z-10">
          {isMobile ? "לחץ על התמונה לראות אחרי" : "עבור על התמונה כדי לראות את ההבדל"}
        </div>
      </div>
      
      {/* After image */}
      <div 
        className="w-full md:w-1/2 relative"
        onClick={toggleAfterImage}
      >
        <div className="absolute top-4 right-4 bg-primary text-white py-1 px-3 rounded-full text-sm font-medium z-10">
          איך אתה יכול להראות
        </div>
        {style && (
          <div className="absolute top-4 left-4 bg-sky-500 text-white py-1 px-3 rounded-full text-sm font-medium z-10">
            {style}
          </div>
        )}
        <img 
          src={after} 
          alt="After"
          className={cn(
            "w-full h-80 md:h-[500px] object-cover transition-transform duration-500 hover:scale-105",
            isMobile ? (showAfter === true ? "block" : "hidden") : "block"
          )}
        />
        {isMobile && showAfter === true && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
            <div className="bg-white text-primary font-bold py-2 px-4 rounded-lg shadow-lg">
              לחץ לחזור ללפני
            </div>
          </div>
        )}
        <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm text-gray-800 py-1 px-3 rounded-md text-sm font-medium z-10">
          עבור עריכת תדמית מקצועית
        </div>
      </div>
    </div>
  );
};
