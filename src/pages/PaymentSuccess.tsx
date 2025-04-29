
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background" dir="rtl">
      <div className="max-w-md w-full bg-slate-800/60 p-8 rounded-2xl border border-border/50 shadow-xl text-center">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-primary mb-4">התשלום התקבל בהצלחה!</h1>
        
        <p className="text-foreground/80 mb-8">
          תודה על הרכישה! אנו מתחילים לבנות את התדמית שלך ממש עכשיו.
          המוצר שלך יהיה מוכן בתוך 24 שעות, ואנו ניצור איתך קשר כשהוא מוכן.
        </p>
        
        <Link to="/">
          <Button className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white py-2 px-6 rounded-full hover:shadow-lg transition-all">
            חזרה לדף הבית
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
