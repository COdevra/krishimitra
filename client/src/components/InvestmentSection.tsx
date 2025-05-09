import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sprout, CheckCircle } from "lucide-react";
import investmentImage from "../assets/Puja Khatri-3_page-0016.jpg";

const InvestmentSection: React.FC = () => {
  const investmentUses = [
    "Platform development and customization",
    "Initial data gathering and AI model training",
    "Pilot project implementation in Nuwakot",
    "Marketing and farmer outreach campaigns",
    "Training materials and local support teams"
  ];

  return (
    <section id="investment" className="py-16 bg-[#196F3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Investment Requirement</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-white/90">
            The capital needed to bring KrishiMitra to life
          </p>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <Card className="bg-white bg-opacity-95 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#196F3D] rounded-full flex items-center justify-center">
                    <Sprout className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="ml-5 text-2xl font-bold text-[#196F3D]">
                    Seed funding: $25,000
                  </h3>
                </div>
                <p className="mt-6 text-neutral-700">
                  Initial investment to build and launch the KrishiMitra platform, covering:
                </p>
                <ul className="mt-4 space-y-3">
                  {investmentUses.map((use, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#196F3D] mt-1 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">{use}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <h4 className="text-lg font-medium text-[#196F3D]">Expected Outcomes</h4>
                  <p className="mt-2 text-neutral-700">
                    The seed funding will enable us to develop a fully functional MVP, conduct a successful pilot in Nuwakot with at least 100 
                    farmers, demonstrate measurable improvements in farming practices, and build a foundation for expansion.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-1/2 text-white">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium border-b border-white/30 pb-2">Timeline</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#82E0AA] mt-1"></div>
                    <div className="ml-3">
                      <span className="font-medium">Months 1-3:</span> Platform development and initial data gathering
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#82E0AA] mt-1"></div>
                    <div className="ml-3">
                      <span className="font-medium">Months 4-6:</span> Pilot implementation in Nuwakot with 100 farmers
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#82E0AA] mt-1"></div>
                    <div className="ml-3">
                      <span className="font-medium">Months 7-9:</span> Refinement based on user feedback and data collection
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#82E0AA] mt-1"></div>
                    <div className="ml-3">
                      <span className="font-medium">Months 10-12:</span> Expansion to additional regions and seeking Series A funding
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium border-b border-white/30 pb-2">Return on Investment</h3>
                <p className="mt-4">
                  Our financial projections indicate a path to profitability within 3 years through a combination of:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#82E0AA] mt-1 flex-shrink-0" />
                    <span className="ml-2">Subscription fees from agricultural institutions and governments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#82E0AA] mt-1 flex-shrink-0" />
                    <span className="ml-2">Premium service tiers for additional features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#82E0AA] mt-1 flex-shrink-0" />
                    <span className="ml-2">Data licensing for agricultural research</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;