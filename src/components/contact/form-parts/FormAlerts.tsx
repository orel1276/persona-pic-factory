
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
  // Convert newline characters in error messages to JSX <br> elements
  const formatErrorMessage = (message: string) => {
    return message.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < message.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

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
            {formatErrorMessage(errorMessage)}
            <div className="mt-2">
              {errorMessage.includes('auth/unauthorized') ? 
                'נא להתחבר למערכת כדי לשלוח טופס יצירת קשר.' :
                'אם הבעיה נמשכת, אנא צור קשר ישירות בוואטסאפ'}
            </div>
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};
