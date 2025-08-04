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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            Collections
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Discover our curated collections for every area of your life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {collections.map((collection) => (
            <div key={collection.id} className="group cursor-pointer rounded-lg overflow-hidden shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
                  <h3 className="text-xl text-yellow-100 font-semibold tracking-wide opacity-90 group-hover:opacity-100 transition-opacity">
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