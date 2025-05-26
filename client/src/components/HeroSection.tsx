import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "../assets/slide.jpg";
import heroImage2 from "../assets/slide2.jpg";
import heroImage3 from "../assets/slide3.jpg";
import { Link } from "react-router-dom";

const heroImages = [heroImage1, heroImage2, heroImage3];

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((prev) => (prev + 1) % heroImages.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section id="home" className="relative h-[90vh] min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={heroImages[current]}
          alt="Hero background"
          className="w-full h-full object-cover transition-all duration-700"
        />
        {/* Overlay for darkening the image for text readability */}
        <div className="absolute inset-0 bg-[#196F3D]/60" />
        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-[#196F3D] rounded-full p-2 shadow-md transition pointer-events-auto"
          aria-label="Previous image"
          style={{ marginRight: '12px' }}
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-[#196F3D] rounded-full p-2 shadow-md transition pointer-events-auto"
          aria-label="Next image"
          style={{ marginLeft: '12px' }}
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
      {/* Content Overlay - left aligned */}
      <div className="relative z-10 max-w-3xl px-4 text-left ml-12 md:ml-20 lg:ml-32">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
          Empowering Smallholder Farmers in Developing Nations
        </h1>
        <p className="mt-4 text-lg text-white opacity-90 drop-shadow-md">
          KrishiMitra is an AI-powered digital platform providing personalized agricultural insights, market information, and weather updates to smallholder farmers in South Asia.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <Button asChild size="lg" variant="secondary">
            <a href="#features" className="flex items-center">
              Explore Features
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-black border-white">
            <Link to="/contact" className="flex items-center">
              Join Our Mission
              <Users className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
