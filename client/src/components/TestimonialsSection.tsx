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
      name: "Ram Bahadur",
      role: "Smallholder Farmer, Nuwakot",
      quote: "KrishiMitra has transformed how I farm. The weather updates and market prices help me make better decisions.",
    },
    {
      name: "Sita Devi",
      role: "Organic Farmer, Kathmandu",
      quote: "The personalized advice has helped me increase my crop yield significantly. I'm grateful for this platform.",
    },
    {
      name: "Hari Prasad",
      role: "Vegetable Farmer, Lalitpur",
      quote: "The market price information helps me get better deals for my produce. It's like having a market expert in my pocket.",
    },
    {
      name: "Laxmi Tamang",
      role: "Tea Farmer, Ilam",
      quote: "The crop disease alerts have saved my tea garden multiple times. This app is a blessing for farmers like me.",
    },
    {
      name: "Krishna Thapa",
      role: "Rice Farmer, Chitwan",
      quote: "The farming tips are very practical and easy to follow. My rice production has improved since using KrishiMitra.",
    },
    {
      name: "Maya Gurung",
      role: "Fruit Farmer, Mustang",
      quote: "The weather forecasts are accurate and help me plan my farming activities better. Great app for farmers!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 4;
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card key={`${testimonial.name}-${currentIndex + index}`} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <blockquote className="text-neutral-700 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-neutral-900">{testimonial.name}</p>
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