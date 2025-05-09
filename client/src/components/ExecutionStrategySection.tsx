import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon, Users, School, Home, Expand, Sprout } from "lucide-react";
import { PARTNERS, MARKET_STRATEGY, INVESTMENT_USES } from "@/lib/constants";

const StrategyIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case "Users":
      return <Users className="h-6 w-6" />;
    case "School":
      return <School className="h-6 w-6" />;
    case "Home":
      return <Home className="h-6 w-6" />;
    case "Expand":
      return <Expand className="h-6 w-6" />;
    default:
      return null;
  }
};

const ExecutionStrategySection: React.FC = () => {
  return (
    <section id="strategy" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900">Execution Strategy</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            Partnerships and collaborations to bring KrishiMitra to small holder farmers
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {PARTNERS.map((partner) => (
            <Card key={partner.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="h-24 w-24 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{partner.acronym}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-neutral-900 text-center">{partner.name}</h3>
                  <p className="mt-4 text-neutral-700 text-center">
                    {partner.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Strategy */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-neutral-900 text-center">Market Strategy</h3>
          <div className="mt-8 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <img 
                className="rounded-lg shadow-xl w-full h-auto" 
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Agricultural extension worker helping farmer with smartphone" 
              />
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-12">
              <div className="space-y-6">
                {MARKET_STRATEGY.map((strategy) => (
                  <div key={strategy.title} className="flex">
                    <StrategyIcon icon={strategy.icon} className="text-primary text-xl mt-1" />
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-neutral-900">{strategy.title}</h4>
                      <p className="mt-2 text-neutral-700">
                        {strategy.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Investment Requirements */}
        <div className="mt-16 bg-neutral-50 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-neutral-900 text-center">Investment Requirements</h3>
          <div className="mt-8 flex justify-center">
            <Card className="max-w-md">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-primary rounded-md p-3">
                    <Sprout className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="ml-4 text-lg font-medium text-neutral-900">Seed funding: $25,000</h4>
                </div>
                <p className="mt-4 text-neutral-700">
                  Initial investment to build and launch the KrishiMitra platform, covering:
                </p>
                <ul className="mt-4 space-y-2">
                  {INVESTMENT_USES.map((use, index) => (
                    <li key={index} className="flex">
                      <CheckIcon className="h-5 w-5 text-primary mt-1" />
                      <span className="ml-3 text-neutral-700">{use}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionStrategySection;
