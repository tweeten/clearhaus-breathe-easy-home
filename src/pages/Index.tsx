
import React, { memo, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

// Lazy load components that are below the fold
const RadonEducation = lazy(() => import('../components/RadonEducation'));
const HowItWorks = lazy(() => import('../components/HowItWorks'));
const PricingSection = lazy(() => import('../components/PricingSection'));
const QuoteForm = lazy(() => import('../components/QuoteForm'));
const FloatingCTA = lazy(() => import('../components/FloatingCTA'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#7A0019]"></div>
  </div>
);

const Index = memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        <Suspense fallback={<LoadingFallback />}>
          <RadonEducation />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <HowItWorks />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <PricingSection />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <QuoteForm />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <FloatingCTA />
      </Suspense>
      
      <Footer />
    </div>
  );
});

Index.displayName = 'Index';

export default Index;
