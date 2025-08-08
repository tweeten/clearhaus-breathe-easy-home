
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: 'NRPP Certified',
    description: 'National Radon Proficiency Program certified professionals'
  },
  {
    icon: Award,
    title: 'Owner-Operated',
    description: 'Personal service and accountability from start to finish'
  },
  {
    icon: Users,
    title: 'Code Compliant',
    description: 'All installations meet Minnesota building codes'
  }
];

const TrustSection = memo(() => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose ClearHaus
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Minnesota's trusted radon mitigation specialists with a commitment to excellence.
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {trustPoints.map((point, index) => (
              <motion.div
                key={point.title}
                className="text-center p-6"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center w-20 h-20 bg-[#7A0019]/10 rounded-full mb-6 mx-auto">
                  <point.icon className="w-10 h-10 text-[#7A0019]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-600">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

TrustSection.displayName = 'TrustSection';

export default TrustSection;
