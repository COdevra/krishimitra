import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FieldVisitSection from '@/components/FieldVisitSection';
import FeaturesSection from '@/components/FeaturesSection';
import VideoSection from '@/components/VideoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import OutreachSection from '@/components/OutreachSection';
// import AppReferralSection from '@/components/AppReferralSection';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>KrishiMitra - Friend for Farmers</title>
        <meta name="description" content="KrishiMitra is an AI-powered digital platform providing personalized agricultural insights, market information, and weather updates to smallholder farmers in South Asia." />
        <meta property="og:title" content="KrishiMitra - Friend of Farmers" />
        <meta property="og:description" content="An AI-powered digital platform helping smallholder farmers improve productivity and income through personalized agricultural insights." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krishimitra.com" />
        <meta property="og:image" content="https://krishimitra.com/og-image.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <FeaturesSection />
          <FieldVisitSection />
          <VideoSection />
          <OutreachSection />
          <TestimonialsSection />
          {/* <AppReferralSection /> */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
