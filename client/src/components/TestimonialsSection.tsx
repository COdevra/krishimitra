import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
   
    {
      name: "Sanu Pathak",
      role: "Farmer from Nuwakot",
      quote: "My father taught me to predict the weather just by looking at the sky. It used to work but now, with all the climate changes, that no longer helps. I've lost crops because I didn't know the right weather at the right time. KrishiMitra bridges that gap. Now, I get timely updates that help me plan better and protect my harvest."
    },
    {
      name: "Ganga Tamang",
      role: "Farmer from Nuwakot",
      quote: "I've thrown away my vegetables so many times because the traders wouldn't pay me fairly. Sometimes, I didn't even recover 10% of what I spent to grow them. It felt pointless to sell. If KrishiMitra can give us access to a digital marketplace, we'll know exactly who to sell to and at a fair price. That would make a big difference in my income."
    },
    {
      name: "Bhagwan Poudel",
      role: "Farmer from Nuwakot",
      quote: "I didn't have parents to teach me farming. I never learned how to properly do seedling for major crops like rice, and most of the time, my harvests failed. The content and farming guidance on KrishiMitra means so much to me—it feels like I finally have a family to learn from."
    },
    {
      name: "Suman Rai",
      role: "Farmer from Nuwakot",
      quote: "Most of the time, I spend more on growing crops than I actually earn. When I get paid, it feels like income, but in reality, I'm at a loss. Farming has become a losing business. KrishiMitra's financial literacy support is exactly what we farmers need to understand real profitability and stop settling for less."
    },
    {
      name: "Ganesh Khakurel",
      role: "Farmer from Nuwakot",
      quote: "I never knew that soil testing was important. I've always grown crops in the same soil my ancestors used. Testing the soil felt expensive and out of reach, so I never considered it. But KrishiMitra's easy and affordable digital soil testing has made my farming more effective, informed, and productive."
    },
    {
      name: "Bhabuk Mainali",
      role: "Farmer from Nuwakot",
      quote: "Knowing the price of crops means a lot. It helps us bargain confidently with middlemen and ensures we're not cheated."
    },
    {
      name: "Parbata Shahi",
      role: "Farmer from Nuwakot",
      quote: "Getting a pest alert ahead of time could save my entire harvest and protect my family from going hungry that season."
    }
     
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalTestimonials = testimonials.length;

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex + testimonialsPerPage) % totalTestimonials);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex - testimonialsPerPage + totalTestimonials) % totalTestimonials);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < testimonialsPerPage; i++) {
      const index = (currentIndex + i) % totalTestimonials;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#196F3D]">What Our Farmers Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-700">
            Hear from the farmers who are using KrishiMitra to improve their farming practices
          </p>
        </div>

        <div className="mt-12 relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full hover:bg-neutral-100"
            onClick={prevTestimonials}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card key={`${testimonial.name}-${currentIndex + index}`} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <blockquote className="text-neutral-700 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-2">
                    <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                    <span className="text-sm text-neutral-600">•</span>
                    <p className="text-sm text-neutral-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full hover:bg-neutral-100"
            onClick={nextTestimonials}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 