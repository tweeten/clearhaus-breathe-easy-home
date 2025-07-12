
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RadonEducation from '../components/RadonEducation';
import HowItWorks from '../components/HowItWorks';
import TrustSection from '../components/TrustSection';
import PricingSection from '../components/PricingSection';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';

const Index = memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <RadonEducation />
        <HowItWorks />
        <TrustSection />
        <PricingSection />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
});

Index.displayName = 'Index';

export default Index;
