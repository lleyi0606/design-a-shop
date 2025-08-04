import { ShoppingCart, Menu, User } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
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
                <a href="#home" className="px-6 text-amber-700 hover:text-amber-900 transition-colors text-base font-medium tracking-wide">Home</a>
                <a href="#shop" className="px-6 text-amber-700 hover:text-amber-900 transition-colors text-base font-medium tracking-wide">Shop</a>
                <a href="#about" className="px-6 text-amber-700 hover:text-amber-900 transition-colors text-base font-medium tracking-wide">About</a>
                <a href="#contact" className="px-6 text-amber-700 hover:text-amber-900 transition-colors text-base font-medium tracking-wide">Contact</a>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-amber-700 hover:text-amber-900 transition-colors text-sm font-medium tracking-wide">Home</a>
            <a href="#shop" className="text-amber-700 hover:text-amber-900 transition-colors text-sm font-medium tracking-wide">Shop</a>
            <a href="#about" className="text-amber-700 hover:text-amber-900 transition-colors text-sm font-medium tracking-wide">About</a>
            <a href="#contact" className="text-amber-700 hover:text-amber-900 transition-colors text-sm font-medium tracking-wide">Contact</a>
          </nav>

          {/* Brand Logo */}
          <div className="text-xl font-medium text-amber-900 tracking-tight font-glosa">
            Re.vert
          </div>

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