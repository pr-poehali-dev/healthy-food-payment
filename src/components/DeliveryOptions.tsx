
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Home, Store } from "lucide-react";

interface DeliveryOptionsProps {
  onContinue: () => void;
}

export const DeliveryOptions = ({ onContinue }: DeliveryOptionsProps) => {
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">("delivery");
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Способ получения</h3>
        <RadioGroup value={deliveryType} onValueChange={(value) => setDeliveryType(value as "delivery" | "pickup")}>
          <div className="flex flex-col gap-4">
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="delivery" id="delivery" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="delivery" className="flex items-center gap-2">
                  <Home className="h-4 w-4 text-[#3C6255]" />
                  Доставка
                </Label>
                <p className="text-sm text-muted-foreground">Доставим заказ по указанному адресу</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="pickup" id="pickup" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="pickup" className="flex items-center gap-2">
                  <Store className="h-4 w-4 text-[#3C6255]" />
                  Самовывоз
                </Label>
                <p className="text-sm text-muted-foreground">Заберите заказ из нашего магазина</p>
              </div>
            </div>
          </div>
        </RadioGroup>
      </div>
      
      <Separator />
      
      {deliveryType === "delivery" && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium mb-4">Адрес доставки</h3>
          
          <div className="grid gap-2">
            <Label htmlFor="city">Город</Label>
            <Input 
              id="city" 
              defaultValue="Москва" 
              className="border-[#61876E] focus-visible:ring-[#3C6255]"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="address">Адрес</Label>
            <Input 
              id="address" 
              placeholder="Улица, дом, квартира" 
              className="border-[#61876E] focus-visible:ring-[#3C6255]"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input 
                id="phone" 
                placeholder="+7 (___) ___-__-__" 
                className="border-[#61876E] focus-visible:ring-[#3C6255]"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="example@mail.ru" 
                className="border-[#61876E] focus-visible:ring-[#3C6255]"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="saveAddress" />
            <label
              htmlFor="saveAddress"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Сохранить адрес для будущих заказов
            </label>
          </div>
        </div>
      )}
      
      {deliveryType === "pickup" && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium mb-4">Пункт самовывоза</h3>
          
          <div className="grid gap-4">
            <div className="p-4 border border-[#EDF1D6] rounded-md cursor-pointer hover:bg-[#EDF1D6]/20 transition-colors">
              <div className="flex justify-between">
                <h4 className="font-medium text-[#3C6255]">ЭкоЕда на Тверской</h4>
                <span className="text-sm text-[#61876E]">2.5 км</span>
              </div>
              <p className="text-sm mt-1">г. Москва, ул. Тверская, д. 15</p>
              <p className="text-sm text-[#61876E] mt-2">Ежедневно: 10:00-22:00</p>
            </div>
            
            <div className="p-4 border border-[#EDF1D6] rounded-md cursor-pointer hover:bg-[#EDF1D6]/20 transition-colors">
              <div className="flex justify-between">
                <h4 className="font-medium text-[#3C6255]">ЭкоЕда в ТЦ "Метрополис"</h4>
                <span className="text-sm text-[#61876E]">5.1 км</span>
              </div>
              <p className="text-sm mt-1">г. Москва, Ленинградское шоссе, д. 16А</p>
              <p className="text-sm text-[#61876E] mt-2">Ежедневно: 10:00-22:00</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="grid gap-2">
              <Label htmlFor="pickup-phone">Телефон</Label>
              <Input 
                id="pickup-phone" 
                placeholder="+7 (___) ___-__-__" 
                className="border-[#61876E] focus-visible:ring-[#3C6255]"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="pickup-email">Email</Label>
              <Input 
                id="pickup-email" 
                type="email" 
                placeholder="example@mail.ru" 
                className="border-[#61876E] focus-visible:ring-[#3C6255]"
              />
            </div>
          </div>
        </div>
      )}
      
      <Button 
        onClick={onContinue}
        className="mt-4 bg-[#3C6255] hover:bg-[#61876E]"
      >
        Продолжить
      </Button>
    </div>
  );
};
