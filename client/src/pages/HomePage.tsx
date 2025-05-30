import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import FieldVisitSection from '@/components/FieldVisitSection';
import VideoSection from '@/components/VideoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import OutreachSection from '@/components/OutreachSection';
import TeamSection from '@/components/TeamSection';
import AppReferralSection from '@/components/AppReferralSection';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <FieldVisitSection />
      <VideoSection />
      <TestimonialsSection />
      <OutreachSection />
      <TeamSection />
      <AppReferralSection />
      <Footer />
    </div>
  );
};

export default HomePage; 