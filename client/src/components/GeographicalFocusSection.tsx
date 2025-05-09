import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { GEOGRAPHICAL_FOCUS, GEOGRAPHICAL_REASONS } from "@/lib/constants";

const GeographicalFocusSection: React.FC = () => {
  return (
    <section id="geography" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900">Geographical Focus</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            Initially focusing on regions with high agricultural dependence and growing smartphone adoption
          </p>
        </div>

        <div className="mt-16 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <img 
                  src="https://pixabay.com/get/g34a6a5a62faf7b40ab6172dfbd7e0d8d27feef2f17dcccfc46dbc7aaabf0929fad6f3e06bf9c0c6b946f719a417cbec34cd0e75d913e507ca2d551ab5c9e23da_1280.jpg" 
                  alt="Map of Nepal highlighting Nuwakot region" 
                  className="w-full h-auto rounded-lg" 
                />
                <div className="mt-6 space-y-4">
                  {GEOGRAPHICAL_FOCUS.map((region) => (
                    <div key={region.title}>
                      <h3 className="text-lg font-medium text-neutral-900">{region.title}</h3>
                      <p className="mt-1 text-neutral-700">
                        {region.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-neutral-900">Why These Regions?</h3>
                <ul className="mt-4 space-y-4">
                  {GEOGRAPHICAL_REASONS.map((reason, index) => (
                    <li key={index} className="flex">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span className="ml-3 text-neutral-700">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-neutral-900">Expansion Strategy</h3>
                <p className="mt-2 text-neutral-700">
                  After successful implementation in Nuwakot, we plan to expand to other agricultural regions in Nepal, followed by targeted areas in India and Bangladesh with similar agricultural profiles and challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographicalFocusSection;
