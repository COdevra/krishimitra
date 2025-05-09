import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Cpu, 
  Sprout, 
  Clock, 
  TrendingUp, 
  CloudSun, 
  GraduationCap,
} from "lucide-react";
import Logo from "./Logo";
import featuresBgImage from "../assets/Puja Khatri-3_page-0007.jpg";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      title: "AI-powered digital platform",
      description: "Our machine learning algorithms analyze multiple data sources to provide personalized recommendations for each farmer's unique situation.",
      icon: <Cpu className="h-6 w-6 text-white" />,
    },
    {
      title: "Personalized crop advisory",
      description: "Get tailored advice on crop selection, planting methods, pest management, and fertilization based on your specific soil, climate, and resources.",
      icon: <Sprout className="h-6 w-6 text-white" />,
    },
    {
      title: "Optimal harvest times",
      description: "Receive notifications about the best time to harvest your crops based on weather forecasts, market demand, and crop maturity indicators.",
      icon: <Clock className="h-6 w-6 text-white" />,
    },
    {
      title: "Market price trends",
      description: "Stay informed about current and forecasted market prices for your crops to make better decisions about when and where to sell.",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
    },
    {
      title: "Real time weather updates",
      description: "Access accurate, localized weather forecasts and alerts to help you plan farming activities and protect your crops from adverse conditions.",
      icon: <CloudSun className="h-6 w-6 text-white" />,
    },
    {
      title: "Customized farming tips",
      description: "Learn modern, sustainable farming techniques that are specifically adapted for small-scale agriculture in your region to improve productivity.",
      icon: <GraduationCap className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <section id="features" className="py-16 bg-[#196F3D] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 bg-center bg-cover"
        style={{ backgroundImage: "url(https://pixabay.com/get/g5ef4c6ddf93e5fb43d4b14f1bf7a83d4a76e0e82f5cba9f70af8407bc84ab9d8c1fc5dc68da86c7d71ba2b7d66b3c9dcf50fdf7a3eb4a9b6c37fe1f2bf9b0ede_1280.jpg)" }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center mb-10">
          <Logo size={50} textClass="text-white font-bold" />
          <h2 className="text-3xl font-bold text-white ml-4">Key Features</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-white bg-opacity-95 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-l-4 border-[#82E0AA] hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-[#196F3D] rounded-md p-3">
                    {feature.icon}
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
