
import React from 'react';
import { Link } from 'react-router-dom';
import { MODULE_DATA, WHAT_YOULL_LEARN, TESTIMONIALS, FAQS, INSTRUCTOR_INFO } from '../constants';
import TestimonialCard from '../components/TestimonialCard';
import FAQItem from '../components/FAQItem';
import ShowcaseCharts from '../components/ShowcaseCharts';
import { CheckIcon } from '../components/IconComponents';

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-brand-highlight text-brand-dark px-1.5 py-0.5 rounded-md font-semibold">{children}</span>
);

const parseAndHighlight = (text: string) => {
  if (!text) return null;
  const parts = text.split(/(##.*?##)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('##') && part.endsWith('##') ? (
          <Highlight key={i}>{part.slice(2, -2)}</Highlight>
        ) : (
          part
        )
      )}
    </>
  );
};

const FeatureListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-center font-sans text-brand-dark">
        <span className="h-2 w-2 mr-3 border border-gray-400 rounded-full flex-shrink-0"></span>
        {children}
    </li>
);


const HomePage: React.FC = () => {
  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <section className="relative bg-brand-primary text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: `url('https://source.unsplash.com/1920x1080/?genetics,science,lab')`}}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Master Transcriptomic Data Analysis
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
            From raw sequencing data to publication-ready figures. A comprehensive, hands-on course for modern biologists.
          </p>
          <div className="mt-10">
            <a
              href="#pricing"
              className="bg-brand-accent text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
              What You'll Learn
            </h2>
            <p className="mt-4 text-lg text-brand-secondary max-w-3xl mx-auto">
              This course provides a comprehensive toolkit for modern biological research, empowering you to move from raw data to impactful discovery.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHAT_YOULL_LEARN.map((item) => (
              <div key={item.title} className="bg-brand-light/50 p-8 rounded-xl shadow-sm border border-gray-200/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-accent/30">
                <div className="flex justify-center items-center mb-6 h-16 w-16 rounded-full bg-brand-accent/10 mx-auto">
                  <item.icon className="h-8 w-8 text-brand-accent" />
                </div>
                <h3 className="text-xl font-bold text-center text-brand-dark mb-3 font-sans">{item.title}</h3>
                <p className="text-brand-secondary text-center leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 sm:py-24 bg-brand-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">Course Modules</h2>
            <p className="mt-4 text-lg text-brand-secondary">
              A step-by-step journey from foundational concepts to advanced analysis.
            </p>
          </div>
          {MODULE_DATA.map((category) => (
            <div key={category.category} className="mb-20">
              <h3 className="text-2xl lg:text-3xl font-bold text-brand-primary mb-12 border-l-4 border-brand-accent pl-4">{category.category}</h3>
              <div className="space-y-20 lg:space-y-28">
                {category.modules.map((module, index) => (
                  <div key={module.id} className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                    
                    {/* Image Collage */}
                    <div className={`relative h-80 w-full max-w-md mx-auto ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                        <div 
                            className="absolute top-0 left-0 w-3/4 h-3/4 bg-white p-2 rounded-lg shadow-lg transform -rotate-6 transition-all duration-500 ease-in-out group-hover:rotate-0 group-hover:scale-105"
                            style={{ 
                                backgroundImage: `url(${module.imageUrls[0]})`, 
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center',
                                filter: 'grayscale(100%)'
                            }}
                        ></div>
                        <div 
                            className="absolute bottom-0 right-0 w-5/6 h-5/6 bg-white p-2 rounded-lg shadow-xl transform rotate-3 transition-all duration-500 ease-in-out group-hover:rotate-0 group-hover:scale-105 z-10"
                            style={{ 
                                backgroundImage: `url(${module.imageUrls[1]})`, 
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center'
                            }}
                        ></div>
                         <div 
                            className="absolute -bottom-4 -left-4 w-1/2 h-1/2 bg-white p-2 rounded-lg shadow-2xl transform rotate-12 transition-all duration-500 ease-in-out group-hover:rotate-0 group-hover:scale-105"
                            style={{ 
                                backgroundImage: `url(${module.imageUrls[2]})`, 
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center',
                                filter: 'grayscale(100%)'
                            }}
                        ></div>
                    </div>
                    
                    {/* Text Card */}
                    <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                         <div className="bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 h-full">
                            <span className="bg-brand-accent/20 text-brand-accent text-sm font-bold px-3 py-1 rounded-full font-sans">
                                Module {module.id.replace('M', '')}
                            </span>
                            <h4 className="relative text-2xl lg:text-3xl font-extrabold text-brand-dark mt-4 mb-3 inline-block">
                                {module.title}
                            </h4>
                            <div className="text-brand-secondary space-y-3 mb-6 leading-relaxed">
                                {parseAndHighlight(module.description)}
                            </div>
                            <div>
                                <h5 className="text-sm font-bold text-brand-dark mb-3 font-sans">Concepts you'll learn:</h5>
                                <div className="flex flex-wrap gap-2">
                                    {module.concepts.map(concept => (
                                        <span key={concept} className="bg-brand-secondary text-white text-xs font-mono px-2.5 py-1 rounded-full">
                                            {concept}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Charts Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">You'll Make Great Charts!</h2>
                <p className="mt-4 text-lg text-brand-secondary">Create beautiful, publication-ready visualizations for your research.</p>
            </div>
            <ShowcaseCharts />
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">From Our Students</h2>
            <p className="mt-4 text-lg text-brand-secondary">
              Hear what past participants have to say about their experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
       <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">Meet Your Instructor</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-brand-light p-8 md:p-12 rounded-lg shadow-xl border border-gray-200">
             <img src={INSTRUCTOR_INFO.photoUrl} alt={INSTRUCTOR_INFO.name} className="w-48 h-48 rounded-full object-cover flex-shrink-0 border-4 border-brand-accent/50" />
             <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-brand-dark">{INSTRUCTOR_INFO.name}</h3>
                <p className="text-lg text-brand-accent font-semibold mt-1 font-sans">{INSTRUCTOR_INFO.position}</p>
                <p className="mt-4 text-brand-secondary">{INSTRUCTOR_INFO.bio}</p>
                <Link to="/instructor" className="mt-6 inline-block text-brand-accent font-bold hover:underline font-sans">
                    Learn more about Jubayer &rarr;
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">Pricing and Enrollment</h2>
            <p className="mt-4 text-lg text-brand-secondary">
              Invest in your career with lifetime access to all course materials.
            </p>
          </div>
          <div 
            className="p-8 sm:p-12 md:p-16 rounded-2xl shadow-xl relative overflow-hidden"
            style={{
              backgroundColor: '#fefcf7',
              backgroundImage: `
                repeating-linear-gradient(45deg, rgba(239, 226, 201, 0.5) 0, rgba(239, 226, 201, 0.5) 1px, transparent 1px, transparent 25px),
                repeating-linear-gradient(-45deg, rgba(239, 226, 201, 0.5) 0, rgba(239, 226, 201, 0.5) 1px, transparent 1px, transparent 25px)
              `
            }}
          >
            <div className="text-center text-brand-dark">
              <div className="flex justify-center items-baseline gap-2">
                <p className="text-7xl md:text-8xl font-black font-sans">8000tk</p>
                <p className="text-2xl md:text-3xl font-semibold text-red-500 line-through font-sans self-center pt-2">10000tk</p>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mt-4 font-sans">
                Lifetime access
              </h3>
              
              <p className="mt-2 text-brand-secondary font-serif italic text-base md:text-lg">
                satisfaction guaranteed or <span className="underline cursor-pointer">immediate refund.</span>
              </p>
              
              <div className="my-8">
                  <a 
                      href="https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_GOOGLE_FORM_LINK/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-100 text-blue-800 font-bold py-3 px-12 rounded-lg text-lg hover:bg-blue-200 transition-colors shadow-md"
                  >
                      Enroll
                  </a>
              </div>
              
              <div className="mt-10 pt-10 text-left grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-xl mx-auto">
                <ul className="space-y-3">
                  <FeatureListItem>Lifetime Access</FeatureListItem>
                  <FeatureListItem>Discord community</FeatureListItem>
                  <FeatureListItem>Interactive learning experience</FeatureListItem>
                </ul>
                <ul className="space-y-3">
                  <FeatureListItem>30+ lessons</FeatureListItem>
                  <FeatureListItem>Certificate of completion</FeatureListItem>
                  <FeatureListItem>Personalized feedback on Discord</FeatureListItem>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div>
            {FAQS.slice(0, 3).map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
          <div className="text-center mt-8">
             <Link to="/faqs" className="text-brand-accent font-bold hover:underline font-sans">
                    View all FAQs &rarr;
                </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
