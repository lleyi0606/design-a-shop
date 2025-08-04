import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sustainable.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <h1 className="text-9xl md:text-9xl font-medium text-yellow-100 mb-12 tracking-tight leading-none font-glosa">
          Re.vert
        </h1>
        <p className="text-2xl md:text-2xl text-white mb-4 max-w-2xl mx-auto leading-relaxed font-semibold">
          Home Essentials for Sustainable Living
        </p>
        <p className="text-base text-white/90 mb-12 max-w-xl mx-auto leading-relaxed font-light">
          Discover beautiful, eco-friendly products that make a difference for your home and the planet.
        </p>
        <Button className="bg-white hover:bg-white/90 text-amber-900 px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-colors">
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;