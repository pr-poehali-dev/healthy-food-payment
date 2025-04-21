
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { VendingProductList } from "@/components/VendingProductList";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ProductSelectStepProps {
  selectedProducts: Product[];
  onSelectProduct: (product: Product) => void;
  onRemoveProduct: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onProceedToPayment: () => void;
  total: number;
}

export const ProductSelectStep = ({
  selectedProducts,
  onSelectProduct,
  onRemoveProduct,
  onUpdateQuantity,
  onProceedToPayment,
  total
}: ProductSelectStepProps) => {
  return (
    <div className="p-6">
      <VendingProductList 
        onSelectProduct={onSelectProduct}
        selectedProducts={selectedProducts}
        onRemoveProduct={onRemoveProduct}
        onUpdateQuantity={onUpdateQuantity}
      />
      
      {selectedProducts.length > 0 && (
        <div className="mt-6">
          <Separator className="mb-4" />
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">Итого: {total} ₽</div>
            <Button 
              onClick={onProceedToPayment} 
              className="bg-[#3C6255] hover:bg-[#61876E]"
            >
              Перейти к оплате
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
