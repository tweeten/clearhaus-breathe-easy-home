
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';

const ContactInfo = () => {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Why Choose ClearHaus?
        </h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <Shield className="w-6 h-6 text-[#7A0019] mr-4 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">NRPP Certified</h4>
              <p className="text-gray-600">Licensed and certified radon professionals</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="w-6 h-6 text-[#7A0019] mr-4 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">24-Hour Response</h4>
              <p className="text-gray-600">Quick turnaround on quotes and scheduling</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="w-6 h-6 text-[#7A0019] mr-4 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Local Expertise</h4>
              <p className="text-gray-600">Minnesota-focused with local knowledge</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Contact Us Directly</h4>
        <div className="space-y-3">
          <div className="flex items-center">
            <Phone className="w-5 h-5 text-[#7A0019] mr-3" />
            <span className="text-gray-700">(641) 251-4510</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 text-[#7A0019] mr-3" />
            <span className="text-gray-700">tyler@clearhausmn.com</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
