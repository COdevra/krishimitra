import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import executionImg from "../assets/Puja Khatri-3_page-0010.jpg";

interface Partner {
  name: string;
  acronym: string;
  description: string;
  logo: string;
}

const ExecutionStrategySection: React.FC = () => {
  const partners: Partner[] = [
    {
      name: "Institute of Rural Development",
      acronym: "IRD",
      description: "For the development of tech infrastructure and groundlevel implementation.",
      logo: "https://pixabay.com/get/g6ea3e94be8f09aea7e5ca913aff7abb01fc9d79a6bd3ad61df3a9dc20c02af4e86dffe13c34edde5e37c14f21c968cd1f3b62b07fa93462dcaef8db1fc18493c_640.png"
    },
    {
      name: "Research Center",
      acronym: "RC",
      description: "Sign MoUs with Rampur Agriculture Campus for Research and Development works.",
      logo: "https://pixabay.com/get/g1ae3aa2c3bdbc7c0b7b80d77f8a4f3ab9d099f8bf1cf2d4a4ad6fe7c65b95e2b3a8c1c83febc7d7dc64ad0fd74a0be5d3ac0f4af73bc1fc7b2be0cdf18b3de49_640.png"
    },
    {
      name: "Local Governments",
      acronym: "LG",
      description: "Collaborate with Panchakanya Rural Municipality for farmer training and service promotion.",
      logo: "https://pixabay.com/get/ga7ffe4c1c99e3e52b96e1af34c54cbac85b4c03f1be9613f2beb358e55c142b64abd60d8c4f07f8089723e8a0773ac29c0c9ab5df45cec1a53f0b97b064a6eda_640.png"
    }
  ];

  return (
    <section id="strategy" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900">Execution Strategy</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            Strategic partnerships to implement and scale KrishiMitra
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {partners.map((partner) => (
            <Card key={partner.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="bg-[#196F3D]/5 p-6 flex items-center justify-center h-48">
                <div className="h-28 w-28 rounded-full bg-white flex items-center justify-center shadow-md border-4 border-[#196F3D]">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="h-20 w-20 object-contain"
                  />
                </div>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-lg font-medium text-neutral-900 text-center">{partner.name}</h3>
                <p className="mt-2 text-sm text-center text-neutral-500">({partner.acronym})</p>
                <div className="mt-4 text-neutral-700 text-center border-t border-dashed border-neutral-200 pt-4">
                  {partner.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://pixabay.com/get/ge1ed4beda0de8c9e9c1aa99fd64a5c0af37583fa6ebe5fbf8d8a04f75d9e92dd9d72f8c4f60a16f9bd93ff3aa9d15dd07c0c7f87a0e88deb6bc0ca8de46d5ff4_1280.jpg" 
              alt="Farmer meeting with agricultural expert" 
              className="rounded-lg shadow-lg object-cover h-80 w-full"
            />
          </div>

          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <h3 className="text-2xl font-bold text-[#196F3D]">Market Strategy</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#196F3D] rounded-full p-2 mt-1">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-neutral-900">Connect with Farmers</h4>
                  <p className="mt-1 text-neutral-700">Direct engagement with farming communities through local agricultural networks and community leaders.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#196F3D] rounded-full p-2 mt-1">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-neutral-900">Awareness/Training camps</h4>
                  <p className="mt-1 text-neutral-700">Conduct regular training sessions in rural areas to demonstrate the platform's value and teach farmers how to use it.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#196F3D] rounded-full p-2 mt-1">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-neutral-900">Door-to-door promotion</h4>
                  <p className="mt-1 text-neutral-700">Personalized outreach through mobile campaigns to reach farmers in remote areas and assist with app installation and usage.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#196F3D] rounded-full p-2 mt-1">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-neutral-900">Expand to more regions</h4>
                  <p className="mt-1 text-neutral-700">Phased expansion to additional agricultural regions based on successful implementation and lessons learned.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionStrategySection;
