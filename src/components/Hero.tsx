
import React, { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Shield, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = memo(() => {
  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#7A0019]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#7A0019]/3 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-[#7A0019]/5 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 pt-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-8" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center bg-[#7A0019]/10 text-[#7A0019] px-4 py-2 rounded-full text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Shield className="w-4 h-4 mr-2" />
              NRPP Certified Radon Professionals
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              ClearHaus,{' '}
              <span className="text-[#7A0019]">
                making the air in your home healthier
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            ClearHaus helps Minnesota homeowners detect and mitigate radon for healthier living.
            Professional, certified, and trusted by families across the state.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <Button
              onClick={() => scrollToSection('#quote')}
              className="bg-[#7A0019] text-[#FFFFFF] hover:bg-[#7A0019] px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 border-2 border-[#7A0019]"
            >
              Get Your Free Quote Today
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500"
            variants={itemVariants}
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
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => scrollToSection('#how-it-works')}
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
