import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FARMER_PROBLEMS } from "@/lib/constants";
import { CloudSunRain, Wallet, Tractor } from "lucide-react";
import problemImage1 from "../assets/time.jpg";
import problemImage2 from "../assets/market.jpg";
import problemImage3 from "../assets/countryside-6700296_1280.jpg";

const ProblemIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className }) => {
  switch (icon) {
    case "CloudSunRain":
      return <CloudSunRain className={className || "h-6 w-6"} />;
    case "Wallet":
      return <Wallet className={className || "h-6 w-6"} />;
    case "Tractor":
      return <Tractor className={className || "h-6 w-6"} />;
    default:
      return null;
  }
};

// Images for each problem
const problemImages = [problemImage1, problemImage2, problemImage3];

const ProblemsSection: React.FC = () => {
  return (
    <section id="problems" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#196F3D]">Problems Faced by Smallholder Farmers</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            Understanding the challenges faced by smallholder farmers in South Asia
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {FARMER_PROBLEMS.map((problem, index) => (
            <div key={problem.title} className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              {index % 2 === 0 ? (
                <>
                  <div className="relative mb-8 lg:mb-0">
                    <img 
                      className="w-full h-64 object-cover rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105" 
                      src={problemImages[index]} 
                      alt={problem.title} 
                    />
                  </div>
                  <div>
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#196F3D]">
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-[#196F3D] rounded-md p-3">
                            <ProblemIcon icon={problem.icon} className="text-white text-xl" />
                          </div>
                          <div className="ml-5">
                            <h3 className="text-lg leading-6 font-medium text-[#196F3D]">{problem.title}</h3>
                            <p className="mt-2 text-neutral-700">{problem.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#196F3D]">
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-[#196F3D] rounded-md p-3">
                            <ProblemIcon icon={problem.icon} className="text-white text-xl" />
                          </div>
                          <div className="ml-5">
                            <h3 className="text-lg leading-6 font-medium text-[#196F3D]">{problem.title}</h3>
                            <p className="mt-2 text-neutral-700">{problem.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative mt-8 lg:mt-0">
                    <img 
                      className="w-full h-64 object-cover rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105" 
                      src={problemImages[index]} 
                      alt={problem.title} 
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
