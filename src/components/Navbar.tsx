
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { MessageCircle, Whatsapp } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/972528028988', '_blank');
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-6 lg:px-10",
        scrolled ? "py-2 bg-background/80 shadow-sm backdrop-blur-md" : "py-4 md:py-6"
      )}
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-300 font-rubik"
        >
          <span className="text-sky-400">Film</span><span className="text-primary">Kal</span>
        </a>
        
        {/* Updated WhatsApp Button */}
        <button 
          onClick={openWhatsApp}
          className="bg-[#25D366] hover:bg-[#00a859] text-white font-medium py-3 px-5 rounded-[30px] shadow-md transition-all duration-300 text-sm flex items-center gap-2 hover:scale-[1.03] hover:shadow-lg mr-5"
        >
          <Whatsapp size={16} />
          יש לך שאלה? דבר איתי!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
