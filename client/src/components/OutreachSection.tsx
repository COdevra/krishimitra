import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, School } from 'lucide-react';

const OutreachSection: React.FC = () => {
  const outreachPrograms = [
    {
      title: "Awareness Camps",
      description: "We aim to organize regular community gatherings to educate farmers about modern agricultural practices, government schemes, and market opportunities. Our vision is to create knowledge-sharing platforms that will strengthen farming communities across the region.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Training Bootcamps",
      description: "Our goal is to conduct intensive hands-on training sessions covering various aspects of farming, from soil management to digital tools. We envision expert-led bootcamps that will equip farmers with practical skills for sustainable agriculture.",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      title: "School Outreach",
      description: "We plan to engage with young minds through interactive sessions in schools, fostering interest in agriculture and technology. Our vision is to inspire the next generation of farmers and agricultural innovators who will lead the future of farming.",
      icon: <School className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-16 bg-[#196F3D]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#196F3D]">Outreach & Awareness</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            Our vision for empowering communities through education and engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outreachPrograms.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-[#196F3D]/10 rounded-full mb-4">
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#196F3D] mb-3">{program.title}</h3>
                <p className="text-neutral-700">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-700 max-w-2xl mx-auto">
            Join us in our mission to transform agriculture through education, 
            technology, and community engagement. Together, we will build a sustainable future for farming.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OutreachSection; 