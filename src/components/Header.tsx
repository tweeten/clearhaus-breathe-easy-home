
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Why Mitigate?', href: '#education' },
    { label: 'Our Process', href: '#how-it-works' },
    { label: 'Residential Solutions', href: '#pricing' },
    { label: 'About Us', href: '/about', isLink: true },
    { label: 'FAQ', href: '/faq', isLink: true },
  ];

  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (item: any) => {
    if (item.isLink) {
      if (item.href === '/about') {
        navigate('/about');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        navigate(item.href);
      }
      setIsMobileMenuOpen(false);
    } else {
      scrollToSection(item.href);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background shadow-lg' : 'bg-background/95 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img
              src="/lovable-uploads/b18fb7f5-c1bf-41eb-bc1d-aa27627e4b5c.png"
              alt="ClearHaus Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isLink ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-700 hover:text-[#7A0019] transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-700 hover:text-[#7A0019] transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('#quote')}
              className="bg-[#7A0019] hover:bg-[#5A0013] text-white px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden mt-4 pb-4 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-left text-gray-700 hover:text-[#7A0019] transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#quote')}
                className="bg-[#7A0019] hover:bg-[#5A0013] text-white w-full mt-4"
              >
                Get a Free Quote
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
