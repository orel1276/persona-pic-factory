
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, CreditCard, CheckCircle } from 'lucide-react';

const Payment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState<'details' | 'checkout'>('details');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "שגיאה",
        description: "אנא מלא את כל השדות הנדרשים",
        variant: "destructive"
      });
      return;
    }
    
    // Proceed to checkout step
    setPaymentStep('checkout');
  };

  const processPayment = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      
      // Redirect to success page after payment
      navigate('/payment-success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4" dir="rtl">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            חבילת תדמית מקצועית
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            מרחק של לחיצת כפתור מהתדמית המקצועית שתמשוך אליך לקוחות
          </p>
        </div>

        <Card className="p-8 shadow-lg border-border/30">
          {paymentStep === 'details' ? (
            <>
              <div className="mb-8 border-b border-border/20 pb-6">
                <h2 className="text-2xl font-bold mb-6">סיכום הזמנה</h2>
                
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg">חבילת תדמית מקצועית</span>
                  <span className="text-lg font-bold">₪349</span>
                </div>
                
                <div className="flex justify-between items-center text-sm text-foreground/70">
                  <span>תוקף: לצמיתות</span>
                  <span>10 תמונות AI מרהיבות</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">פרטי לקוח</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">שם מלא *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-border/30 rounded-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">אימייל *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-border/30 rounded-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">טלפון *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-border/30 rounded-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">כתובת</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-border/30 rounded-lg"
                  />
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full py-6 text-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700"
                  >
                    המשך לתשלום <ArrowRight className="ms-2" size={18} />
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">אמצעי תשלום</h2>
                <p className="text-foreground/70">
                  המשך לתשלום מאובטח עם כרטיס אשראי
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8 max-w-sm mx-auto border border-border/20">
                <div className="flex justify-between mb-3">
                  <span>סה"כ לתשלום:</span>
                  <span className="font-bold">₪349</span>
                </div>
                <div className="text-sm text-foreground/70 mb-4">
                  כולל מע"מ
                </div>
                
                <div className="flex items-center justify-center gap-2">
                  <CreditCard className="text-primary" size={20} />
                  <span>תשלום מאובטח בכרטיס אשראי</span>
                </div>
              </div>
              
              <Button 
                onClick={processPayment} 
                disabled={isProcessing}
                className="w-full py-6 text-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700"
              >
                {isProcessing ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin me-2"></div>
                    מעבד תשלום...
                  </div>
                ) : (
                  <>
                    לתשלום מאובטח <CheckCircle className="ms-2" size={18} />
                  </>
                )}
              </Button>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-foreground/60">
                <span>• תשלום בכרטיס אשראי ישראלי בלבד</span>
                <span>• תשלום מאובטח</span>
              </div>
            </div>
          )}
        </Card>
        
        <div className="text-center mt-6 text-sm text-foreground/60">
          <p>לשאלות ובירורים, צור קשר במייל: info@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
