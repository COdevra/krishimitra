import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import ProblemsSection from '@/components/ProblemsSection';
import SolutionSection from '@/components/SolutionSection';
import SDGsSection from '@/components/SDGsSection';
import Footer from '@/components/Footer';

const Impact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Impact - KrishiMitra</title>
        <meta name="description" content="Learn about the problems we're solving, our solutions, and our contribution to sustainable development goals." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <ProblemsSection />
          <SolutionSection />
          <SDGsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Impact; 