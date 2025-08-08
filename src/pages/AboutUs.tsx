
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, CheckCircle, Users, HandHeart, Award, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
  },
  {
    icon: Zap,
    title: 'Innovation & Excellence',
    description: 'We don\'t settle for "good enough." At ClearHaus, we continually explore better methods, materials, and tools to deliver smarter, quieter, and more efficient radon mitigation systems. Our goal is to set the standard in quality and performance—so your home is not only safer but also supported by the latest proven technologies.'
  }
];

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

const AboutUs = memo(() => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                About ClearHaus
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your trusted partner in radon mitigation across Minnesota
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center mx-auto overflow-hidden">
                    <img 
                      src="/headshot.png" 
                      alt="Tyler Tweeten - ClearHaus Owner" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Tyler, Founder and Owner of ClearHaus</h2>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <p className="text-black-600 mb-4">
                      My name is Tyler Tweeten and I'm a local radon mitigation professional in the Twin Cities. I'm a certified Radon Mitigation Specialist by the National Radon Proficiency Program and licensed, bonded, and insured in Minnesota. My goal is to provide the best radon mitigation solutions to my customers, and to make homes in Minnesota a safer place to live through reduced radon exposure.
                    </p>
                    <p className="text-black-600 mb-4">
                     I live in the Twin Cities with my Wife and Daughter. We both grew up in Iowa and now find ourselves here in Minnesota to be closer to family. When I'm not helping families in Minnesota create safer homes, I enjoy spending time with my family, working on digital and web based projects, and exploring the great outdoors.
                    </p>
                    <p className="text-black-600">
                    I look forward to helping you create a safer home for your family. My goal is to provide you with best in class service and I will always stand behind my work to ensure your home has a radon mitigation system you can trust to keep you and your family healthy.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose ClearHaus Section */}
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

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do at ClearHaus
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
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
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
});

AboutUs.displayName = 'AboutUs';

export default AboutUs;
