import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import teamPageImage from "../assets/aakriti.jpg";
import teamPageImage2 from "../assets/laxman bista.jpeg";
import teamPageImage3 from "../assets/puja.png";
import teamPageImage4 from "../assets/devaki.jpeg";
import teamPageImage5 from "../assets/small.jpg";
import teamPageImage6 from "../assets/aakash.jpeg";
// Assuming a generic advisor image exists or using a placeholder
import genericAdvisorImage1 from "../assets/mary.jpg"; 
import genericAdvisorImage2 from "../assets/eddie.jpg"; 
import genericAdvisorImage3 from "../assets/alexandra.jpg"; 


interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [

    {
      name: "Puja Khatri",
      role: "Co-Founder & Chief Executive Officer (CEO)",
      image: teamPageImage3,
      bio: "Puja is a current undergraduate at Soka University of America. Known for her kind and easygoing personality, Puja ensures the overall operations run smoothly and resources are managed efficiently. She is passionate about sustainable development and leads with empathy, clarity, and purpose.",
    },
    
    
    {
      name: "Laxman Bista",
      role: "Chief Financial Officer (CFO)",
      image: teamPageImage2,
      bio: "Laxman is a Dartmouth graduate and the strategic force behind KrishiMitra’s growth. Beyond managing finances, he serves as the guiding light behind every major step and success of the project. Laxman’s visionary mindset and dependable leadership make him an integral part of our mission.",
    },

    {
      name: "Aakriti Khapung Limbu",
      role: "Co-Founder & Chief Marketing Officer (CMO)",
      image: teamPageImage,
      bio: "Aakriti is a current undergraduate at Soka University of America. She is creative, friendly, and full of energy. Aakriti leads all marketing and outreach efforts, helping more people connect with KrishiMitra’s mission. Her strong communication skills and leadership make her a key part of the team.",
    },
  
    {
      name: "Devaki Rawal",
      role: "Web Developer and Research Analyst",
      image: teamPageImage4,
      bio: "Devaki is a high school graduate who believes in using technology to make a difference. She has visited villages, collected data, and talked to farmers to understand their needs. Devaki connects technology with farming and helps farmers build a digital presence to improve their livelihoods.",
    },
    {
      name: "Manish Acharya",
      role: "Chief Technological Officer (CTO)",
      image: teamPageImage5,
      bio: "Manish Acharya is a current undergraduate at Vanderbilt University and a passionate tech enthusiast. With a deep understanding of system architecture and product development, Manish oversees KrishiMitra’s technological foundation. He is dedicated to building scalable and innovative solutions that meet the real needs of farmers and bring lasting impact through technology.",
    },
  
    {
      name: "Mary Patrick Kavanaugh",
      role: "Advisor",
      image: genericAdvisorImage1,
      bio: "Mary provides valuable guidance and expertise to our team.",
    },
    {
      name: "Eddie Ng",
      role: "Advisor",
      image: genericAdvisorImage2,
      bio: "Eddie offers strategic advice to support KrishiMitra's growth.",
    },
    {
      name: "Alexandra Moaser",
      role: "Advisor",
      image: genericAdvisorImage3,
      bio: "Alexandra contributes her experience to help shape our future directions.",
    },
  ];

  return (
    <section id="team" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#196F3D]">Our Team</h2>
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
                    className="w-full h-full object-contain object-center transform transition-transform duration-300 group-hover:scale-110"
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