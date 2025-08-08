import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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
    name: 'Jennifer Davis',
    location: 'Bloomington, MN',
    text: 'Fast, professional service. The team was knowledgeable and answered all our questions. Great experience!',
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h3>
          <p className="text-lg text-gray-600">
            Real experiences from Minnesota homeowners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 h-full"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection; 