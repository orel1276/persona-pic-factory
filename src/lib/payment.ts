
import { useToast } from "@/hooks/use-toast";

interface PaymentOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const usePayment = () => {
  const { toast } = useToast();

  const redirectToPayment = async (options?: PaymentOptions) => {
    try {
      // For demonstration purposes - this would normally point to your Stripe checkout
      // Replace this URL with your actual payment URL when available
      const paymentUrl = "https://buy.stripe.com/test_yourCheckoutLink";
      
      // In a real implementation, this would call your edge function:
      // const { data, error } = await supabase.functions.invoke('create-checkout');
      // if (error) throw new Error(error.message);
      // window.location.href = data.url;
      
      // For now, we'll redirect directly
      window.location.href = paymentUrl;
      
      options?.onSuccess?.();
    } catch (error) {
      console.error("Payment redirect failed:", error);
      toast({
        title: "שגיאה בהפניה לדף התשלום",
        description: "אירעה שגיאה בעת הניסיון להפנות לדף התשלום. אנא נסה שוב מאוחר יותר.",
        variant: "destructive",
      });
      options?.onError?.(error as Error);
    }
  };

  return { redirectToPayment };
};
