import React from "react";
import Logo from "./Logo";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const SocialIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case "Facebook":
      return <Facebook className="h-5 w-5" />;
    case "Twitter":
      return <Twitter className="h-5 w-5" />;
    case "Instagram":
      return <Instagram className="h-5 w-5" />;
    case "Linkedin":
      return <Linkedin className="h-5 w-5" />;
    default:
      return null;
  }
};

const Footer: React.FC = () => {
  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-white shadow-inner py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex-1 min-w-0">
            <Logo textClass="text-[#196F3D] font-bold" />
            <p className="mt-4 text-neutral-700 max-w-xl">
              Empowering small holder farmers through technology to improve agricultural productivity, income, and sustainability.
            </p>
          </div>
          
          <div className="mt-8 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {FOOTER_LINKS.map((section) => (
                <div key={section.title} className="mb-6">
                  <h3 className="text-sm font-semibold text-[#196F3D] tracking-wider uppercase">{section.title}</h3>
                  <ul className="mt-4 space-y-4">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="text-neutral-600 hover:text-[#196F3D] hover:underline transition-all duration-300">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-neutral-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.platform} 
                href="#" 
                onClick={handleSocialClick}
                className="text-neutral-500 hover:text-[#196F3D] hover:bg-[#196F3D]/5 p-2 rounded-full transition-colors duration-300"
              >
                <span className="sr-only">{social.platform}</span>
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-neutral-600 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} KrishiMitra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
