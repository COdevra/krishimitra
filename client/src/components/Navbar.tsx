import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import { NAVBAR_LINKS } from "@/lib/constants";
import { useMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          {!isMobile ? (
            <div className="hidden md:flex md:items-center md:space-x-4">
              {NAVBAR_LINKS.map((link, index) => (
                index === NAVBAR_LINKS.length - 1 ? (
                  <Button key={link.title} asChild variant="default">
                    <a href={link.href}>{link.title}</a>
                  </Button>
                ) : (
                  <a 
                    key={link.title}
                    href={link.href}
                    className="text-neutral-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.title}
                  </a>
                )
              ))}
            </div>
          ) : (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden p-2" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-64 sm:w-80">
                <div className="mt-6 flex flex-col space-y-3">
                  {NAVBAR_LINKS.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      className="px-3 py-2 text-base font-medium rounded-md hover:bg-neutral-100 transition-colors"
                      onClick={handleLinkClick}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
