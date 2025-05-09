import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FARMER_PROBLEMS } from "@/lib/constants";
import { CloudSunRain, Wallet, Tractor } from "lucide-react";

const ProblemIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case "CloudSunRain":
      return <CloudSunRain className="h-6 w-6" />;
    case "Wallet":
      return <Wallet className="h-6 w-6" />;
    case "Tractor":
      return <Tractor className="h-6 w-6" />;
    default:
      return null;
  }
};

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

        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative">
            <img 
              className="h-full w-full object-cover rounded-lg shadow-xl" 
              src="https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700" 
              alt="Farmer using traditional methods for harvesting" 
            />
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="space-y-6">
              {FARMER_PROBLEMS.map((problem) => (
                <Card key={problem.title} className="overflow-hidden shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-primary rounded-md p-3">
                        <ProblemIcon icon={problem.icon} className="text-white text-xl" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg leading-6 font-medium text-neutral-900">{problem.title}</h3>
                        <p className="mt-2 text-neutral-700">{problem.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
