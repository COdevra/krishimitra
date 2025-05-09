import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import marketImage from "../assets/Puja Khatri-3_page-0011.jpg";

interface StrategyItem {
  title: string;
  description: string;
}

const MarketStrategySection: React.FC = () => {
  const strategies: StrategyItem[] = [
    {
      title: "Connect with Farmers",
      description: "Direct engagement with farming communities through local agricultural networks and community leaders."
    },
    {
      title: "Awareness/Training camps",
      description: "Conduct regular training sessions in rural areas to demonstrate the platform's value and teach farmers how to use it."
    },
    {
      title: "Door-to-door promotion",
      description: "Personalized outreach through mobile campaigns to reach farmers in remote areas and assist with app installation and usage."
    },
    {
      title: "Expand to more regions",
      description: "Phased expansion to additional agricultural regions based on successful implementation and lessons learned."
    }
  ];

  return (
    <section id="market-strategy" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://pixabay.com/get/g3b74292a8290ef3241ff2d5c9c1ece8d1c2a33e03f10c4da0cc73e66a1fa3977b91bcfcf79ccfa0e8dc0b78c4c8e8df4f0d4ffa0ec5d2aa3ae02ba51fbbcbcbc_1280.jpg" 
                alt="Agricultural expert showing produce to a farmer" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#196F3D] mb-6">Market Strategy</h2>
            <p className="text-lg text-neutral-700 mb-8">
              Our approach to reaching and engaging smallholder farmers across target regions:
            </p>
            
            <div className="space-y-6">
              {strategies.map((strategy, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#196F3D]">
                  <CardContent className="p-5">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4 w-8 h-8 bg-[#196F3D] rounded-full flex items-center justify-center text-white">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-neutral-900">{strategy.title}</h3>
                        <p className="mt-1 text-neutral-700">{strategy.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-10 bg-[#196F3D]/5 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-[#196F3D] mb-3">Implementation Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-[#196F3D] mt-1 mr-2 flex-shrink-0" />
                  <span>Collaborate with local agricultural extension workers</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-[#196F3D] mt-1 mr-2 flex-shrink-0" />
                  <span>Partner with existing farmer cooperatives and groups</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-[#196F3D] mt-1 mr-2 flex-shrink-0" />
                  <span>Leverage local community leaders as champions</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-[#196F3D] mt-1 mr-2 flex-shrink-0" />
                  <span>Create success stories with early adopters to drive adoption</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketStrategySection;