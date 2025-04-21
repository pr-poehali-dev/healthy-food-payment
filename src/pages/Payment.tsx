
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PaymentForm } from "@/components/PaymentForm";
import { OrderSummary } from "@/components/OrderSummary";
import { DeliveryOptions } from "@/components/DeliveryOptions";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const Payment = () => {
  const [step, setStep] = useState<"delivery" | "payment" | "confirmation">("delivery");
  
  const handleSubmitOrder = () => {
    toast.success("Заказ успешно оплачен!", {
      description: "Скоро с вами свяжется менеджер для подтверждения"
    });
  };

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      <Toaster />
      <header className="bg-white shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-b.svg" alt="Эко Еда" className="h-10" />
            <h1 className="text-xl font-semibold text-[#3C6255]">ЭкоЕда</h1>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li><a href="/" className="text-[#3C6255] hover:text-[#61876E] transition-colors">Главная</a></li>
              <li><a href="#" className="text-[#3C6255] hover:text-[#61876E] transition-colors">Каталог</a></li>
              <li><a href="#" className="text-[#3C6255] hover:text-[#61876E] transition-colors">О нас</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container py-8">
        <h2 className="text-3xl font-bold text-[#3C6255] mb-8">Оформление заказа</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-6">
                <div className={`rounded-full w-8 h-8 flex items-center justify-center mr-2 ${step === "delivery" ? "bg-[#3C6255] text-white" : "bg-[#EDF1D6] text-[#3C6255]"}`}>1</div>
                <span className="mr-4 font-medium">Доставка</span>
                <div className="h-[2px] flex-grow bg-[#EDF1D6]" />
                <div className={`rounded-full w-8 h-8 flex items-center justify-center mx-2 ${step === "payment" ? "bg-[#3C6255] text-white" : "bg-[#EDF1D6] text-[#3C6255]"}`}>2</div>
                <span className="mr-4 font-medium">Оплата</span>
                <div className="h-[2px] flex-grow bg-[#EDF1D6]" />
                <div className={`rounded-full w-8 h-8 flex items-center justify-center ml-2 ${step === "confirmation" ? "bg-[#3C6255] text-white" : "bg-[#EDF1D6] text-[#3C6255]"}`}>3</div>
                <span className="font-medium">Подтверждение</span>
              </div>
              
              {step === "delivery" && (
                <DeliveryOptions onContinue={() => setStep("payment")} />
              )}
              
              {step === "payment" && (
                <PaymentForm 
                  onBack={() => setStep("delivery")} 
                  onSubmit={() => setStep("confirmation")} 
                />
              )}
              
              {step === "confirmation" && (
                <div className="space-y-6">
                  <div className="p-4 bg-[#EDF1D6] rounded-md">
                    <h3 className="font-medium text-[#3C6255] mb-2">Ваш заказ готов к оплате</h3>
                    <p className="text-sm text-[#61876E]">Пожалуйста, проверьте данные заказа и нажмите кнопку "Оплатить".</p>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setStep("payment")}
                      className="border-[#3C6255] text-[#3C6255]"
                    >
                      Назад
                    </Button>
                    <Button 
                      onClick={handleSubmitOrder}
                      className="bg-[#3C6255] hover:bg-[#61876E]"
                    >
                      Оплатить заказ
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </main>

      <footer className="bg-[#3C6255] text-white py-8 mt-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">ЭкоЕда</h3>
              <p className="text-sm text-[#EDF1D6]">Полезное питание для здорового образа жизни</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Контакты</h3>
              <p className="text-sm mb-2">Тел: +7 (800) 123-45-67</p>
              <p className="text-sm mb-2">Email: info@ecofood.ru</p>
              <p className="text-sm">Адрес: г. Москва, ул. Зеленая, 123</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-[#EDF1D6] transition-colors">ВК</a>
                <a href="#" className="text-white hover:text-[#EDF1D6] transition-colors">Телеграм</a>
                <a href="#" className="text-white hover:text-[#EDF1D6] transition-colors">Инстаграм</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-[#61876E] text-sm text-center text-[#EDF1D6]">
            © 2023 ЭкоЕда. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Payment;
