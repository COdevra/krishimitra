import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import teamPageImage from "../assets/aakriti.jpg";
import teamPageImage2 from "../assets/laxman bista.jpeg";
import teamPageImage3 from "../assets/puja.png";
import teamPageImage4 from "../assets/devaki.jpeg";
import teamPageImage5 from "../assets/small.jpg";
import teamPageImage6 from "../assets/aakash.jpeg";


interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Aakriti Khapung Limbu",
      role: "Co-Founder & Chief Marketing Officer (CMO)",
      image: teamPageImage,
      bio: "Aakriti is passionate about rural empowerment and leads our outreach and marketing efforts.",
    },
    {
      name: "Laxman Bista",
      role: "Advisor",
      image: teamPageImage2,
      bio: "Laxman is the visionary behind KrishiMitra, driving strategy and partnerships.",
    },
    {
      name: "Puja Khatri",
      role: "Co-Founder & Chief Executive Officer (CEO)",
      image: teamPageImage3,
      bio: "Puja ensures our financial sustainability and manages resources efficiently.",
    },
    {
      name: "Devaki Rawal",
      role: "Frontend Developer",
      image: teamPageImage4,
      bio: "Devaki is the frontend developer who ensures the smooth functioning of the platform.",
    },
    {
      name: "Manish Acharya",
      role: "Chief Financial & Technological Officer (CFO & CTO)",
      image: teamPageImage5,
      bio: "Manish leads our tech team, building robust and scalable digital solutions.",
    },
    {
      name: "Aakash Bagale Thapa",
      role: "Backend Developer",
      image: teamPageImage6,
      bio: "Aakash is the backend developer who ensures the smooth functioning of the platform.",
    },
  ];

  return (
    <section id="team" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900">Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            Meet the passionate individuals behind KrishiMitra
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="group relative">
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm px-4 text-center">{member.bio}</span>
                  </div>
                </div>
                <CardContent className="p-5 bg-[#196F3D]/5">
                  <h3 className="text-lg font-medium text-neutral-900">{member.name}</h3>
                  <p className="mt-2 text-sm text-neutral-700">{member.role}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;