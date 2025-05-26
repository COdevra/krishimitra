import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import povertyImage from "../assets/poverty.jpg";
import hungerImage from "../assets/hunger.jpg";
import workImage from "../assets/work.jpg";
import responsibleImage from "../assets/save-energy-7382275_1280.png";
interface SDG {
  number: number;
  title: string;
  description: string;
  color: string;
  iconBg: string;
  image: string;
}

const SDGsSection: React.FC = () => {
  const sdgs: SDG[] = [
    {
      number: 1,
      title: "No Poverty",
      description: "By increasing agricultural productivity and income for smallholder farmers, we help reduce poverty in rural communities.",
      color: "#E5243B",
      iconBg: "#FBE5E7",
      image: povertyImage
    },
    {
      number: 2,
      title: "Zero Hunger",
      description: "Improved farming practices lead to increased food production, contributing to food security and nutrition in local communities.",
      color: "#DDA63A",
      iconBg: "#F9F1E0",
      image: hungerImage
    },
    {
      number: 8,
      title: "Decent Work and Economic Growth",
      description: "Supporting sustainable economic growth in agricultural communities through technology adoption and market access.",
      color: "#A21942",
      iconBg: "#F7E4E9",
      image: workImage
    },
    {
      number: 12,
      title: "Responsible Consumption and Production",
      description: "Promoting local supply chains and reducing waste through sustainable farming practices.",
      color: "#A21942",
      iconBg: "#F9F1E0",
      image: responsibleImage
    }
  ];

  return (
    <section id="sdgs" className="py-16 bg-[#196F3D]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#196F3D]">Sustainable Development Goals</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-[#196F3D]">
            KrishiMitra contributes to these key UN Sustainable Development Goals
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {sdgs.map((sdg, index) => (
            <Card 
              key={sdg.number} 
              className={`overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                index === 3 ? 'md:col-start-2' : ''
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={sdg.image} 
                  alt={`SDG ${sdg.number}: ${sdg.title}`} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              <div 
                className="h-3"
                style={{ backgroundColor: sdg.color }}
              ></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full mr-4"
                    style={{ backgroundColor: sdg.color }}
                  >
                    <span className="text-white font-bold text-xl">{sdg.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#196F3D]">
                    {sdg.title}
                  </h3>
                </div>
                <p className="text-neutral-700">
                  {sdg.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SDGsSection;
