import React from 'react';
import { Link } from 'react-router-dom';
import { MODULE_DATA, WHAT_YOULL_LEARN, TESTIMONIALS, FAQS, INSTRUCTOR_INFO, TUTORIALS } from '../constants';
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
              href="https://forms.gle/sK7qXPHmSDwoq1738"
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

      {/* Why Learn Transcriptomics Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-primary/10 via-white to-brand-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl mb-4">
              Why Learn Transcriptomics?
            </h2>
            <p className="text-lg text-brand-secondary max-w-3xl mx-auto leading-relaxed">
              Transcriptomics is revolutionizing biological research and opening doors to exciting career opportunities. 
              Here's how mastering these skills will accelerate your academic and professional journey.
            </p>
          </div>

          {/* Academic Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* Academic Excellence */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">Academic Excellence</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-1">Higher Studies (MS/PhD)</h4>
                    <p className="text-brand-secondary text-sm">Stand out in graduate school applications with advanced bioinformatics skills. Many top programs now require computational biology expertise.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-1">Research Publications</h4>
                    <p className="text-brand-secondary text-sm">Analyze your own data and publish high-impact papers. Transcriptomics studies are highly cited in top-tier journals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-1">Grant Applications</h4>
                    <p className="text-brand-secondary text-sm">Strengthen funding proposals with cutting-edge analytical approaches. Reviewers favor projects with robust computational methods.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">Career Opportunities</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-1">Industry Positions</h4>
                    <p className="text-brand-secondary text-sm">Pharmaceutical, biotech, and healthcare companies actively seek transcriptomics experts for drug discovery and development.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-1">Academic Positions</h4>
                    <p className="text-brand-secondary text-sm">Universities worldwide are hiring computational biologists for faculty positions and core facility management.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-1">Consulting & Freelancing</h4>
                    <p className="text-brand-secondary text-sm">Offer specialized analysis services to research groups and startups lacking in-house bioinformatics expertise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Applications Showcase */}
          <div className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-brand-dark text-center mb-8">Real-World Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧬</span>
                </div>
                <h4 className="font-bold text-brand-dark mb-2">Cancer Research</h4>
                <p className="text-sm text-brand-secondary">Identify biomarkers, drug targets, and resistance mechanisms through tumor transcriptome analysis.</p>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧠</span>
                </div>
                <h4 className="font-bold text-brand-dark mb-2">Neuroscience</h4>
                <p className="text-sm text-brand-secondary">Study brain development, neurological diseases, and cognitive functions at the molecular level.</p>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h4 className="font-bold text-brand-dark mb-2">Agriculture</h4>
                <p className="text-sm text-brand-secondary">Improve crop yields, disease resistance, and nutritional content through plant transcriptomics.</p>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💊</span>
                </div>
                <h4 className="font-bold text-brand-dark mb-2">Drug Discovery</h4>
                <p className="text-sm text-brand-secondary">Accelerate pharmaceutical research by understanding drug mechanisms and side effects.</p>
              </div>
            </div>
          </div>


          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Ready to Transform Your Career?</h3>
            <p className="text-brand-secondary mb-6 max-w-2xl mx-auto">
              Join thousands of students who have advanced their careers through transcriptomics. 
              The field is growing rapidly - don't get left behind.
            </p>
            <a
              href="https://forms.gle/sK7qXPHmSDwoq1738"
              className="inline-flex items-center bg-brand-accent text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Your Journey Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Bulk vs Single-Cell Analysis Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl mb-4">
              Complete Transcriptomics Training
            </h2>
            <p className="text-lg text-brand-secondary max-w-3xl mx-auto leading-relaxed">
              This course covers both <strong>Bulk RNA-Seq</strong> and <strong>Single-Cell RNA-Seq</strong> analysis - 
              the two essential approaches in modern transcriptomics research.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* Bulk RNA-Seq */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 shadow-lg border border-blue-200/50 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-3xl">🧪</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">Bulk RNA-Seq</h3>
                    <p className="text-brand-secondary">Population-level gene expression</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-brand-dark mb-3">What is it?</h4>
                  <p className="text-brand-secondary text-sm mb-4">
                    Analyzes the <strong>average gene expression</strong> across millions of cells in a tissue sample. 
                    Provides a comprehensive view of overall biological processes and pathways.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-brand-dark mb-3">Best for:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-brand-secondary">Disease vs. healthy tissue comparisons</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-brand-secondary">Drug treatment effects</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-brand-secondary">Pathway analysis & biomarker discovery</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-brand-secondary">Cost-effective large-scale studies</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50/50 rounded-xl p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-brand-dark">Sample Cost:</span>
                    <span className="text-blue-600 font-bold">₹3,000-8,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="font-semibold text-brand-dark">Resolution:</span>
                    <span className="text-blue-600">Tissue-level</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Single-Cell RNA-Seq */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-8 shadow-lg border border-purple-200/50 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-3xl">🔬</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">Single-Cell RNA-Seq</h3>
                    <p className="text-brand-secondary">Individual cell gene expression</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-brand-dark mb-3">What is it?</h4>
                  <p className="text-brand-secondary text-sm mb-4">
                    Measures gene expression in <strong>individual cells</strong>, revealing cellular heterogeneity 
                    and rare cell types that are masked in bulk analysis.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-brand-dark mb-3">Best for:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-brand-secondary">Cell type identification & characterization</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-brand-secondary">Developmental biology studies</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-brand-secondary">Cancer heterogeneity analysis</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-brand-secondary">Rare cell type discovery</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50/50 rounded-xl p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-brand-dark">Sample Cost:</span>
                    <span className="text-purple-600 font-bold">₹15,000-50,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="font-semibold text-brand-dark">Resolution:</span>
                    <span className="text-purple-600">Single-cell level</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Both Section */}
          <div className="bg-gradient-to-r from-brand-accent/10 via-brand-primary/5 to-brand-accent/10 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-brand-dark text-center mb-8">Why Learn Both Approaches?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h4 className="font-bold text-brand-dark mb-3">Complementary Insights</h4>
                <p className="text-sm text-brand-secondary">
                  Bulk reveals <strong>overall patterns</strong>, while single-cell uncovers <strong>cellular diversity</strong>. 
                  Together, they provide complete biological understanding.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💼</span>
                </div>
                <h4 className="font-bold text-brand-dark mb-3">Career Flexibility</h4>
                <p className="text-sm text-brand-secondary">
                  Master both techniques to handle <strong>any research question</strong>. 
                  Be the go-to expert for both cost-effective and high-resolution studies.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h4 className="font-bold text-brand-dark mb-3">Complete Skillset</h4>
                <p className="text-sm text-brand-secondary">
                  Learn when to use each approach, how to integrate results, and 
                  become proficient in <strong>all major transcriptomics workflows</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Integration Example */}
          <div className="bg-white border-2 border-dashed border-brand-accent/30 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-brand-dark mb-4">Real Research Example</h3>
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="bg-blue-100 px-4 py-2 rounded-full text-sm font-semibold text-blue-700">
                    Bulk RNA-Seq
                  </div>
                  <span className="text-2xl">+</span>
                  <div className="bg-purple-100 px-4 py-2 rounded-full text-sm font-semibold text-purple-700">
                    Single-Cell RNA-Seq
                  </div>
                  <span className="text-2xl">=</span>
                  <div className="bg-green-100 px-4 py-2 rounded-full text-sm font-semibold text-green-700">
                    Complete Study
                  </div>
                </div>
                <p className="text-sm text-brand-secondary leading-relaxed">
                  <strong>Cancer Research:</strong> Use bulk RNA-seq to identify differentially expressed pathways between tumor and normal tissue. 
                  Then use single-cell RNA-seq to discover which specific cell types drive these changes and identify rare cancer stem cells.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Case Studies Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-brand-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl mb-4">
              Real-World Case Studies
            </h2>
            <p className="text-lg text-brand-secondary max-w-3xl mx-auto leading-relaxed">
              See how transcriptomics research has led to breakthrough discoveries and clinical applications. 
              These are the types of studies you'll be equipped to conduct after completing our course.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Case Study 1: COVID-19 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">🦠</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">COVID-19 Immune Response Atlas</h3>
                  <p className="text-brand-secondary text-sm">Single-cell RNA-seq reveals immune response patterns</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-brand-dark mb-2">Study Overview:</h4>
                <p className="text-brand-secondary text-sm leading-relaxed mb-4">
                  This landmark study used <strong>single-cell RNA-seq</strong> to analyze over 780,000 peripheral blood cells from 130 COVID-19 patients with varying disease severity, 
                  creating the most comprehensive immune atlas of COVID-19 to date.
                </p>
                
                <div className="bg-red-50/50 rounded-lg p-4 mb-4">
                  <h5 className="font-semibold text-brand-dark text-sm mb-2">Key Findings:</h5>
                  <ul className="text-sm text-brand-secondary space-y-1">
                    <li>• Characterized immune cell states across disease severity</li>
                    <li>• Found interferon-stimulated gene signatures in severe cases</li>
                    <li>• Identified expansion of nonclassical monocytes</li>
                    <li>• Revealed T-cell dysfunction and exhaustion patterns</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-brand-secondary">
                    <strong>Reference:</strong> Ren, X., et al. "COVID-19 immune features revealed by a large-scale single-cell transcriptome atlas." 
                    <em>Cell</em> 184, 1895–1913 (2021). 
                    <a href="https://doi.org/10.1016/j.cell.2021.01.053" className="text-brand-accent hover:underline" target="_blank" rel="noopener noreferrer">
                      DOI: 10.1016/j.cell.2021.01.053
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Case Study 2: Cancer Drug Resistance */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">🎗️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Breast Cancer Drug Resistance</h3>
                  <p className="text-brand-secondary text-sm">Single-cell analysis reveals pre-existing resistant cells</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-brand-dark mb-2">Study Overview:</h4>
                <p className="text-brand-secondary text-sm leading-relaxed mb-4">
                  This groundbreaking study used <strong>single-cell RNA-seq</strong> to analyze breast cancer cells and discovered that drug-resistant subpopulations 
                  exist even before treatment begins, revolutionizing our understanding of therapy resistance.
                </p>
                
                <div className="bg-purple-50/50 rounded-lg p-4 mb-4">
                  <h5 className="font-semibold text-brand-dark text-sm mb-2">Key Findings:</h5>
                  <ul className="text-sm text-brand-secondary space-y-1">
                    <li>• Identified preexisting drug-resistant cell subpopulations</li>
                    <li>• Found EMT pathways enriched in resistant cells</li>
                    <li>• Discovered metabolic rewiring in resistant populations</li>
                    <li>• Revealed potential combination therapy targets</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-brand-secondary">
                    <strong>Reference:</strong> Echeverria, G.V., et al. "Single-Cell Analysis Reveals a Preexisting Drug-Resistant Subpopulation in the Luminal Breast Cancer Subtype." 
                    <em>Cancer Research</em> 79, 4412-4425 (2019). 
                    <a href="https://doi.org/10.1158/0008-5472.CAN-19-0122" className="text-brand-accent hover:underline" target="_blank" rel="noopener noreferrer">
                      DOI: 10.1158/0008-5472.CAN-19-0122
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Case Study 3: Alzheimer's Disease */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Alzheimer's Disease Brain Atlas</h3>
                  <p className="text-brand-secondary text-sm">Multiregion single-cell mapping reveals disease progression</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-brand-dark mb-2">Study Overview:</h4>
                <p className="text-brand-secondary text-sm leading-relaxed mb-4">
                  This comprehensive study analyzed <strong>single-nucleus RNA-seq</strong> data from 283 brain samples across 6 regions from 48 individuals, 
                  creating the most detailed cellular atlas of Alzheimer's disease progression and cognitive resilience.
                </p>
                
                <div className="bg-blue-50/50 rounded-lg p-4 mb-4">
                  <h5 className="font-semibold text-brand-dark text-sm mb-2">Key Findings:</h5>
                  <ul className="text-sm text-brand-secondary space-y-1">
                    <li>• Characterized 76 distinct cell types across brain regions</li>
                    <li>• Identified region-specific astrocyte and neuron subtypes</li>
                    <li>• Found cellular vulnerability patterns in disease progression</li>
                    <li>• Revealed resilience mechanisms in cognitively normal individuals</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-brand-secondary">
                    <strong>Reference:</strong> Lau, S.F., et al. "Single-cell multiregion dissection of Alzheimer's disease." 
                    <em>Nature</em> 632, 858-868 (2024). 
                    <a href="https://doi.org/10.1038/s41586-024-07606-7" className="text-brand-accent hover:underline" target="_blank" rel="noopener noreferrer">
                      DOI: 10.1038/s41586-024-07606-7
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Case Study 4: Crop Improvement */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">🌾</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Drought-Resistant Rice Development</h3>
                  <p className="text-brand-secondary text-sm">RNA-seq reveals drought tolerance networks</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-brand-dark mb-2">Study Overview:</h4>
                <p className="text-brand-secondary text-sm leading-relaxed mb-4">
                  This study used <strong>RNA-seq</strong> to analyze drought stress responses in rice, identifying regulatory networks 
                  that control drought tolerance and leading to improved breeding strategies for climate-resilient crops.
                </p>
                
                <div className="bg-green-50/50 rounded-lg p-4 mb-4">
                  <h5 className="font-semibold text-brand-dark text-sm mb-2">Key Findings:</h5>
                  <ul className="text-sm text-brand-secondary space-y-1">
                    <li>• Mapped regulatory networks controlling drought and cold stress</li>
                    <li>• Identified key transcription factors and regulatory modules</li>
                    <li>• Found conserved stress response pathways across species</li>
                    <li>• Provided targets for precision breeding programs</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-brand-secondary">
                    <strong>Reference:</strong> Chen, H., et al. "Regulatory networks in plant responses to drought and cold stress." 
                    <em>Plant Physiology</em> 195, 170-189 (2024). 
                    <a href="https://doi.org/10.1093/plphys/kiae022" className="text-brand-accent hover:underline" target="_blank" rel="noopener noreferrer">
                      DOI: 10.1093/plphys/kiae022
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="bg-gradient-to-r from-brand-accent/10 via-brand-primary/5 to-brand-accent/10 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-brand-dark text-center mb-8">Research Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-brand-accent mb-2">780,000+</div>
                <p className="text-sm text-brand-secondary">Single cells analyzed in the COVID-19 immune atlas study</p>
              </div>
              <div>
                <div className="text-3xl font-black text-brand-accent mb-2">1,800+</div>
                <p className="text-sm text-brand-secondary">Citations for the breast cancer resistance study (2019-2024)</p>
              </div>
              <div>
                <div className="text-3xl font-black text-brand-accent mb-2">283</div>
                <p className="text-sm text-brand-secondary">Brain samples analyzed in Alzheimer's multiregion study</p>
              </div>
              <div>
                <div className="text-3xl font-black text-brand-accent mb-2">76</div>
                <p className="text-sm text-brand-secondary">Cell types identified across brain regions in AD research</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Ready to Contribute to the Next Breakthrough?</h3>
            <p className="text-brand-secondary mb-6 max-w-2xl mx-auto">
              These discoveries were made possible by researchers who mastered transcriptomics analysis. 
              Join our course and develop the skills to make your own groundbreaking contributions.
            </p>
            <a
              href="https://forms.gle/sK7qXPHmSDwoq1738"
              className="inline-flex items-center bg-brand-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Begin Your Research Journey
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MODULE_DATA.flatMap(category => category.modules).map((module) => (
              <div key={module.id} className="group">
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="mb-4">
                    <div className="text-brand-accent text-sm font-bold font-sans mb-1">
                      Module {module.id.replace('M', '')}
                    </div>
                    <h4 className="text-xl font-extrabold text-brand-dark">
                      {module.title}
                    </h4>
                  </div>
                  <div className="text-brand-secondary space-y-3 mb-6 leading-relaxed text-sm">
                    {parseAndHighlight(module.description)}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-brand-dark mb-3 font-sans">Concepts you'll learn:</h5>
                    <div className="flex flex-wrap gap-2">
                      {module.concepts.map((concept: string) => (
                        <span key={concept} className="bg-brand-secondary text-white text-xs font-mono px-2.5 py-1 rounded-full">
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      {/* Featured Tutorials Section */}
      <section className="py-16 sm:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">Featured Tutorials</h2>
            <p className="mt-4 text-lg text-brand-secondary max-w-3xl mx-auto">
              Get a taste of the hands-on lessons included in the course. Watch these key tutorials to jumpstart your learning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TUTORIALS.map((tutorial) => (
              <div key={tutorial.title} className="group bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                <div className="flex-grow">
                  <div className="flex justify-center items-center mb-6 h-16 w-16 rounded-full bg-brand-accent/10 mx-auto transition-colors duration-300 group-hover:bg-brand-accent">
                    <tutorial.icon className="h-8 w-8 text-brand-accent transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-sans text-brand-dark mb-3">{tutorial.title}</h3>
                  <p className="text-brand-secondary leading-relaxed">{tutorial.description}</p>
                </div>
                <div className="mt-6">
                  <a href={tutorial.link} className="bg-brand-secondary text-white font-bold py-2 px-6 rounded-full text-base hover:bg-brand-primary transition-all transform hover:scale-105 shadow-md font-sans">
                    Watch Tutorial
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-white">
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
       <section className="py-16 sm:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">Meet Your Instructor</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-200">
             <img src={INSTRUCTOR_INFO.photoUrl} alt={INSTRUCTOR_INFO.name} className="w-48 h-48 rounded-full object-cover flex-shrink-0 border-4 border-brand-accent/50" />
             <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-brand-dark">{INSTRUCTOR_INFO.name}</h3>
                <p className="text-lg text-brand-accent font-semibold mt-1 font-sans">{INSTRUCTOR_INFO.position}</p>
                <p className="mt-4 text-brand-secondary">{INSTRUCTOR_INFO.bio}</p>
                <Link to="/instructor" className="mt-6 inline-block text-brand-accent font-bold hover:underline font-sans">
                    Learn more about Md. Jubayer Hossain &rarr;
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-br from-brand-light via-white to-brand-light/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl mb-4">
              Start Your Journey Today
            </h2>
            <p className="text-lg text-brand-secondary max-w-2xl mx-auto leading-relaxed">
              Join hundreds of researchers who have transformed their data analysis skills with our comprehensive course.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-brand-accent to-brand-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                ⭐ Most Popular
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-light/20 to-transparent opacity-50"></div>
              
              <div className="relative p-8 sm:p-12">
                {/* Price Display */}
                <div className="text-center mb-8">
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-5xl md:text-7xl font-black text-brand-dark font-sans">
                        ৳10,000
                      </div>
                      <div className="text-xl md:text-2xl font-semibold text-red-500 line-through opacity-75">
                        ৳20,000
                      </div>
                    </div>
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold transform rotate-12">
                      50% OFF
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
                      Complete Course Access
                    </h3>
                    <p className="text-brand-secondary">
                      One-time payment • Lifetime access • No subscriptions
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="mb-8">
                    <a 
                      href="https://forms.gle/sK7qXPHmSDwoq1738"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-brand-accent to-brand-primary text-white font-bold py-4 px-12 rounded-xl text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform group"
                    >
                      <span>Enroll Now</span>
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                  <p className="text-sm text-brand-secondary italic">
                    💯 30-day money-back guarantee • 🔒 Secure payment
                  </p>
                </div>

                {/* Features Grid */}
                <div className="border-t border-gray-200 pt-8">
                  <h4 className="text-lg font-bold text-brand-dark mb-6 text-center">
                    Everything You Get:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <FeatureListItem>
                        <span className="font-semibold">Live Sessions</span> (Zoom)
                      </FeatureListItem>
                      <FeatureListItem>
                        <span className="font-semibold">Community Access</span> (Slack/Telegram)
                      </FeatureListItem>
                      <FeatureListItem>
                        <span className="font-semibold">Interactive Learning</span> Platform
                      </FeatureListItem>
                    </div>
                    <div className="space-y-4">
                      <FeatureListItem>
                        <span className="font-semibold">15 Comprehensive</span> Lessons
                      </FeatureListItem>
                      <FeatureListItem>
                        <span className="font-semibold">Certificate</span> of Completion
                      </FeatureListItem>
                      <FeatureListItem>
                        <span className="font-semibold">Personal Feedback</span> & Support
                      </FeatureListItem>
                    </div>
                  </div>
                </div>

                {/* Bonus Section */}
                <div className="mt-8 p-6 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-xl border border-brand-accent/20">
                  <h5 className="font-bold text-brand-dark mb-3 flex items-center">
                    🎁 <span className="ml-2">Bonus Materials (Worth ৳5,000)</span>
                  </h5>
                  <div className="text-sm text-brand-secondary space-y-1">
                    <p>• Exclusive R scripts and templates</p>
                    <p>• Sample datasets for practice</p>
                    <p>• Publication-ready figure templates</p>
                    <p>• Career guidance session</p>
                  </div>
                </div>

                {/* Urgency Element */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-brand-primary font-semibold">
                    ⚡ Limited time offer • Next cohort starts soon!
                  </p>
                </div>
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