
import React, { useState } from 'react';
import { ChevronDownIcon } from './IconComponents';

interface FAQItemProps {
  faq: {
    question: string;
    answer: string;
  };
}

const FAQItem: React.FC<FAQItemProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-sans font-semibold text-brand-dark"
      >
        <span>{faq.question}</span>
        <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 text-brand-accent ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <p className="pt-4 text-brand-secondary">
            {faq.answer}
            </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;