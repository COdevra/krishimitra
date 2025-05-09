import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import heroImage from "../assets/Puja Khatri-3_page-0001.jpg";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-[#196F3D] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Empowering Smallholder Farmers in Developing Nations
            </h1>
            <p className="mt-4 text-lg text-white opacity-90">
              KrishiMitra is an AI-powered digital platform providing personalized agricultural insights, market information, and weather updates to smallholder farmers in South Asia.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Button asChild size="lg" variant="secondary">
                <a href="#features" className="flex items-center">
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#196F3D]">
                <a href="#contact" className="flex items-center">
                  Join Our Mission
                  <Users className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 overflow-hidden rounded-lg shadow-xl">
            <img 
              className="w-full h-auto transform transition-transform duration-300 hover:scale-105" 
              src={heroImage} 
              alt="Farmers plowing field with ox in terraced farm landscape" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
