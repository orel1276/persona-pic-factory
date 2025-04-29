
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { usePayment } from '@/lib/payment';

const PaymentCanceled = () => {
  const { redirectToPayment } = usePayment();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background" dir="rtl">
      <div className="max-w-md w-full bg-slate-800/60 p-8 rounded-2xl border border-border/50 shadow-xl text-center">
        <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-primary mb-4">התשלום בוטל</h1>
        
        <p className="text-foreground/80 mb-8">
          התשלום שלך בוטל או לא הושלם. אם נתקלת בבעיה במהלך התהליך, אנחנו כאן לעזור.
          אתה יכול לנסות שוב או לחזור לדף הבית.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => redirectToPayment()}
            className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white py-2 px-6 rounded-full hover:shadow-lg transition-all"
          >
            נסה שוב
          </Button>
          
          <Link to="/">
            <Button 
              variant="outline" 
              className="border-foreground/20 text-foreground py-2 px-6 rounded-full hover:bg-foreground/5"
            >
              חזרה לדף הבית
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCanceled;
