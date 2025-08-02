
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RnaLogo, GithubIcon } from './IconComponents';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Labs', path: '/labs' },
  { name: 'Data', path: '/data' },
  { name: 'Papers', path: '/papers' },
  { name: 'Pipeline', path: '/pipeline' },
  { name: 'Resources', path: '/resources' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Instructor', path: '/instructor' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkClass = 'text-brand-accent font-semibold';
  const inactiveLinkClass = 'text-brand-dark hover:text-brand-accent transition-colors duration-300';

  const getLinkClass = ({ isActive }: { isActive: boolean }) => 
    isActive ? activeLinkClass : inactiveLinkClass;

  return (
    <nav className="bg-brand-light/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <RnaLogo className="h-10 w-10 text-brand-accent group-hover:text-brand-primary transition-colors" />
              <span className="text-xl font-bold text-brand-primary hidden md:block group-hover:text-brand-accent transition-colors">Transcriptomics</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 font-sans font-medium">
             {NAV_LINKS.map(link => (
                <NavLink key={link.name} to={link.path} className={getLinkClass}>
                  {link.name}
                </NavLink>
            ))}
          </div>
          <div className="hidden md:block">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-brand-accent transition-colors">
              <GithubIcon className="h-6 w-6" />
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-dark hover:text-brand-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {NAV_LINKS.map(link => (
                <NavLink key={link.name} to={link.path} className={({isActive}) => `${getLinkClass({isActive})} block px-3 py-2 rounded-md text-base font-sans font-medium`} onClick={() => setIsOpen(false)}>
                  {link.name}
                </NavLink>
            ))}
             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-brand-accent transition-colors block px-3 py-2">
                <GithubIcon className="h-6 w-6 mx-auto" />
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;