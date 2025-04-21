
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Smartphone, QrCode } from "lucide-react";

interface VendingPaymentFormProps {
  paymentMethod: "card" | "phone" | "qr";
  onSubmit: () => void;
  total: number;
}

export const VendingPaymentForm = ({ paymentMethod, onSubmit, total }: VendingPaymentFormProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  
  return (
    <div className="space-y-6">
      {paymentMethod === "card" && (
        <div className="space-y-4">
          <div className="bg-[#F1F5F2] p-6 rounded-lg text-center">
            <CreditCard className="h-16 w-16 text-[#3C6255] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#3C6255] mb-2">Приложите или вставьте карту</h3>
            <p className="text-[#61876E] mb-4">Поднесите карту к терминалу или вставьте ее в картоприемник</p>
            <div className="text-sm p-2 bg-white rounded border border-[#61876E] inline-block">
              Сумма к оплате: <span className="font-bold">{total} ₽</span>
            </div>
          </div>
          
          <Button 
            onClick={onSubmit}
            className="w-full bg-[#3C6255] hover:bg-[#61876E] py-6 text-lg"
          >
            Оплатить {total} ₽
          </Button>
        </div>
      )}
      
      {paymentMethod === "phone" && (
        <div className="space-y-4">
          <div className="grid gap-2 mb-4">
            <Label htmlFor="phone-number">Введите номер телефона для получения чека</Label>
            <Input 
              id="phone-number" 
              type="tel"
              placeholder="+7 (___) ___-__-__" 
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border-[#61876E] focus-visible:ring-[#3C6255]"
            />
          </div>
          
          <div className="bg-[#F1F5F2] p-6 rounded-lg text-center">
            <Smartphone className="h-16 w-16 text-[#3C6255] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#3C6255] mb-2">Приложите телефон</h3>
            <p className="text-[#61876E] mb-4">Поднесите телефон с включенным NFC к терминалу для оплаты</p>
            <div className="text-sm p-2 bg-white rounded border border-[#61876E] inline-block">
              Сумма к оплате: <span className="font-bold">{total} ₽</span>
            </div>
          </div>
          
          <Button 
            onClick={onSubmit}
            className="w-full bg-[#3C6255] hover:bg-[#61876E] py-6 text-lg"
          >
            Оплатить {total} ₽
          </Button>
        </div>
      )}
      
      {paymentMethod === "qr" && (
        <div className="space-y-4">
          <div className="bg-[#F1F5F2] p-6 rounded-lg text-center">
            <div className="mx-auto w-48 h-48 bg-white p-4 rounded-lg shadow-sm mb-4">
              <QrCode className="h-40 w-40 text-[#3C6255]" />
            </div>
            <h3 className="text-xl font-bold text-[#3C6255] mb-2">Сканируйте QR-код</h3>
            <p className="text-[#61876E] mb-4">Используйте камеру телефона или банковское приложение для сканирования</p>
            <div className="text-sm p-2 bg-white rounded border border-[#61876E] inline-block">
              Сумма к оплате: <span className="font-bold">{total} ₽</span>
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="qr-phone-number">Введите номер телефона для получения чека</Label>
            <Input 
              id="qr-phone-number" 
              type="tel"
              placeholder="+7 (___) ___-__-__" 
              className="border-[#61876E] focus-visible:ring-[#3C6255]"
            />
          </div>
          
          <Button 
            onClick={onSubmit}
            className="w-full bg-[#3C6255] hover:bg-[#61876E] py-6 text-lg"
          >
            Я оплатил(а)
          </Button>
        </div>
      )}
    </div>
  );
};
