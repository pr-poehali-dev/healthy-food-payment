
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { VendingPaymentForm } from "@/components/VendingPaymentForm";
import { PaymentMethodSelector } from "@/components/vending/PaymentMethodSelector";

interface PaymentStepProps {
  paymentMethod: "card" | "phone" | "qr";
  setPaymentMethod: (method: "card" | "phone" | "qr") => void;
  onSubmitPayment: () => void;
  onBackToProducts: () => void;
  total: number;
}

export const PaymentStep = ({
  paymentMethod,
  setPaymentMethod,
  onSubmitPayment,
  onBackToProducts,
  total
}: PaymentStepProps) => {
  return (
    <div className="p-6">
      <PaymentMethodSelector 
        paymentMethod={paymentMethod} 
        setPaymentMethod={setPaymentMethod} 
      />
      
      <Separator className="my-6" />
      
      <VendingPaymentForm 
        paymentMethod={paymentMethod} 
        onSubmit={onSubmitPayment}
        total={total}
      />

      <div className="mt-4">
        <Button 
          variant="ghost" 
          onClick={onBackToProducts} 
          className="text-[#3C6255]"
        >
          Вернуться к выбору продуктов
        </Button>
      </div>
    </div>
  );
};
