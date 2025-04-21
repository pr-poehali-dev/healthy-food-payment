
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { CreditCard, Smartphone, QrCode } from "lucide-react";
import { VendingProductList } from "@/components/VendingProductList";
import { VendingPaymentForm } from "@/components/VendingPaymentForm";

const VendingPayment = () => {
  const [step, setStep] = useState<"product" | "payment" | "confirmation">("product");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "phone" | "qr">("card");
  const [selectedProducts, setSelectedProducts] = useState<Array<{id: number, name: string, price: number, quantity: number}>>([]);
  
  const handleProductSelect = (product: {id: number, name: string, price: number, quantity: number}) => {
    const existing = selectedProducts.find(p => p.id === product.id);
    
    if (existing) {
      setSelectedProducts(selectedProducts.map(p => 
        p.id === product.id ? {...p, quantity: p.quantity + 1} : p
      ));
    } else {
      setSelectedProducts([...selectedProducts, {...product, quantity: 1}]);
    }
    
    toast.success(`Добавлено: ${product.name}`);
  };
  
  const handleRemoveProduct = (id: number) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== id));
  };
  
  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveProduct(id);
      return;
    }
    
    setSelectedProducts(selectedProducts.map(p => 
      p.id === id ? {...p, quantity} : p
    ));
  };
  
  const total = selectedProducts.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const handleSubmitPayment = () => {
    setStep("confirmation");
    setTimeout(() => {
      toast.success("Платеж успешно обработан!", {
        description: "Пожалуйста, заберите ваш товар из автомата"
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-[#F1F5F2] flex flex-col">
      <header className="bg-[#3C6255] text-white py-4 shadow-md">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold">ЭкоАвтомат</h1>
            </div>
            <div className="text-sm bg-[#EDF1D6] text-[#3C6255] px-3 py-1 rounded-full">
              Автомат №143 | ТЦ "Зеленый"
            </div>
          </div>
        </div>
      </header>

      <main className="container py-6 flex-1">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 bg-[#EDF1D6] border-b border-[#61876E]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#3C6255]">Покупка в ЭкоАвтомате</h2>
              {step !== "product" && (
                <Button 
                  variant="ghost" 
                  onClick={() => setStep("product")}
                  className="text-[#3C6255]"
                >
                  Назад к выбору
                </Button>
              )}
            </div>
          </div>
          
          {step === "product" && (
            <div className="p-6">
              <VendingProductList 
                onSelectProduct={handleProductSelect}
                selectedProducts={selectedProducts}
                onRemoveProduct={handleRemoveProduct}
                onUpdateQuantity={handleUpdateQuantity}
              />
              
              {selectedProducts.length > 0 && (
                <div className="mt-6">
                  <Separator className="mb-4" />
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">Итого: {total} ₽</div>
                    <Button 
                      onClick={() => setStep("payment")} 
                      className="bg-[#3C6255] hover:bg-[#61876E]"
                    >
                      Перейти к оплате
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {step === "payment" && (
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Выберите способ оплаты</h3>
              
              <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as "card" | "phone" | "qr")}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className={`flex flex-col items-center border rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === "card" ? "border-[#3C6255] bg-[#F1F5F2]" : "border-gray-200"}`}>
                    <RadioGroupItem value="card" id="card" className="sr-only" />
                    <Label htmlFor="card" className="cursor-pointer flex flex-col items-center gap-2">
                      <CreditCard className="h-8 w-8 text-[#3C6255]" />
                      <span className="font-medium">Банковская карта</span>
                      <span className="text-xs text-center text-gray-500">Приложите или вставьте карту</span>
                    </Label>
                  </div>
                  
                  <div className={`flex flex-col items-center border rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === "phone" ? "border-[#3C6255] bg-[#F1F5F2]" : "border-gray-200"}`}>
                    <RadioGroupItem value="phone" id="phone" className="sr-only" />
                    <Label htmlFor="phone" className="cursor-pointer flex flex-col items-center gap-2">
                      <Smartphone className="h-8 w-8 text-[#3C6255]" />
                      <span className="font-medium">Телефон (NFC)</span>
                      <span className="text-xs text-center text-gray-500">Приложите телефон к терминалу</span>
                    </Label>
                  </div>
                  
                  <div className={`flex flex-col items-center border rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === "qr" ? "border-[#3C6255] bg-[#F1F5F2]" : "border-gray-200"}`}>
                    <RadioGroupItem value="qr" id="qr" className="sr-only" />
                    <Label htmlFor="qr" className="cursor-pointer flex flex-col items-center gap-2">
                      <QrCode className="h-8 w-8 text-[#3C6255]" />
                      <span className="font-medium">QR-код</span>
                      <span className="text-xs text-center text-gray-500">Сканируйте для оплаты</span>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
              
              <Separator className="my-6" />
              
              <VendingPaymentForm 
                paymentMethod={paymentMethod} 
                onSubmit={handleSubmitPayment}
                total={total}
              />
            </div>
          )}
          
          {step === "confirmation" && (
            <div className="p-6 text-center">
              <div className="animate-pulse mb-6">
                <div className="mx-auto w-24 h-24 rounded-full bg-[#EDF1D6] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#3C6255]"></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#3C6255] mb-2">Обработка платежа</h3>
              <p className="text-[#61876E] mb-6">Пожалуйста, подождите...</p>
              
              <div className="max-w-xs mx-auto p-4 bg-[#EDF1D6] rounded-md text-left">
                <h4 className="font-medium text-[#3C6255] mb-2">Информация о заказе:</h4>
                <ul className="space-y-1 text-sm">
                  {selectedProducts.map(product => (
                    <li key={product.id} className="flex justify-between">
                      <span>{product.name} x{product.quantity}</span>
                      <span>{product.price * product.quantity} ₽</span>
                    </li>
                  ))}
                </ul>
                <Separator className="my-2" />
                <div className="font-bold flex justify-between">
                  <span>Итого:</span>
                  <span>{total} ₽</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-[#3C6255] text-white py-4 mt-auto">
        <div className="container text-center text-sm">
          <p>© 2023 ЭкоАвтомат. Все права защищены.</p>
          <p className="text-[#EDF1D6] mt-1">Техническая поддержка: 8-800-123-45-67</p>
        </div>
      </footer>
    </div>
  );
};

export default VendingPayment;
