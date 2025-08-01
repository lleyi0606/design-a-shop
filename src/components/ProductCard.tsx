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
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {badge && (
          <Badge 
            variant="secondary" 
            className="absolute top-3 left-3 bg-accent text-accent-foreground"
          >
            {badge}
          </Badge>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <Button 
            variant="shop" 
            className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-sm text-card-foreground mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-lg font-semibold text-primary">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;