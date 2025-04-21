
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CreditCard, Smartphone, QrCode } from "lucide-react";

interface PaymentMethodSelectorProps {
  paymentMethod: "card" | "phone" | "qr";
  setPaymentMethod: (method: "card" | "phone" | "qr") => void;
}

export const PaymentMethodSelector = ({ 
  paymentMethod, 
  setPaymentMethod 
}: PaymentMethodSelectorProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Выберите способ оплаты</h3>
      
      <RadioGroup 
        value={paymentMethod} 
        onValueChange={(value) => setPaymentMethod(value as "card" | "phone" | "qr")}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PaymentMethodOption 
            id="card"
            icon={<CreditCard className="h-8 w-8 text-[#3C6255]" />}
            title="Банковская карта"
            description="Приложите или вставьте карту"
            isSelected={paymentMethod === "card"}
          />
          
          <PaymentMethodOption 
            id="phone"
            icon={<Smartphone className="h-8 w-8 text-[#3C6255]" />}
            title="Телефон (NFC)"
            description="Приложите телефон к терминалу"
            isSelected={paymentMethod === "phone"}
          />
          
          <PaymentMethodOption 
            id="qr"
            icon={<QrCode className="h-8 w-8 text-[#3C6255]" />}
            title="QR-код"
            description="Сканируйте для оплаты"
            isSelected={paymentMethod === "qr"}
          />
        </div>
      </RadioGroup>
    </div>
  );
};

interface PaymentMethodOptionProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  isSelected: boolean;
}

const PaymentMethodOption = ({ 
  id, 
  icon, 
  title, 
  description, 
  isSelected 
}: PaymentMethodOptionProps) => {
  return (
    <div className={`flex flex-col items-center border rounded-lg p-4 cursor-pointer transition-all ${isSelected ? "border-[#3C6255] bg-[#F1F5F2]" : "border-gray-200"}`}>
      <RadioGroupItem value={id} id={id} className="sr-only" />
      <Label htmlFor={id} className="cursor-pointer flex flex-col items-center gap-2">
        {icon}
        <span className="font-medium">{title}</span>
        <span className="text-xs text-center text-gray-500">{description}</span>
      </Label>
    </div>
  );
};
