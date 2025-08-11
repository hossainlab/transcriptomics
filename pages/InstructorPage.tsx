
import React from 'react';
import { INSTRUCTOR_INFO } from '../constants';
import { Link } from 'react-router-dom';

const InstructorPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <img 
                    src={INSTRUCTOR_INFO.photoUrl} 
                    alt={INSTRUCTOR_INFO.name} 
                    className="w-48 h-48 rounded-full object-cover flex-shrink-0 border-4 border-brand-accent/50 shadow-lg" 
                />
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold">{INSTRUCTOR_INFO.name}</h1>
                    <p className="mt-2 text-2xl text-brand-accent font-semibold font-sans">{INSTRUCTOR_INFO.position}</p>
                </div>
            </div>
        </div>
      </header>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose lg:prose-xl max-w-none text-brand-secondary">
            <h2>About Md. Jubayer Hossain</h2>
            {INSTRUCTOR_INFO.longBio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            
            <h2>Teaching Philosophy</h2>
            <blockquote className="border-l-4 border-brand-accent pl-6 italic text-brand-secondary">
                "My goal is to demystify bioinformatics and computational biology. I believe that with the right guidance and hands-on practice, any biologist can become proficient in data analysis. This course is designed to be a bridge, empowering you to take control of your data, ask more ambitious questions, and accelerate your research. I focus on building a strong conceptual foundation before diving into the code, ensuring you understand not just 'how' but also 'why'."
            </blockquote>

            <h2>Research Areas</h2>
            <ul>
                <li>Transcriptomics and Gene Expression Analysis</li>
                <li>Single-Cell RNA Sequencing Data Analysis</li>
                <li>Machine Learning Applications in Healthcare</li>
                <li>Biomarker Discovery for Cancer and Neurological Disorders</li>
                <li>AI-Driven Precision Medicine</li>
                <li>Bioinformatics Education and Training</li>
            </ul>

            <div className="mt-16 text-center bg-brand-light p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-brand-primary mt-0">Ready to start learning?</h3>
                <p className="mt-4 text-lg text-brand-secondary">Join the course and gain the skills you need to excel in modern biological research.</p>
                <a href="https://forms.gle/sK7qXPHmSDwoq1738" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-brand-accent text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-colors transform hover:scale-105">
                    Enroll Now
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorPage;