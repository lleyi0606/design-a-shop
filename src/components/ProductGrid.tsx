import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import productGlass from "@/assets/product-glass.jpg";
import productSoap from "@/assets/product-soap.jpg";
import productBottle from "@/assets/product-bottle.jpg";
import productStrawCleaner from "@/assets/product-straw-cleaner.png";

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
  {
    id: "4",
    name: "Straw Cleaner",
    price: 3.50,
    image: productStrawCleaner,
    badge: "New",
  },
];


const ProductGrid = () => {
  return (
    <section id="shop" className="py-24 bg-amber-25">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-amber-900 mb-6 tracking-tight">
            New In
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto leading-relaxed font-normal">
            Explore our latest collection of sustainable home essentials, 
            carefully curated for conscious living.
          </p>
        </div>
        
        <Carousel opts={{ loop: true }} className="max-w-6xl mx-auto relative">
          <CarouselContent className="-ml-3 md:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-3 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <ProductCard {...product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12 z-20 bg-amber-50 border-amber-200 hover:bg-amber-100" />
          <CarouselNext className="-right-12 z-20 bg-amber-50 border-amber-200 hover:bg-amber-100" />
        </Carousel>

        <div className="text-center mt-16">
          <Button className="border border-amber-900 text-amber-900 bg-transparent hover:bg-amber-900 hover:text-amber-50 px-8 py-3 rounded-none text-sm font-medium tracking-wide transition-colors">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;