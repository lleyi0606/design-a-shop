import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sustainable.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground mb-6 drop-shadow-lg">
          Home Essentials for
          <span className="block text-earth-cream">Sustainable Living</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
          Discover beautiful, eco-friendly products that make a difference for your home and the planet.
        </p>
        <Button variant="hero" size="xl" className="text-lg">
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;