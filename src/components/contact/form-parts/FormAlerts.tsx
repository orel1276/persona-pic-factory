
import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertTriangle, FileCheck } from 'lucide-react';

interface FormAlertsProps {
  formStatus: 'idle' | 'submitting' | 'success' | 'error';
  wasSubmittedSuccessfully: boolean;
  errorMessage: string | null;
  isTestingMode?: boolean; // Add a flag for testing mode
}

export const FormAlerts = ({ 
  formStatus, 
  wasSubmittedSuccessfully, 
  errorMessage,
  isTestingMode = false
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
        <Alert className={`mb-6 ${isTestingMode ? 'bg-yellow-900/30 border-yellow-500' : 'bg-green-900/30 border-green-500'} text-white`}>
          {isTestingMode ? (
            <FileCheck className="h-5 w-5 text-yellow-500" />
          ) : (
            <CheckCircle className="h-5 w-5 text-green-500" />
          )}
          <AlertTitle>
            {isTestingMode 
              ? 'הפרטים נשמרו בהצלחה!' 
              : 'הטופס נשלח בהצלחה!'}
          </AlertTitle>
          <AlertDescription>
            {isTestingMode 
              ? 'פרטי הטופס נשמרו במערכת. בשלב זה, המייל לא יישלח בפועל בגלל הגבלות של חשבון הנסיון.' 
              : 'תודה שפנית אלינו, נחזור אליך בהקדם.'}
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
                'שגיאת הרשאות בשרת - אנא נסה שוב או צור קשר דרך וואטסאפ.' :
                'אם הבעיה נמשכת, אנא צור קשר ישירות בוואטסאפ'}
            </div>
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};
