import React from "react";
import { SDGS } from "@/lib/constants";

const SDGsSection: React.FC = () => {
  return (
    <section id="sdgs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900">Sustainable Development Goals</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            KrishiMitra contributes to these key UN Sustainable Development Goals
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {SDGS.map((sdg) => (
            <div key={sdg.number} className="flex flex-col items-center">
              <div className={`w-24 h-24 flex items-center justify-center rounded-lg ${sdg.color}`}>
                <svg
                  className="h-16 w-16"
                  viewBox={`0 0 100 100`}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {sdg.number === 1 && (
                    <g>
                      <rect width="100" height="100" fill="#E5243B" />
                      <path d="M55 26V75H45V26H55ZM38 52V75H28V52H38Z" fill="white" />
                    </g>
                  )}
                  {sdg.number === 2 && (
                    <g>
                      <rect width="100" height="100" fill="#DDA63A" />
                      <path d="M50 25C37.3 25 27 35.3 27 48V69H34V48C34 39.2 41.2 32 50 32C58.8 32 66 39.2 66 48V69H73V48C73 35.3 62.7 25 50 25Z" fill="white" />
                      <path d="M62 59H38V67H62V59Z" fill="white" />
                    </g>
                  )}
                  {sdg.number === 8 && (
                    <g>
                      <rect width="100" height="100" fill="#A21942" />
                      <path d="M31 69L31 26H38L38 58.2L62 26H69V69H62V36.8L38 69H31Z" fill="white" />
                    </g>
                  )}
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium text-neutral-900">SDG {sdg.number}: {sdg.title}</h3>
              <p className="mt-2 text-center text-neutral-700">
                {sdg.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SDGsSection;
