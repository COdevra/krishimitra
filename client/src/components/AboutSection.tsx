import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, Store } from "lucide-react";
import tomatoHarvestImage from "../assets/tomato_harvest_Nepal.jpg";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#196F3D]">Who are Small Holder Farmers?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            The backbone of agricultural production in South Asia
          </p>
        </div>

        <div className="mt-16 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <img 
              className="rounded-lg shadow-xl w-full h-auto object-cover" 
              src={tomatoHarvestImage}
              alt="Tomato harvest in Nepal" 
            />
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-12">
            <div className="space-y-8">
              <Card className="shadow-none border-none">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                        <Home className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-neutral-900">
                        Family farmers with less than 2 hectares (5 acres of land)
                      </h3>
                      <p className="mt-2 text-neutral-700">
                        Small holder farmers operate on limited land, making efficient farming practices crucial for their livelihoods.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-none border-none">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                        <Users className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-neutral-900">
                        Relying primarily on family labor and assets
                      </h3>
                      <p className="mt-2 text-neutral-700">
                        These farmers depend heavily on family members for agricultural operations with limited mechanization.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-none border-none">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                        <Store className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-neutral-900">
                        Primarily produce food for local consumption
                      </h3>
                      <p className="mt-2 text-neutral-700">
                        While focusing on subsistence, they also sell surplus produce in local markets, contributing significantly to local food security.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
