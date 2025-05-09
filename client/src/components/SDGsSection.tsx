import React from "react";
import { Card, CardContent } from "@/components/ui/card";

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
      image: "https://images.unsplash.com/photo-1520731674041-b45ef431cd9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
    },
    {
      number: 2,
      title: "Zero Hunger",
      description: "Improved farming practices lead to increased food production, contributing to food security and nutrition in local communities.",
      color: "#DDA63A",
      iconBg: "#F9F1E0",
      image: "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
    },
    {
      number: 8,
      title: "Decent Work and Economic Growth",
      description: "Supporting sustainable economic growth in agricultural communities through technology adoption and market access.",
      color: "#A21942",
      iconBg: "#F7E4E9",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
    }
  ];

  return (
    <section id="sdgs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#196F3D]">Sustainable Development Goals</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            KrishiMitra contributes to these key UN Sustainable Development Goals
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {sdgs.map((sdg) => (
            <Card 
              key={sdg.number} 
              className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
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
                  <h3 className="text-lg font-bold text-neutral-900">
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

        <div className="mt-16 flex flex-col md:flex-row items-center bg-[#196F3D]/10 rounded-lg p-6 shadow-md">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img 
              src="https://i0.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Wheel_2019_EN.png?fit=800%2C800&ssl=1" 
              alt="UN Sustainable Development Goals Wheel" 
              className="w-40 h-40 object-contain" 
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-xl font-semibold text-[#196F3D] mb-3">Our Contribution to SDGs</h3>
            <p className="text-neutral-700">
              Through our digital agriculture platform, KrishiMitra aligns with these SDGs by empowering smallholder farmers, 
              improving food security, and creating opportunities for economic advancement in rural communities. We're 
              committed to using technology to build a more sustainable and equitable agricultural future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGsSection;
