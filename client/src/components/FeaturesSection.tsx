import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURES } from "@/lib/constants";
import { 
  Cpu, 
  Sprout, 
  Clock, 
  TrendingUp, 
  CloudSun, 
  GraduationCap,
} from "lucide-react";

const FeatureIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case "Cpu":
      return <Cpu className="h-6 w-6" />;
    case "Sprout":
      return <Sprout className="h-6 w-6" />;
    case "Clock":
      return <Clock className="h-6 w-6" />;
    case "TrendingUp":
      return <TrendingUp className="h-6 w-6" />;
    case "CloudSun":
      return <CloudSun className="h-6 w-6" />;
    case "GraduationCap":
      return <GraduationCap className="h-6 w-6" />;
    default:
      return null;
  }
};

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Key Features</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-white opacity-90">
            Empowering small holder farmers through technology
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card key={feature.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-primary rounded-md p-3">
                    <FeatureIcon icon={feature.icon} className="text-white" />
                  </div>
                  <h3 className="ml-4 text-lg font-medium text-neutral-900">{feature.title}</h3>
                </div>
                <p className="mt-4 text-neutral-700">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
