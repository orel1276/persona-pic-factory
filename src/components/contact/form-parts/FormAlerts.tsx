
import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertTriangle } from 'lucide-react';

interface FormAlertsProps {
  formStatus: 'idle' | 'submitting' | 'success' | 'error';
  wasSubmittedSuccessfully: boolean;
  errorMessage: string | null;
}

export const FormAlerts = ({ 
  formStatus, 
  wasSubmittedSuccessfully, 
  errorMessage 
}: FormAlertsProps) => {
  return (
    <>
      {formStatus === 'success' && wasSubmittedSuccessfully && (
        <Alert className="mb-6 bg-green-900/30 border-green-500 text-white">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <AlertTitle>הטופס נשלח בהצלחה!</AlertTitle>
          <AlertDescription>
            תודה שפנית אלינו, נחזור אליך בהקדם.
          </AlertDescription>
        </Alert>
      )}
      
      {formStatus === 'error' && errorMessage && (
        <Alert className="mb-6 bg-red-900/30 border-red-500 text-white">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <AlertTitle>שגיאה בשליחת הטופס</AlertTitle>
          <AlertDescription>
            {errorMessage}
            <div className="mt-2">
              אנא נסה שוב או צור קשר ישירות בוואטסאפ
            </div>
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};
