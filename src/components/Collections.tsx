import kitchenImage from "@/assets/collection-kitchen.jpg";
import bathImage from "@/assets/collection-bath.jpg";
import onTheGoImage from "@/assets/collection-onthego.jpg";

const collections = [
  {
    id: "kitchen",
    name: "Kitchen",
    image: kitchenImage,
  },
  {
    id: "bath", 
    name: "Bath",
    image: bathImage,
  },
  {
    id: "on-the-go",
    name: "On The Go",
    image: onTheGoImage,
  },
];

const Collections = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections for every area of your life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {collections.map((collection) => (
            <div key={collection.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold">
                    {collection.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;