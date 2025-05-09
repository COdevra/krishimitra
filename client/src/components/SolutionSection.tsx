import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SOLUTION_POINTS } from "@/lib/constants";

const SolutionSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900">What is the solution?</h2>
        </div>

        <div className="mt-16 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-12">
            <div className="flex items-center">
              <Logo size={64} />
            </div>
            <p className="mt-6 text-lg text-neutral-700">
              KrishiMitra is an AI-powered digital platform designed specifically for small holder farmers in South Asia, providing them with:
            </p>
            <ul className="mt-6 space-y-4">
              {SOLUTION_POINTS.map((point, index) => (
                <li key={index} className="flex">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="ml-3 text-neutral-700">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild>
                <a href="#features" className="flex items-center">
                  Learn More About Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <img 
              className="rounded-lg shadow-xl w-full h-auto" 
              src="https://pixabay.com/get/g656799c77da4c1603211786b2045b41ee9c955a9a1427ffa0b713445e0158d30f4209260299f6bbaa67131ebe1aa9a3a58faa0f93a7e8f7c995762181e6ac92e_1280.jpg" 
              alt="Happy farmer with improved harvest" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
