
import React from 'react';

interface GalleryDescriptionProps {
  description: string;
  scrollToSection: (sectionId: string) => void;
}

export const GalleryDescription: React.FC<GalleryDescriptionProps> = ({
  description,
  scrollToSection
}) => {
  return (
    <>
      <div className="p-5 md:p-6 text-center">
        <h3 className="text-xl font-bold text-primary mb-2">
          {description}
        </h3>
        <p className="text-muted-foreground">
          <strong>זה לא רק איך שאתה נראה</strong>, זה איך שהלקוחות תופסים אותך
        </p>
      </div>
      
      {/* CTA */}
      <div className="text-center mt-12 md:mt-16 px-4 md:px-0">
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
    </>
  );
};
