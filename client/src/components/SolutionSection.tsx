import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SOLUTION_POINTS } from "@/lib/constants";
import workImage from "../assets/farmer-6530444_1280.jpg";

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#196F3D]">Our Solution</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            How KrishiMitra addresses the challenges faced by farmers
          </p>
        </div>

        <div className="mt-16 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-12">
            <div className="flex items-center">
              <Logo size={250} />
            </div>
            <p className="mt-6 text-lg text-neutral-700">
              KrishiMitra is an AI-powered digital platform designed specifically for small holder farmers in South Asia, providing them with:
            </p>
            <ul className="mt-6 space-y-4 leading-relaxed text-neutral-700 text-lg">
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
              src={workImage} 
              alt="Happy farmer with improved harvest" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
