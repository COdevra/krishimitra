import React from "react";
import sdgImage from "../assets/Puja Khatri-3_page-0008.jpg";

interface SDG {
  number: number;
  title: string;
  description: string;
  color: string;
  iconBg: string;
}

const SDGsSection: React.FC = () => {
  const sdgs: SDG[] = [
    {
      number: 1,
      title: "No Poverty",
      description: "By increasing agricultural productivity and income for smallholder farmers, we help reduce poverty in rural communities.",
      color: "#E5243B",
      iconBg: "#FBE5E7"
    },
    {
      number: 2,
      title: "Zero Hunger",
      description: "Improved farming practices lead to increased food production, contributing to food security and nutrition in local communities.",
      color: "#DDA63A",
      iconBg: "#F9F1E0"
    },
    {
      number: 8,
      title: "Decent Work and Economic Growth",
      description: "Supporting sustainable economic growth in agricultural communities through technology adoption and market access.",
      color: "#A21942",
      iconBg: "#F7E4E9"
    }
  ];

  return (
    <section id="sdgs" className="py-16 bg-[#196F3D]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900">Sustainable Development Goals</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            KrishiMitra contributes to these key UN Sustainable Development Goals
          </p>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row items-center justify-center">
          {/* SDG Wheel Image */}
          <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
            <img 
              src="https://i0.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Wheel_2019_EN.png?fit=800%2C800&ssl=1" 
              alt="UN Sustainable Development Goals Wheel" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain" 
            />
          </div>

          {/* SDG Goals */}
          <div className="lg:w-2/3 space-y-8">
            {sdgs.map((sdg) => (
              <div key={sdg.number} className="flex items-start">
                <div 
                  className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-md mr-4"
                  style={{ backgroundColor: sdg.iconBg }}
                >
                  <div 
                    className="w-12 h-12 flex items-center justify-center rounded-md"
                    style={{ backgroundColor: sdg.color }}
                  >
                    <span className="text-white font-bold text-xl">{sdg.number}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-neutral-900">SDG {sdg.number}: {sdg.title}</h3>
                  <p className="mt-1 text-neutral-700">
                    {sdg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-700">
            Through our digital agriculture platform, KrishiMitra aligns with these SDGs by empowering smallholder farmers, 
            improving food security, and creating opportunities for economic advancement in rural communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SDGsSection;
