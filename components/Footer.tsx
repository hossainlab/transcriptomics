
import React from 'react';
import { RnaLogo } from './IconComponents';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
            <Link to="/" className="flex items-center gap-3">
                <RnaLogo className="h-10 w-10 text-brand-accent"/>
                <span className="text-xl font-bold font-sans">Transcriptomic Data Analysis</span>
            </Link>
        </div>
        <nav className="flex flex-wrap justify-center -mx-5 -my-2 mb-8 font-sans font-medium">
          <div className="px-5 py-2"><Link to="/" className="text-base text-gray-300 hover:text-white">Home</Link></div>
          <div className="px-5 py-2"><Link to="/pipeline" className="text-base text-gray-300 hover:text-white">Pipeline</Link></div>
          <div className="px-5 py-2"><Link to="/resources" className="text-base text-gray-300 hover:text-white">Resources</Link></div>
          <div className="px-5 py-2"><Link to="/faqs" className="text-base text-gray-300 hover:text-white">FAQs</Link></div>
          <div className="px-5 py-2"><Link to="/instructor" className="text-base text-gray-300 hover:text-white">Instructor</Link></div>
          <div className="px-5 py-2"><a href="/#pricing" className="text-base text-gray-300 hover:text-white">Pricing</a></div>
        </nav>
        <p className="text-center text-base text-gray-400 font-sans">
          &copy; {new Date().getFullYear()} Md. Jubayer Hossain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;