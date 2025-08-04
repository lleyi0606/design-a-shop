import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            Stay Updated
          </h2>
          <p className="text-lg text-neutral-600 mb-12 leading-relaxed font-normal">
            Subscribe to our newsletter and be the first to know about new products, 
            exclusive offers, and sustainability tips.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 border-neutral-300 rounded-none px-4 py-3 text-sm font-normal focus:border-neutral-900 focus:ring-0"
            />
            <Button className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 rounded-none text-sm font-medium tracking-wide transition-colors">
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs text-neutral-500 mt-6 font-light">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;