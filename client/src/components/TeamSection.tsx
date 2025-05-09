import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import teamPageImage from "../assets/Puja Khatri-3_page-0002.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Aakriti Khapung Limbu",
      role: "Co-Founder & Chief Marketing Officer (CMO)",
      image: "https://pixabay.com/get/gc6c9c6866a3ce5f1bf5ef8be54461ac0b0c6d9962693f98d4a26d2a8bae5c4a15a7b09ebb70d9ce59f0d99a18a2beabbcf4a196d38b0d1dcc10c81d559dfbba3_640.jpg",
    },
    {
      name: "Laxman Bista",
      role: "Founder & Executive Director",
      image: "https://pixabay.com/get/g93f0a7bb7c1a095626c6b1ea04a25fcd92bd6f6aaad3b8e0c5c06fbcd6f49d8c000d9e1bb1eafe5e5c8a0a1da0e1a5bcbbee9ca6ff4caba5c20e0bacc4ed95e5_640.jpg",
    },
    {
      name: "Puja Khatri",
      role: "Co-Founder & Chief Financial Officer (CFO)",
      image: "https://pixabay.com/get/gd9ea3e1fb3a9b8aae6be1a87f6e60d5fa2c95cd70e9f7c22a5feda83b27cbb61ae24d8e35c7c08e2b67b6e3068a1c9e1aef14afb41d16a4e2b61de6b84c7e066_640.jpg",
    },
    {
      name: "Manish Acharya",
      role: "Chief Technology Officer (CTO)",
      image: "https://pixabay.com/get/g31b91e5e8eb0c97dda5b3cb10f2c3a8c96fad5ac9c5d5a3f2df65a3e2a37d82ece6ba1b17fa4c7b7ad8bcdf0ea46ac77b08d257967968df2dbe2ceec4ab84b1d_640.jpg",
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

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-5 bg-[#196F3D]/5">
                <h3 className="text-lg font-medium text-neutral-900">{member.name}</h3>
                <p className="mt-2 text-sm text-neutral-700">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};

export default TeamSection;