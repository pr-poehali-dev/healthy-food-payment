
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Landmark, Clock } from "lucide-react";

interface PaymentFormProps {
  onBack: () => void;
  onSubmit: () => void;
}

export const PaymentForm = ({ onBack, onSubmit }: PaymentFormProps) => {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card");
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Способ оплаты</h3>
        <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as "card" | "bank")}>
          <div className="flex flex-col gap-4">
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="card" id="card" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="card" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-[#3C6255]" />
                  Банковская карта
                </Label>
                <p className="text-sm text-muted-foreground">Visa, Mastercard, Мир</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="bank" id="bank" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="bank" className="flex items-center gap-2">
                  <Landmark className="h-4 w-4 text-[#3C6255]" />
                  Банковский перевод
                </Label>
                <p className="text-sm text-muted-foreground">Оплата по реквизитам</p>
              </div>
            </div>
          </div>
        </RadioGroup>
      </div>
      
      <Separator />
      
      {paymentMethod === "card" && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium mb-4">Данные карты</h3>
          
          <div className="grid gap-2">
            <Label htmlFor="card-number">Номер карты</Label>
            <Input 
              id="card-number" 
              placeholder="0000 0000 0000 0000" 
              className="border-[#61876E] focus-visible:ring-[#3C6255]"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="expiry">Срок действия</Label>
              <div className="relative">
                <Input 
                  id="expiry" 
                  placeholder="ММ/ГГ" 
                  className="border-[#61876E] focus-visible:ring-[#3C6255]"
                />
                <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#61876E]" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cvv">CVV/CVC</Label>
              <Input 
                id="cvv" 
                placeholder="***" 
                type="password" 
                className="border-[#61876E] focus-visible:ring-[#3C6255]"
              />
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="card-holder">Владелец карты</Label>
            <Input 
              id="card-holder" 
              placeholder="ИМЯ ФАМИЛИЯ" 
              className="border-[#61876E] focus-visible:ring-[#3C6255]"
            />
          </div>
        </div>
      )}
      
      {paymentMethod === "bank" && (
        <div className="space-y-4">
          <div className="p-4 bg-[#EDF1D6] rounded-md">
            <h3 className="font-medium text-[#3C6255] mb-2">Банковские реквизиты</h3>
            <p className="text-sm text-[#61876E]">После оформления заказа вам будут отправлены реквизиты для оплаты.</p>
          </div>
        </div>
      )}
      
      <div className="flex gap-4">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="border-[#3C6255] text-[#3C6255]"
        >
          Назад
        </Button>
        <Button 
          onClick={onSubmit}
          className="bg-[#3C6255] hover:bg-[#61876E]"
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
};
