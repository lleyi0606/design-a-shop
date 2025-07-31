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
    <Card className="group overflow-hidden bg-card border-border hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
      <div className="relative aspect-[3/4] overflow-hidden">
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
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-2xl font-semibold text-primary mb-4">
          ${price.toFixed(2)}
        </p>
        <Button variant="shop" className="w-full">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;