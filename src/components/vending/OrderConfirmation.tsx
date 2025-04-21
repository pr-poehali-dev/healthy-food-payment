
import { Separator } from "@/components/ui/separator";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface OrderConfirmationProps {
  products: Product[];
  total: number;
}

export const OrderConfirmation = ({ products, total }: OrderConfirmationProps) => {
  return (
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
          {products.map(product => (
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
  );
};
