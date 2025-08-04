import { ShoppingCart, Menu, User } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scrolling to section when arriving from navigation
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.slice(1);
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other page, navigate to home with section
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header className="bg-amber-50/80 backdrop-blur-md border-b border-amber-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-4 w-4 text-amber-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-amber-50/90 backdrop-blur-md border-r border-amber-200">
              <nav className="mt-12 flex flex-col space-y-4">
                <a href="#home" onClick={handleNavClick('home')} className="px-6 text-amber-700 hover:text-amber-900 transition-colors text-base font-medium tracking-wide">Home</a>
                <a href="#shop" onClick={handleNavClick('shop')} className="px-6 text-amber-700 hover:text-amber-900 transition-colors text-base font-medium tracking-wide">Shop</a>
                <a href="#about" onClick={handleNavClick('about')} className="px-6 text-amber-700 hover:text-amber-900 transition-colors text-base font-medium tracking-wide">About</a>
                <a href="#contact" onClick={handleNavClick('contact')} className="px-6 text-amber-700 hover:text-amber-900 transition-colors text-base font-medium tracking-wide">Contact</a>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#home" onClick={handleNavClick('home')} className="text-amber-700 hover:text-amber-900 transition-colors text-sm font-medium tracking-wide">Home</a>
            <a href="#shop" onClick={handleNavClick('shop')} className="text-amber-700 hover:text-amber-900 transition-colors text-sm font-medium tracking-wide">Shop</a>
            <a href="#about" onClick={handleNavClick('about')} className="text-amber-700 hover:text-amber-900 transition-colors text-sm font-medium tracking-wide">About</a>
            <a href="#contact" onClick={handleNavClick('contact')} className="text-amber-700 hover:text-amber-900 transition-colors text-sm font-medium tracking-wide">Contact</a>
          </nav>

          {/* Brand Logo */}
          <Link to="/" className="text-xl font-medium text-amber-900 tracking-tight font-glosa hover:text-amber-700 transition-colors">
            Re.vert
          </Link>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hover:bg-amber-100">
              <User className="h-4 w-4 text-amber-700" />
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:bg-amber-100">
              <ShoppingCart className="h-4 w-4 text-amber-700" />
              <span className="absolute -top-1 -right-1 bg-amber-900 text-amber-50 text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;