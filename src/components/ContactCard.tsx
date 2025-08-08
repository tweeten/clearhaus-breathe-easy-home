import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactCard = memo(() => {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg p-8 text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col lg:flex-row items-start gap-6">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img
            src="/lovable-uploads/b18fb7f5-c1bf-41eb-bc1d-aa27627e4b5c_processed.png"
            alt="ClearHaus Logo"
            className="h-20 w-auto bg-white rounded-lg p-2"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-6">
          {/* Company Description */}
          <div>
            <p className="text-lg leading-relaxed">
              Minnesota's trusted radon mitigation specialists. We help homeowners breathe easy with professional, certified radon reduction systems.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#7A0019] flex-shrink-0" />
              <span className="text-white">(641) 251-4510</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#7A0019] flex-shrink-0" />
              <span className="text-white">tyler@clearhausmn.com</span>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#7A0019] flex-shrink-0" />
              <span className="text-white">Serving Greater Twin Cities Area</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ContactCard.displayName = 'ContactCard';

export default ContactCard; 