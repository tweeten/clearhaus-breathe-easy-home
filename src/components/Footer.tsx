
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const quickLinks = [
    { label: 'Why Mitigate?', href: '#education' },
    { label: 'Our Process', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Get Quote', href: '#quote' },
    { label: 'FAQ', href: '/faq' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 mb-4 max-w-md">
              Minnesota's trusted radon mitigation specialists. We help homeowners breathe easy 
              with professional, certified radon reduction systems.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-[#7A0019] mr-2" />
                <span className="text-sm">(641) 251-4510</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-[#7A0019] mr-2" />
                <span className="text-sm">tyler@clearhausmn.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-[#7A0019] mr-2" />
                <span className="text-sm">Serving Greater Twin Cities Area</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Stay Informed</h3>
            <p className="text-gray-300 mb-3 text-sm">
              Get radon safety tips and home health updates.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 text-sm"
              />
              <Button className="w-full bg-[#7A0019] hover:bg-[#5A0013] text-sm">
                Subscribe
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 flex flex-col md:flex-row justify-between items-center pt-4 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-xs mb-2 md:mb-0">
            © 2024 ClearHaus. All rights reserved. | Licensed & Insured | NRPP Certified
          </div>
          <div className="flex space-x-4 text-xs">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
