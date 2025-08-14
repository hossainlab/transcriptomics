import React, { useState } from 'react';
import { ArrowRightIcon, ChevronDownIcon, CheckIcon } from '../components/IconComponents';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'course' | 'prerequisites';
  tags: string[];
  helpfulFor: string;
}

const comprehensiveFAQs: FAQ[] = [
  // General Questions
  {
    id: 'who-is-this-for',
    question: 'Who is this course designed for?',
    answer: 'This course is designed for anyone interested in learning transcriptomics - from complete beginners to those with some experience. Whether you\'re an undergraduate student, graduate researcher, postdoc, or working professional, our step-by-step approach ensures you can follow along regardless of your starting level. The only requirement is curiosity about gene expression analysis!',
    category: 'general',
    tags: ['beginner', 'any-level', 'students', 'researchers'],
    helpfulFor: 'Students wondering if they\'re qualified to join'
  },
  {
    id: 'no-background',
    question: 'I have no programming or bioinformatics experience. Can I still take this course?',
    answer: 'Absolutely! This course is specifically designed for beginners. We start from the very basics - you\'ll learn essential Unix commands, R programming fundamentals, and biological concepts before diving into analysis. Our "Module 2: Setting up Your Environment" and "Module 4: Fundamentals of R" will get you up to speed. Many successful students started with zero coding experience.',
    category: 'prerequisites',
    tags: ['beginner', 'no-experience', 'programming', 'basics'],
    helpfulFor: 'Complete beginners worried about technical requirements'
  },
  {
    id: 'what-learn',
    question: 'What exactly will I learn in this course?',
    answer: 'You\'ll master both bulk RNA-seq and single-cell RNA-seq analysis from start to finish. This includes: quality control, read alignment, gene quantification, differential expression analysis, pathway enrichment, single-cell clustering, cell type annotation, and creating publication-ready visualizations. You\'ll work with real datasets and learn industry-standard tools like DESeq2, STAR, Salmon, and Seurat.',
    category: 'course',
    tags: ['curriculum', 'skills', 'tools', 'analysis'],
    helpfulFor: 'Students wanting to understand course outcomes'
  },
  {
    id: 'time-commitment',
    question: 'How much time should I dedicate to this course?',
    answer: 'The course is designed to be flexible around your schedule. Each module takes 1-3 hours to complete, with 15 total modules. Most students complete the course in 4-8 weeks, dedicating 3-5 hours per week. You have lifetime access, so you can learn at your own pace - whether that\'s intensive study or leisurely exploration.',
    category: 'course',
    tags: ['time', 'schedule', 'pace', 'flexibility'],
    helpfulFor: 'Busy students planning their study schedule'
  },
  
  // Technical Questions
  {
    id: 'software-requirements',
    question: 'What software and computer requirements do I need?',
    answer: 'You\'ll need a computer with at least 8GB RAM (16GB recommended) running Windows, Mac, or Linux. We\'ll guide you through installing all necessary free, open-source software including R/RStudio, command-line tools, and analysis packages. Module 2 provides detailed installation instructions for all operating systems. No expensive software licenses required!',
    category: 'technical',
    tags: ['software', 'requirements', 'installation', 'free'],
    helpfulFor: 'Students checking if their computer can handle the course'
  },
  {
    id: 'datasets',
    question: 'Will I work with real data or just toy examples?',
    answer: 'You\'ll work extensively with real, published datasets throughout the course. This includes bulk RNA-seq data from cancer studies, COVID-19 research, and developmental biology, plus single-cell data from major atlas projects. Each dataset comes with biological context, so you understand not just the "how" but the "why" behind each analysis.',
    category: 'technical',
    tags: ['datasets', 'real-data', 'examples', 'hands-on'],
    helpfulFor: 'Students wanting practical, real-world experience'
  },
  {
    id: 'stuck-help',
    question: 'What if I get stuck or need help during the course?',
    answer: 'Multiple support channels are available: our active community forum, dedicated Q&A sessions, detailed troubleshooting guides, and direct instructor support. The community is very welcoming to beginners, and we encourage questions at any level. Remember, getting stuck is part of learning - we\'re here to help you through it!',
    category: 'course',
    tags: ['support', 'help', 'community', 'troubleshooting'],
    helpfulFor: 'Students concerned about getting help when needed'
  },
  
  // Course Structure
  {
    id: 'bulk-vs-single-cell',
    question: 'Should I learn bulk RNA-seq or single-cell RNA-seq first?',
    answer: 'Our course is structured to teach bulk RNA-seq first, then single-cell analysis. This progression makes sense because bulk analysis introduces fundamental concepts (quality control, alignment, differential expression) that apply to single-cell work. However, each section is modular - if you\'re only interested in one approach, you can focus on those specific modules.',
    category: 'course',
    tags: ['structure', 'bulk', 'single-cell', 'order'],
    helpfulFor: 'Students planning their learning path'
  },
  {
    id: 'certificate',
    question: 'Do I get a certificate upon completion?',
    answer: 'Yes! Upon completing all modules and assignments, you\'ll receive a certificate of completion that you can add to your LinkedIn profile, CV, or resume. The certificate demonstrates your competency in transcriptomic data analysis and is recognized by employers in biotechnology and research institutions.',
    category: 'course',
    tags: ['certificate', 'completion', 'credentials', 'career'],
    helpfulFor: 'Students interested in formal recognition'
  },
  
  // Career and Applications
  {
    id: 'career-benefits',
    question: 'How will this course help my career?',
    answer: 'Transcriptomics skills are in high demand across biotech, pharma, academic research, and healthcare. Graduates work as bioinformaticians, computational biologists, data scientists, and research scientists. The hands-on experience with industry-standard tools and real datasets gives you immediately applicable skills that employers value highly.',
    category: 'general',
    tags: ['career', 'jobs', 'skills', 'industry'],
    helpfulFor: 'Students considering career impacts'
  },
  {
    id: 'research-applications',
    question: 'What kind of research can I do after this course?',
    answer: 'You\'ll be equipped to tackle diverse research questions: cancer biomarker discovery, drug mechanism studies, developmental biology, immunology, neuroscience, agricultural genomics, and more. The course covers both hypothesis-driven research and exploratory data analysis approaches used in cutting-edge publications.',
    category: 'general',
    tags: ['research', 'applications', 'biology', 'discovery'],
    helpfulFor: 'Students interested in research applications'
  },
  
  // Practical Concerns
  {
    id: 'money-back',
    question: 'What if the course isn\'t right for me?',
    answer: 'We offer a 30-day money-back guarantee, no questions asked. We\'re confident in our course quality, but we understand that learning styles vary. If you\'re not satisfied within the first 30 days, simply contact us for a full refund. Your success is our priority.',
    category: 'course',
    tags: ['refund', 'guarantee', 'satisfaction', 'risk-free'],
    helpfulFor: 'Students concerned about course investment'
  },
  {
    id: 'updates',
    question: 'Will the course content stay current with new developments?',
    answer: 'Absolutely! The field of transcriptomics evolves rapidly, and we regularly update course content to reflect new methods, tools, and best practices. As a lifetime student, you\'ll receive all updates at no additional cost. We also add new modules based on student feedback and emerging techniques.',
    category: 'course',
    tags: ['updates', 'current', 'lifetime', 'evolution'],
    helpfulFor: 'Students concerned about content relevance'
  }
];

