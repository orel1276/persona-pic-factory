
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

type BeforeAfterCard = {
  id: number;
  beforeImage: string;
  afterImage: string;
  title: string;
};

const BeforeAfterResults = () => {
  const [activeStates, setActiveStates] = useState<{[key: number]: boolean}>({});
  const isMobile = useIsMobile();
  
  const beforeAfterCards: BeforeAfterCard[] = [
    {
      id: 1,
      beforeImage: "/lovable-uploads/e3cca4db-8fba-49dd-ba8b-9a1e161caa6b.png",
      afterImage: "/lovable-uploads/e5e1d8f0-83ff-4854-a2b0-7426c9181c65.png",
      title: "תמונת פרופיל עסקית",
    },
    {
      id: 2,
      beforeImage: "/lovable-uploads/d880f8be-861b-42de-912d-0c9268eaa245.png",
      afterImage: "/lovable-uploads/21f854b3-6b2e-4140-a6cc-776dde6ba2c4.png",
      title: "תדמית אישית מקצועית",
    },
    {
      id: 3,
      beforeImage: "/lovable-uploads/7cb08be2-c284-43f9-9056-3d48b4f8e0d5.png",
      afterImage: "/lovable-uploads/4e1b1ec2-2ba4-4607-b401-6e1087bcedfc.png",
      title: "נראות סטודיו מושלמת",
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCardInteraction = (cardId: number) => {
    // On mobile, toggle the state on tap
    if (isMobile) {
      setActiveStates(prev => ({
        ...prev,
        [cardId]: !prev[cardId]
      }));
    }
  };

  const handleMouseEnter = (cardId: number) => {
    if (!isMobile) {
      setActiveStates(prev => ({
        ...prev,
        [cardId]: true
      }));
    }
  };

  const handleMouseLeave = (cardId: number) => {
    if (!isMobile) {
      setActiveStates(prev => ({
        ...prev,
        [cardId]: false
      }));
    }
  };

  return (
    <section className="py-10 md:py-16 px-4 md:px-6 bg-white text-center">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-10">
          לפני ואחרי – התמונות שמוכרות
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {beforeAfterCards.map((card) => (
            <div 
              key={card.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              onClick={() => handleCardInteraction(card.id)}
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={() => handleMouseLeave(card.id)}
            >
              <div className="relative h-64 md:h-72 w-full overflow-hidden">
                <img 
                  src={activeStates[card.id] ? card.afterImage : card.beforeImage}
                  alt={activeStates[card.id] ? "תמונה אחרי" : "תמונה לפני"} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white font-bold">
                    {activeStates[card.id] ? "אחרי" : "לפני"}
                  </p>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-gray-700 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500">
                  {activeStates[card.id] ? 
                    "עבר עריכת תדמית מקצועית" : 
                    (isMobile ? "לחץ על התמונה לראות את ההבדל" : "עבור על התמונה כדי לראות את ההבדל")}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={scrollToContact}
          className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg w-full md:w-auto"
        >
          רוצה תמונות כאלה? לחץ כאן
        </button>
      </div>
    </section>
  );
};

export default BeforeAfterResults;
