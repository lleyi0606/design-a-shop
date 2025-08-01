import { Leaf, Calendar, Recycle, Heart, RotateCcw } from "lucide-react";

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
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-foreground mb-12 leading-relaxed">
            We believe in ethical and sustainable shopping. All our products are 
            artisanally crafted with industry leading technology to align with our core values.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary rounded-full">
                  <value.icon className="w-8 h-8 text-primary-foreground stroke-1" />
                </div>
                <p className="text-sm font-medium text-foreground">{value.title}</p>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            I am a paragraph. Click here to add your own text and edit me. It's easy. 
            Just click "Edit Text" or double click me to add your own content and make 
            changes to the font. Feel free to drag and drop me anywhere you like on your page. 
            I'm a great place for you to tell a story and let your users know a little more about you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;