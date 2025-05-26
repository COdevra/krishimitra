import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

const Team: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - KrishiMitra</title>
        <meta name="description" content="Meet the passionate individuals behind KrishiMitra who are working to empower smallholder farmers." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <TeamSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Team; 