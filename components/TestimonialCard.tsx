
import React from 'react';
import type { Testimonial } from '../constants';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col h-full text-center items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <img
        src={testimonial.imageUrl}
        alt={testimonial.name}
        className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-brand-accent/30"
      />
      <div className="flex-grow">
        <p className="text-brand-secondary italic mb-6">"{testimonial.quote}"</p>
      </div>
      <div>
        <p className="font-bold font-sans text-brand-dark">{testimonial.name}</p>
        <p className="text-sm text-brand-accent font-semibold font-sans">{testimonial.title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;