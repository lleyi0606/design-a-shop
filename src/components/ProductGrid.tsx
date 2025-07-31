import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import productGlass from "@/assets/product-glass.jpg";
import productSoap from "@/assets/product-soap.jpg";
import productBottle from "@/assets/product-bottle.jpg";

const products = [
  {
    id: "1",
    name: "Eco Glass",
    price: 5.50,
    image: productGlass,
    badge: "Best Seller",
  },
  {
    id: "2", 
    name: "Seaweed Natural Soap",
    price: 6.50,
    image: productSoap,
  },
  {
    id: "3",
    name: "Stainless Steel Bottle", 
    price: 25.00,
    image: productBottle,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            New In
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest collection of sustainable home essentials, 
            carefully curated for conscious living.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;