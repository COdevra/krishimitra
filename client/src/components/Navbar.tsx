import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import { NAVBAR_LINKS } from "@/lib/constants";
import { useMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Function to scroll to section smoothly
  const scrollToSection = (href: string) => {
    const targetId = href.substring(1); // Remove the '#' character
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href);
      if (isOpen) {
        setIsOpen(false);
      }
    }
  };

  // Monitor scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Find all section elements
      const sections = NAVBAR_LINKS.map(link => {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        return { id: link.href, element, position: element?.offsetTop || 0 };
      });
      
      // Sort by position
      const sortedSections = sections
        .filter(section => section.element)
        .sort((a, b) => a.position - b.position);
      
      // Find the current active section
      for (let i = sortedSections.length - 1; i >= 0; i--) {
        const section = sortedSections[i];
        if (scrollPosition >= (section.position - 150)) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          {!isMobile ? (
            <div className="hidden md:flex md:items-center md:space-x-6">
              {NAVBAR_LINKS.map((link, index) => (
                index === NAVBAR_LINKS.length - 1 ? (
                  <Button 
                    key={link.title} 
                    className="bg-[#196F3D] hover:bg-[#196F3D]/90"
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.title}
                  </Button>
                ) : (
                  <button 
                    key={link.title}
                    onClick={() => scrollToSection(link.href)}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      activeSection === link.href
                        ? "text-[#196F3D] font-semibold"
                        : "text-neutral-800 hover:text-[#196F3D]"
                    }`}
                  >
                    {link.title}
                  </button>
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
                    <button
                      key={link.title}
                      onClick={() => scrollToSection(link.href)}
                      className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${
                        activeSection === link.href
                          ? "bg-[#196F3D]/10 text-[#196F3D] font-semibold"
                          : "hover:bg-neutral-100 text-neutral-800 hover:text-[#196F3D]"
                      }`}
                    >
                      {link.title}
                    </button>
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
