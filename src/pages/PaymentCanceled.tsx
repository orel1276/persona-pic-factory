
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { XCircle, ArrowRight } from 'lucide-react';

const PaymentCanceled = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 flex items-center justify-center" dir="rtl">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-red-100 p-3">
            <XCircle className="h-12 w-12 text-red-600" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-primary mb-4">
          התשלום בוטל
        </h1>
        
        <p className="text-foreground/70 mb-8">
          התשלום לא הושלם או בוטל. אם נתקלת בבעיה, אנא נסה שוב או צור איתנו קשר.
        </p>
        
        <div className="space-y-4">
          <Button
            onClick={() => navigate('/payment')}
            className="w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700"
          >
            נסה שוב <ArrowRight className="ms-2" size={16} />
          </Button>
          
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="w-full"
          >
            חזרה לדף הבית
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCanceled;
