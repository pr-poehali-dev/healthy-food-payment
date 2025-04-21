
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  position: string;
}

interface VendingProductListProps {
  onSelectProduct: (product: {id: number, name: string, price: number, quantity: number}) => void;
  selectedProducts: Array<{id: number, name: string, price: number, quantity: number}>;
  onRemoveProduct: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

export const VendingProductList = ({ 
  onSelectProduct, 
  selectedProducts, 
  onRemoveProduct, 
  onUpdateQuantity 
}: VendingProductListProps) => {
  const products: Product[] = [
    {
      id: 1,
      name: "Гранола ореховая",
      price: 160,
      description: "Натуральная гранола с орехами и семенами",
      category: "Закуски",
      image: "/placeholder.svg",
      position: "A1"
    },
    {
      id: 2,
      name: "Протеиновый батончик",
      price: 120,
      description: "Протеиновый батончик с шоколадом",
      category: "Закуски",
      image: "/placeholder.svg",
      position: "A2"
    },
    {
      id: 3,
      name: "Орехи миндаль",
      price: 180,
      description: "Обжаренный миндаль без соли",
      category: "Закуски",
      image: "/placeholder.svg",
      position: "A3"
    },
    {
      id: 4,
      name: "Фруктовый смузи",
      price: 220,
      description: "Свежий фруктовый смузи",
      category: "Напитки",
      image: "/placeholder.svg",
      position: "B1"
    },
    {
      id: 5,
      name: "Зеленый сок",
      price: 210,
      description: "Свежевыжатый сок из зелени и фруктов",
      category: "Напитки",
      image: "/placeholder.svg",
      position: "B2"
    },
    {
      id: 6,
      name: "Йогурт натуральный",
      price: 150,
      description: "Натуральный йогурт без добавок",
      category: "Десерты",
      image: "/placeholder.svg",
      position: "C1"
    }
  ];

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">Выберите продукты</h3>
        
        {selectedProducts.length > 0 && (
          <div className="mb-6 bg-[#F1F5F2] rounded-lg p-4">
            <h4 className="font-medium text-[#3C6255] mb-2">Выбранные продукты</h4>
            <div className="space-y-3">
              {selectedProducts.map(product => (
                <div key={product.id} className="flex items-center justify-between">
                  <div className="flex-1">
                    <span className="font-medium">{product.name}</span>
                    <div className="text-sm text-[#61876E]">{product.price} ₽ за шт.</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-7 w-7 rounded-full border-[#61876E]"
                      onClick={() => onUpdateQuantity(product.id, product.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-6 text-center">{product.quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-7 w-7 rounded-full border-[#61876E]"
                      onClick={() => onUpdateQuantity(product.id, product.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {categories.map(category => (
          <div key={category} className="mb-6">
            <h4 className="font-medium text-[#3C6255] mb-2">{category}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products
                .filter(product => product.category === category)
                .map(product => (
                  <div 
                    key={product.id} 
                    className="border rounded-lg p-4 hover:border-[#3C6255] transition-all"
                  >
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-[#EDF1D6] rounded-lg flex items-center justify-center">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium">{product.name}</h5>
                        <p className="text-sm text-[#61876E] mb-2">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="font-semibold">{product.price} ₽</div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-[#EDF1D6] px-2 py-1 rounded text-[#3C6255]">
                              {product.position}
                            </span>
                            <Button 
                              onClick={() => onSelectProduct({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                quantity: 1
                              })}
                              size="sm"
                              className="bg-[#3C6255] hover:bg-[#61876E]"
                            >
                              Выбрать
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
