import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - KrishiMitra</title>
        <meta name="description" content="Get in touch with the KrishiMitra team. We're here to help and support your farming journey." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact; 