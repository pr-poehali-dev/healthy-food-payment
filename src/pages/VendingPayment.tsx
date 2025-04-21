
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Header } from "@/components/vending/Header";
import { Footer } from "@/components/vending/Footer";
import { ProductSelectStep } from "@/components/vending/ProductSelectStep";
import { PaymentStep } from "@/components/vending/PaymentStep";
import { OrderConfirmation } from "@/components/vending/OrderConfirmation";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const VendingPayment = () => {
  const [step, setStep] = useState<"product" | "payment" | "confirmation">("product");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "phone" | "qr">("card");
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  
  const handleProductSelect = (product: Product) => {
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
      <Header 
        title="ЭкоАвтомат" 
        location="Автомат №143 | ТЦ &quot;Зеленый&quot;" 
      />

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
            <ProductSelectStep 
              selectedProducts={selectedProducts}
              onSelectProduct={handleProductSelect}
              onRemoveProduct={handleRemoveProduct}
              onUpdateQuantity={handleUpdateQuantity}
              onProceedToPayment={() => setStep("payment")}
              total={total}
            />
          )}
          
          {step === "payment" && (
            <PaymentStep 
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              onSubmitPayment={handleSubmitPayment}
              onBackToProducts={() => setStep("product")}
              total={total}
            />
          )}
          
          {step === "confirmation" && (
            <OrderConfirmation 
              products={selectedProducts}
              total={total}
            />
          )}
        </div>
      </main>

      <Footer supportPhone="8-800-123-45-67" />
    </div>
  );
};

export default VendingPayment;
