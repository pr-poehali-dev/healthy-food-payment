
import { Separator } from "@/components/ui/separator";

export const OrderSummary = () => {
  const orderItems = [
    { id: 1, name: "Гранола ореховая", price: 650, quantity: 2 },
    { id: 2, name: "Смузи-боул асаи", price: 490, quantity: 1 },
    { id: 3, name: "Протеиновый батончик", price: 220, quantity: 3 }
  ];
  
  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const delivery = 300;
  const total = subtotal + delivery;
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium mb-4">Ваш заказ</h3>
      
      <div className="space-y-4">
        {orderItems.map((item) => (
          <div key={item.id} className="flex justify-between">
            <div>
              <p className="font-medium text-[#3C6255]">{item.name}</p>
              <p className="text-sm text-[#61876E]">Количество: {item.quantity}</p>
            </div>
            <p className="font-medium">{item.price * item.quantity} ₽</p>
          </div>
        ))}
      </div>
      
      <Separator className="my-4" />
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <p>Подытог:</p>
          <p>{subtotal} ₽</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Доставка:</p>
          <p>{delivery} ₽</p>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex justify-between font-bold text-lg">
        <p>Итого:</p>
        <p className="text-[#3C6255]">{total} ₽</p>
      </div>
      
      <div className="mt-6 p-4 bg-[#EDF1D6] rounded-md">
        <h4 className="font-medium text-[#3C6255] mb-1">Промокод</h4>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Введите промокод" 
            className="flex-1 px-3 py-2 border border-[#61876E] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#3C6255]"
          />
          <button className="px-3 py-2 bg-[#3C6255] text-white rounded-md text-sm hover:bg-[#61876E] transition-colors">
            Применить
          </button>
        </div>
      </div>
    </div>
  );
};
