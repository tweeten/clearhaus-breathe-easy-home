
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Shield, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#7A0019]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#7A0019]/3 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-[#7A0019]/5 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center bg-[#7A0019]/10 text-[#7A0019] px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Shield className="w-4 h-4 mr-2" />
              NRPP Certified Radon Professionals
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Breathe easy in a house{' '}
              <span className="text-[#7A0019] relative">
                clear of Radon
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[#7A0019]/20 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            ClearHaus helps Minnesota homeowners detect and mitigate radon for healthier living.
            Professional, certified, and trusted by families across the state.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              onClick={() => scrollToSection('#quote')}
              className="bg-[#7A0019] hover:bg-[#5A0013] text-white px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Get a Free Quote
            </Button>
            <Button
              onClick={() => scrollToSection('#how-it-works')}
              variant="outline"
              className="border-2 border-[#7A0019] text-[#7A0019] hover:bg-[#7A0019] hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-200"
            >
              How It Works
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex items-center">
              <Home className="w-4 h-4 mr-2 text-[#7A0019]" />
              Owner-Operated
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-[#7A0019]" />
              NRPP Certified
            </div>
            <div className="flex items-center">
              <ArrowDown className="w-4 h-4 mr-2 text-[#7A0019]" />
              95%+ Risk Reduction
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('#how-it-works')}
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
