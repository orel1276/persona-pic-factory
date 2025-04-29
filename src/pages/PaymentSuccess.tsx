
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 flex items-center justify-center" dir="rtl">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-primary mb-4">
          התשלום התקבל בהצלחה!
        </h1>
        
        <p className="text-foreground/70 mb-8">
          תודה על הרכישה! הודעת אימות נשלחה לכתובת האימייל שלך.
          אנו ניצור איתך קשר בהקדם להמשך התהליך.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-right">
          <div className="mb-3">
            <span className="font-medium">מספר הזמנה:</span>
            <span className="text-foreground/70 ml-2">{Math.floor(100000 + Math.random() * 900000)}</span>
          </div>
          <div>
            <span className="font-medium">סכום:</span>
            <span className="text-foreground/70 ml-2">₪349</span>
          </div>
        </div>
        
        <Button
          onClick={() => navigate('/')}
          className="w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700"
        >
          חזרה לדף הבית <ArrowRight className="ms-2" size={16} />
        </Button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
