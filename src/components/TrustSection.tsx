
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Star } from 'lucide-react';

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

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Minnetonka, MN',
    text: 'ClearHaus made the entire process seamless. Professional, thorough, and gave us complete peace of mind.',
    rating: 5
  },
  {
    name: 'Mike Peterson',
    location: 'Edina, MN',
    text: 'Excellent work and fair pricing. Our radon levels dropped from 8.2 to 0.7 pCi/L. Highly recommend!',
    rating: 5
  },
  {
    name: 'Lisa Chen',
    location: 'Plymouth, MN',
    text: 'Quick response, professional installation, and great follow-up service. Worth every penny for our family\'s health.',
    rating: 5
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
          className="mb-20"
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h3>
            <p className="text-lg text-gray-600">
              Real experiences from Minnesota homeowners
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
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
