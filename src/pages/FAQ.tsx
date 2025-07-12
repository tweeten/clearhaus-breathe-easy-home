
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What is radon and why is it dangerous?",
    answer: "Radon is a naturally occurring radioactive gas that comes from the breakdown of uranium in soil, rock, and water. It's colorless, odorless, and tasteless, making it impossible to detect without testing. Radon is the second leading cause of lung cancer after smoking and is responsible for about 21,000 lung cancer deaths per year in the United States."
  },
  {
    question: "How does radon get into my home?",
    answer: "Radon enters homes through cracks in foundations, gaps around pipes, construction joints, and other openings that contact the soil. It can accumulate to dangerous levels in enclosed spaces, particularly basements and lower levels of homes."
  },
  {
    question: "How do I know if my home has high radon levels?",
    answer: "The only way to know if your home has elevated radon levels is through testing. The EPA recommends testing all homes below the third floor. You can use short-term test kits (2-90 days) or long-term test kits (more than 90 days). Professional testing is also available and recommended for real estate transactions."
  },
  {
    question: "What radon level requires mitigation?",
    answer: "The EPA recommends taking action to reduce radon levels if your home tests at 4 pCi/L (picocuries per liter) or higher. However, because there is no safe level of radon, the EPA also suggests considering mitigation for levels between 2-4 pCi/L."
  },
  {
    question: "How effective is radon mitigation?",
    answer: "Professional radon mitigation systems are highly effective, typically reducing radon levels by 90-99%. Most systems can reduce levels to below 2 pCi/L, and many achieve levels below 1 pCi/L."
  },
  {
    question: "How long does radon mitigation installation take?",
    answer: "Most residential radon mitigation systems can be installed in 4-8 hours, typically completed in one day. More complex installations or unique home designs may require additional time. We'll provide a clear timeline during your consultation."
  },
  {
    question: "Will a radon mitigation system affect my home's appearance?",
    answer: "We work carefully to minimize visual impact while ensuring system effectiveness. The system includes a fan and piping that extends above your roofline, but we route pipes as discretely as possible and can discuss aesthetic options during your consultation."
  },
  {
    question: "How much does radon mitigation cost in Minnesota?",
    answer: "Costs vary based on your home's foundation type, size, and complexity. Basement systems typically range from $1,200-$1,800, while crawlspace systems range from $1,500-$2,200. We provide transparent, upfront pricing with no hidden fees."
  },
  {
    question: "Do radon mitigation systems require maintenance?",
    answer: "Radon systems require minimal maintenance. We recommend testing your home every 2 years after installation to ensure the system is working effectively. The fan typically lasts 10-15 years and should be checked periodically to ensure it's running properly."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, ClearHaus is fully licensed, insured, and NRPP (National Radon Proficiency Program) certified. All our installations meet or exceed Minnesota state and local building codes."
  },
  {
    question: "What areas in Minnesota do you serve?",
    answer: "We primarily serve the Greater Twin Cities area and surrounding communities. Contact us to confirm service availability in your specific location."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we offer various financing options to make radon mitigation affordable for Minnesota families. Contact us to discuss payment plans and financing options that work for your budget."
  }
];

const FAQ = memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about radon and our mitigation services
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#7A0019] to-[#5A0013] rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-xl mb-6">
                  Contact us directly for personalized answers about your radon concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:641-251-4510"
                    className="bg-white text-[#7A0019] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    Call (641) 251-4510
                  </a>
                  <a
                    href="mailto:tyler@clearhausmn.com"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
});

FAQ.displayName = 'FAQ';

export default FAQ;
