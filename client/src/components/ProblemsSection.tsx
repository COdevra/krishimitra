import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FARMER_PROBLEMS } from "@/lib/constants";
import { CloudSunRain, Wallet, Tractor } from "lucide-react";

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
const problemImages = [
  "https://images.unsplash.com/photo-1559382710-d0cd8baf859a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=240",
  "https://images.unsplash.com/photo-1624397630740-b8a6c04a98ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=240",
  "https://images.unsplash.com/photo-1628352081506-83c43123ed8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=240"
];

const ProblemsSection: React.FC = () => {
  return (
    <section id="problems" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900">What are the problems?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            Small holder farmers face significant challenges that limit their productivity and income
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
                            <h3 className="text-lg leading-6 font-medium text-neutral-900">{problem.title}</h3>
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
                            <h3 className="text-lg leading-6 font-medium text-neutral-900">{problem.title}</h3>
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
