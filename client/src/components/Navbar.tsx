import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import { NAVBAR_LINKS } from "@/lib/constants";
import { useMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {!isMobile ? (
            <div className="hidden md:flex md:items-center md:space-x-8">
              {NAVBAR_LINKS.map((link, index) => (
                index === NAVBAR_LINKS.length - 1 ? (
                  <Button 
                    key={link.title} 
                    className="bg-[#196F3D] hover:bg-[#196F3D]/90 text-lg px-6 py-3"
                    asChild
                  >
                    <Link to={link.href}>{link.title}</Link>
                  </Button>
                ) : (
                  <Link 
                    key={link.title}
                    to={link.href}
                    className={`px-5 py-2 rounded-md text-lg font-semibold ${
                      location.pathname === link.href
                        ? "text-[#196F3D] font-bold"
                        : "text-neutral-800 hover:text-[#196F3D]"
                    }`}
                  >
                    {link.title}
                  </Link>
                )
              ))}
            </div>
          ) : (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {NAVBAR_LINKS.map((link) => (
                    <Link
                      key={link.title}
                      to={link.href}
                      className={`px-3 py-2 text-lg font-medium ${
                        location.pathname === link.href
                          ? "text-[#196F3D] font-bold"
                          : "text-neutral-800 hover:text-[#196F3D]"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
