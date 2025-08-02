
import React from 'react';
import { FAQS } from '../constants';
import FAQItem from '../components/FAQItem';

const FaqsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <header className="bg-brand-light border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-brand-primary">Frequently Asked Questions</h1>
            <p className="mt-4 text-xl text-brand-secondary">Find answers to common questions about the course.</p>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div>
          {FAQS.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqsPage;