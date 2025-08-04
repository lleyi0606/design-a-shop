import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";
import productGlass from "@/assets/product-glass.jpg";
import productSoap from "@/assets/product-soap.jpg";
import productBottle from "@/assets/product-bottle.jpg";
import productStrawCleaner from "@/assets/product-straw-cleaner.png";

const allProducts = [
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
  {
    id: "5",
    name: "Bamboo Utensil Set",
    price: 12.99,
    image: productGlass,
  },
  {
    id: "6",
    name: "Organic Cotton Towels",
    price: 18.50,
    image: productSoap,
  },
  {
    id: "7",
    name: "Hemp Storage Basket",
    price: 22.00,
    image: productBottle,
  },
  {
    id: "8",
    name: "Natural Dish Brush",
    price: 8.75,
    image: productStrawCleaner,
  },
];

type SortOption = "name-asc" | "name-desc" | "price-asc" | "price-desc";

const AllProducts = () => {
  const [sortBy, setSortBy] = useState<SortOption>("name-asc");
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: controlsRef, isVisible: controlsVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: buttonRef, isVisible: buttonVisible } = useScrollAnimation<HTMLDivElement>();

  const getSortedProducts = () => {
    const productsCopy = [...allProducts];
    
    switch (sortBy) {
      case "name-asc":
        return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return productsCopy.sort((a, b) => b.name.localeCompare(a.name));
      case "price-asc":
        return productsCopy.sort((a, b) => a.price - b.price);
      case "price-desc":
        return productsCopy.sort((a, b) => b.price - a.price);
      default:
        return productsCopy;
    }
  };

  const sortedProducts = getSortedProducts();
  const { containerRef: gridRef, visibleItems } = useStaggeredScrollAnimation<HTMLDivElement>(sortedProducts.length);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-24 bg-amber-25">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className={`text-4xl md:text-5xl font-light text-amber-900 mb-6 tracking-tight transition-all duration-1200 delay-200 ease-out ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}>
              All Products
            </h1>
            <p className={`text-lg text-amber-700 max-w-2xl mx-auto leading-relaxed font-normal transition-all duration-1000 delay-400 ease-out ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              Discover our complete collection of sustainable home essentials, 
              carefully crafted for conscious living.
            </p>
          </div>

          {/* Sorting Controls */}
          <div 
            ref={controlsRef}
            className={`flex justify-between items-center mb-12 transition-all duration-1000 ease-out ${
              controlsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-amber-700 font-medium">
              Showing {sortedProducts.length} products
            </p>
            
            <div className="flex items-center gap-4">
              <span className="text-amber-700 font-medium">Sort by:</span>
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                <SelectTrigger className="w-48 border-amber-200 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                  <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {sortedProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-1000 ease-out ${
                  visibleItems[index] 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* Load More Button (for future pagination) */}
          <div 
            ref={buttonRef}
            className={`text-center transition-all duration-1000 ease-out ${
              buttonVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Button className="border border-amber-900 text-amber-900 bg-transparent hover:bg-amber-900 hover:text-amber-50 px-8 py-3 rounded-none text-sm font-medium tracking-wide transition-colors">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllProducts;
