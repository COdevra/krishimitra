import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const KrishiMitraMeaningSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#196F3D] to-[#82E0AA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <img
              src="https://pixabay.com/get/g7dc1db17b62f18d58b151ae16d0c02ff28eb1f8a2eb55da9b9c9c47a02bcff1d47e69c8e0bd3cec68cf0ac6b2732e95c69b8e60f62d91f5abe1da2a43657c4a3_1280.jpg"
              alt="Farmer with basket of harvested vegetables"
              className="rounded-lg shadow-xl w-full h-auto max-h-96 object-cover"
            />
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2 md:pl-12">
            <Card className="bg-white bg-opacity-90 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-[#196F3D]">
                  The Meaning Behind Our Name
                </h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-neutral-900">
                      Krishi: Agriculture
                    </h3>
                    <p className="mt-2 text-neutral-700">
                      The Sanskrit word for agriculture and farming activities, representing our focus on the agricultural sector.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#196F3D]">+</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-neutral-900">
                      Mitra: Friend
                    </h3>
                    <p className="mt-2 text-neutral-700">
                      A Sanskrit word meaning friend or ally, symbolizing our commitment to being a supportive partner to farmers.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#196F3D]">=</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-neutral-900">
                      KrishiMitra: Friend for Farmers
                    </h3>
                    <p className="mt-2 text-neutral-700">
                      Together, our name represents our mission to be a reliable friend and partner for smallholder farmers, helping them improve their agricultural practices and livelihoods.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KrishiMitraMeaningSection;