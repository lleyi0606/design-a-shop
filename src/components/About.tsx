import { Leaf, Calendar, Recycle, Heart, RotateCcw } from "lucide-react";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

const coreValues = [
  {
    icon: Leaf,
    title: "Sustainable",
  },
  {
    icon: Calendar,
    title: "Daily",
  },
  {
    icon: RotateCcw,
    title: "Zero Waste",
  },
  {
    icon: Heart,
    title: "Vegan",
  },
  {
    icon: Recycle,
    title: "Recycled",
  },
];

const About = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { containerRef: valuesRef, visibleItems } = useStaggeredScrollAnimation<HTMLDivElement>(coreValues.length);
  const { elementRef: descRef, isVisible: descVisible } = useScrollAnimation<HTMLParagraphElement>();

  return (
    <section id="about" className="py-24 bg-amber-25">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            ref={headerRef}
            className={`transition-all duration-1000 ease-out ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className={`text-4xl md:text-5xl font-light text-neutral-900 mb-10 tracking-tight transition-all duration-1200 delay-200 ease-out ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}>
              Our Mission
            </h2>
            <p className={`text-lg text-neutral-600 mb-16 leading-relaxed font-normal max-w-3xl mx-auto transition-all duration-1000 delay-400 ease-out ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              We believe in ethical and sustainable shopping. All our products are 
              artisanally crafted with industry leading technology to align with our core values.
            </p>
          </div>
          
          <div ref={valuesRef} className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-1000 ease-out ${
                  visibleItems[index] 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-neutral-300 rounded-full">
                  <value.icon className="w-5 h-5 text-neutral-700 stroke-[1.5]" />
                </div>
                <p className="text-sm font-medium text-neutral-700 tracking-wide">{value.title}</p>
              </div>
            ))}
          </div>
          
          <p 
            ref={descRef}
            className={`text-neutral-500 leading-8 max-w-2xl mx-auto font-light transition-all duration-1000 ease-out ${
              descVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            Crafted with care and intention, each product tells a story of sustainability 
            and thoughtful design. We partner with artisans who share our commitment to 
            creating beautiful objects that enhance your daily life while respecting our planet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;