const FAQCard: React.FC<{ faq: FAQ; isOpen: boolean; onToggle: () => void }> = ({ faq, isOpen, onToggle }) => {
  const categoryColors = {
    general: 'bg-blue-50 border-blue-200 text-blue-700',
    technical: 'bg-green-50 border-green-200 text-green-700',
    course: 'bg-purple-50 border-purple-200 text-purple-700',
    prerequisites: 'bg-orange-50 border-orange-200 text-orange-700'
  };

  const categoryLabels = {
    general: 'General',
    technical: 'Technical',
    course: 'Course Info',
    prerequisites: 'Prerequisites'
  };

  return (
    <div className={`border-2 rounded-xl transition-all duration-300 ${
      isOpen ? 'border-brand-accent shadow-lg' : 'border-gray-200 hover:border-brand-accent/50'
    }`}>
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[faq.category]}`}>
              {categoryLabels[faq.category]}
            </span>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {faq.helpfulFor}
            </span>
          </div>
          <h3 className="text-lg font-bold text-brand-dark pr-4">{faq.question}</h3>
        </div>
        <ChevronDownIcon className={`w-6 h-6 text-brand-accent transition-transform ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="pt-4 border-t border-gray-200">
            <p className="text-brand-secondary leading-relaxed mb-4">{faq.answer}</p>
            <div className="flex flex-wrap gap-2">
              {faq.tags.map((tag) => (
                <span key={tag} className="bg-brand-light text-brand-dark px-2 py-1 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const FaqsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFAQs, setOpenFAQs] = useState<Set<string>>(new Set());

  const toggleFAQ = (id: string) => {
    const newOpenFAQs = new Set(openFAQs);
    if (newOpenFAQs.has(id)) {
      newOpenFAQs.delete(id);
    } else {
      newOpenFAQs.add(id);
    }
    setOpenFAQs(newOpenFAQs);
  };

  const filteredFAQs = comprehensiveFAQs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { key: 'all', label: 'All Questions', count: comprehensiveFAQs.length },
    { key: 'general', label: 'General', count: comprehensiveFAQs.filter(f => f.category === 'general').length },
    { key: 'prerequisites', label: 'Prerequisites', count: comprehensiveFAQs.filter(f => f.category === 'prerequisites').length },
    { key: 'course', label: 'Course Info', count: comprehensiveFAQs.filter(f => f.category === 'course').length },
    { key: 'technical', label: 'Technical', count: comprehensiveFAQs.filter(f => f.category === 'technical').length }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-brand-light/30 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Everything you need to know about joining our transcriptomics course. 
            Perfect for students of any level - from complete beginners to experienced researchers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/sK7qXPHmSDwoq1738"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Ready to Start Learning?
            </a>
            <a
              href="#faqs"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-brand-primary transition-all"
            >
              Browse Questions
            </a>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Course at a Glance</h2>
            <p className="text-lg text-brand-secondary max-w-3xl mx-auto">
              Quick facts for students considering our transcriptomics course
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Any Level Welcome</h3>
              <p className="text-brand-secondary">Complete beginners to experienced researchers</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">15</div>
              <p className="text-brand-secondary">Comprehensive modules covering all aspects</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
              <p className="text-brand-secondary">Lifetime access to all content and updates</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <div className="text-4xl font-bold text-orange-600 mb-2">30</div>
              <p className="text-brand-secondary">Day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Find Your Answers</h2>
            <p className="text-lg text-brand-secondary max-w-3xl mx-auto mb-8">
              Search or browse by category to find exactly what you're looking for
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto mb-6">
              <input
                type="text"
                placeholder="Search questions, answers, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-accent focus:outline-none text-lg"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(({ key, label, count }) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === key
                      ? 'bg-brand-accent text-white shadow-lg'
                      : 'bg-white text-brand-secondary hover:text-brand-dark border-2 border-gray-200 hover:border-brand-accent'
                  }`}
                >
                  {label} ({count})
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Results */}
          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-brand-secondary">No questions found matching your search.</p>
                <p className="text-brand-secondary mt-2">Try different keywords or browse all categories.</p>
              </div>
            ) : (
              filteredFAQs.map((faq) => (
                <FAQCard
                  key={faq.id}
                  faq={faq}
                  isOpen={openFAQs.has(faq.id)}
                  onToggle={() => toggleFAQ(faq.id)}
                />
              ))
            )}
          </div>

          {/* Quick Actions */}
          <div className="mt-12 flex justify-center gap-4">
            <button
              onClick={() => {
                const allIds = new Set(filteredFAQs.map(faq => faq.id));
                setOpenFAQs(allIds);
              }}
              className="px-6 py-3 bg-brand-secondary text-white rounded-lg hover:bg-opacity-90 transition-all"
            >
              Expand All
            </button>
            <button
              onClick={() => setOpenFAQs(new Set())}
              className="px-6 py-3 border-2 border-brand-secondary text-brand-secondary rounded-lg hover:bg-brand-secondary hover:text-white transition-all"
            >
              Collapse All
            </button>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Still Have Questions?</h2>
          <p className="text-lg text-brand-secondary mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? We're here to help! Reach out to our friendly team, 
            or join our community where fellow students and instructors are ready to assist.
          </p>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-brand-accent">
            <h3 className="text-xl font-bold text-brand-dark mb-6">Ready to Transform Your Skills?</h3>
            <p className="text-brand-secondary mb-6">
              Join thousands of students who've already started their transcriptomics journey. 
              <strong> No prerequisites required - just bring your curiosity!</strong>
            </p>
            
            <a
              href="https://forms.gle/sK7qXPHmSDwoq1738"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-brand-accent to-brand-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform group"
            >
              <span>Enroll Now - Any Level Welcome!</span>
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-sm text-brand-secondary mt-4 italic">
              💯 Quality is assured • 🔒 Secure payment • 📜 Certificate included
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqsPage;