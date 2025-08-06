import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Newsletter = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div 
          ref={elementRef}
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className={`text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight transition-all duration-1200 delay-200 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            Stay Updated
          </h2>
          <p className={`text-lg text-neutral-600 mb-12 leading-relaxed font-normal transition-all duration-1000 delay-400 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Subscribe to our newsletter and be the first to know about new products, 
            exclusive offers, and sustainability tips.
          </p>
          
          <div className={`transition-all duration-1000 delay-600 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <Button className="bg-neutral-900 hover:bg-neutral-800 text-white px-12 py-4 rounded-none text-sm font-medium tracking-wide transition-colors">
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;