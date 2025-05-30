import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Share2 } from 'lucide-react';

const AppReferralSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#196F3D]">Share KrishiMitra</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            Help us grow our farming community by sharing the app with fellow farmers
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-[#196F3D]/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-[#196F3D]/10 rounded-full flex items-center justify-center">
                  <Share2 className="w-8 h-8 text-[#196F3D]" />
                </div>
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold text-[#196F3D]">Refer & Earn</h3>
                <p className="text-neutral-700">
                  Share KrishiMitra with your farming community and help them access modern agricultural solutions. 
                  Together, we can build a stronger, more connected farming network.
                </p>
                <div className="pt-4">
                  <button className="bg-[#196F3D] text-white px-8 py-3 rounded-full hover:bg-[#196F3D]/90 transition-colors duration-300">
                    Share Now
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppReferralSection; 