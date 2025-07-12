
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, CheckCircle, Users, HandHeart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: 'Health First',
      description: 'Your health and safety are our number 1 priority. Always. Each system will be designed and implemented to bring radon levels down to the lowest possible level.'
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'We ensure each mitigation solution meets or exceeds state and local code requirements.'
    },
    {
      icon: CheckCircle,
      title: 'Honesty',
      description: 'We will never oversell, cut corners, or leave a job unfinished. You will always get straightforward and transparent pricing, timely customer service, and a mitigation system that you can trust to keep you and your family healthy.'
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'As a Homeowner, we want you to feel informed and educated on the risks and dangers of Radon exposure. We\'ll partner with you to create a solution that makes your home\'s air as safe as possible.'
    },
    {
      icon: HandHeart,
      title: 'Community Focused',
      description: 'As Minnesota residents, we want to help make our state a better place. This means providing top quality radon mitigation solutions to our customers, giving back to our community through service opportunities, and donating 10% of our profits to local organizations that provide essential services to our friends and neighbors.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                About ClearHaus
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your trusted partner in radon mitigation across Minnesota
              </p>
            </motion.div>

            {/* Bio Section - Placeholder */}
            <motion.div
              className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-gray-500">Upload Your Photo Here</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Tyler</h2>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <p className="text-gray-600 italic">
                      [Upload your bio content here - tell your story, experience, certifications, and what drives your passion for helping Minnesota families stay safe from radon.]
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do at ClearHaus
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-[#7A0019]/10 rounded-full mb-6 mx-auto">
                    <value.icon className="w-8 h-8 text-[#7A0019]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {index + 1}. {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
