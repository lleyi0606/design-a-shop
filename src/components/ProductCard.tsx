import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
}

const ProductCard = ({ name, price, image, badge }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-amber-50 rounded-lg">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {badge && (
          <Badge 
            className="absolute top-4 left-4 bg-amber-900 text-amber-50 text-xs font-medium tracking-wide px-3 py-1 rounded-none"
          >
            {badge}
          </Badge>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 flex items-center justify-center">
          <Button 
            className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-amber-50 text-amber-900 hover:bg-amber-900 hover:text-amber-50 px-6 py-2 rounded-full text-sm font-medium tracking-wide"
          >
            Enquire
          </Button>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-sm text-amber-700 mb-2 group-hover:text-amber-900 transition-colors font-medium tracking-wide">
          {name}
        </h3>
        <p className="text-base font-normal text-amber-900">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;