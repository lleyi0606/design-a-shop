const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-medium mb-6 tracking-tight">Re.vert</h3>
            <p className="text-neutral-300 mb-6 max-w-md leading-relaxed font-light">
              Committed to providing sustainable home essentials that help you live 
              more consciously while creating a beautiful, eco-friendly space.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-base mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">Shop All</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">New Arrivals</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">Best Sellers</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">About Us</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-medium text-base mb-6 tracking-wide">Customer Care</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">Contact Us</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">Shipping Info</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">Returns</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-16 pt-8 text-center">
          <p className="text-neutral-500 text-sm font-light">
            © 2024 Re.vert. All rights reserved. | Made with love for the planet.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;