
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import TrustSection from '../components/TrustSection';
import PricingSection from '../components/PricingSection';
import RadonEducation from '../components/RadonEducation';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <TrustSection />
        <RadonEducation />
        <PricingSection />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
