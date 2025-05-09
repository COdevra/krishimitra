import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Globe } from "lucide-react";
import geoImage from "../assets/Puja Khatri-3_page-0009.jpg";

const GeographicalFocusSection: React.FC = () => {
  const regions = [
    {
      title: "Nepal: Nuwakot (Area of concentration)",
      description: "Starting with a focused implementation in the Nuwakot district of Nepal, an agricultural region with significant smallholder farmer population."
    },
    {
      title: "South Asia: India, Bangladesh",
      description: "Targeting countries with high dependency on agriculture and growing smartphone penetration, creating opportunities for digital agricultural solutions."
    }
  ];

  const reasons = [
    "High concentration of smallholder farmers who can benefit significantly from digital agricultural solutions",
    "Growing smartphone penetration making digital solutions increasingly accessible",
    "Agricultural-dependent economies where improved farming practices can have significant economic impact",
    "Similar agricultural challenges across regions allowing for platform scalability"
  ];

  return (
    <section id="geography" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900">Geographical Focus</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            Initially focusing on regions with high agricultural dependence and growing smartphone adoption
          </p>
        </div>

        <div className="mt-16 lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <Card className="bg-[#196F3D] text-white shadow-xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-medium">Target Regions</h3>
                </div>
                
                <div className="space-y-6 mb-8">
                  {regions.map((region) => (
                    <div key={region.title} className="border-l-4 border-[#82E0AA] pl-4">
                      <h4 className="text-lg font-medium">{region.title}</h4>
                      <p className="mt-2 text-white/80">
                        {region.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <div className="flex items-center mb-4">
                    <Globe className="h-6 w-6 mr-3" />
                    <h3 className="text-xl font-medium">Why These Regions?</h3>
                  </div>
                  <ul className="space-y-3">
                    {reasons.map((reason, index) => (
                      <li key={index} className="flex">
                        <CheckCircle className="h-5 w-5 text-[#82E0AA] flex-shrink-0 mt-1" />
                        <span className="ml-3 text-white/90">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 lg:mt-0 lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://pixabay.com/get/g44d2c371bb7c0fee16dd7f53f0ebed0df1e0a1b00b63cf81fa54c5f8ed1e7b4e2ed4a70ba4be9cab6d2c7f02ef01b2ff4ff83bb5f3b42b8d56c77fa82a6fa2ed_1280.jpg" 
                alt="Globe showing South Asia" 
                className="w-full h-auto rounded-lg shadow-lg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 p-4 rounded-lg shadow-lg">
                  <h4 className="text-[#196F3D] font-medium">Expansion Strategy</h4>
                  <p className="mt-2 text-neutral-700 text-sm">
                    After successful implementation in Nuwakot, we plan to expand to other agricultural regions in Nepal, followed by targeted areas in India and Bangladesh with similar agricultural profiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographicalFocusSection;
