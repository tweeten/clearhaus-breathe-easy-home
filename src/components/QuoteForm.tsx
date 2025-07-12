
import React from 'react';
import QuoteFormHeader from './quote-form/QuoteFormHeader';
import ContactInfo from './quote-form/ContactInfo';
import QuoteFormContainer from './quote-form/QuoteFormContainer';

const QuoteForm = () => {
  return (
    <section id="quote" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <QuoteFormHeader />

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />
            <QuoteFormContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
