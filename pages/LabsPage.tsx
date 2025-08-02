
import React from 'react';

const LabsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <header className="bg-brand-light border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-brand-primary">Lab Exercises</h1>
            <p className="mt-4 text-xl text-brand-secondary">Apply your knowledge with hands-on computational exercises.</p>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose lg:prose-xl max-w-none text-brand-secondary">
            <p>Welcome to the labs section. Here you will find practical, hands-on exercises that accompany the course modules. These labs are designed to reinforce your learning and give you practical experience with the tools and techniques discussed in the lectures.</p>
            
            <h2 id="getting-started">Getting Started</h2>
            <p>To get started, please ensure you have completed Module 2: "Setting up Software Environment for RNA-Seq Analysis". All labs require the software and environment configuration from that module.</p>
            <p>Each lab is provided as a self-contained project, typically including:</p>
            <ul>
                <li>A Jupyter Notebook or R Markdown file with instructions.</li>
                <li>Sample datasets required for the analysis.</li>
                <li>Scripts and configuration files.</li>
            </ul>

            <h2 id="lab-list">Available Labs</h2>
            <p>This section will be updated with links to each lab as you progress through the course. Please check back regularly.</p>
            <div className="bg-brand-light p-6 rounded-lg my-8 border border-gray-200">
                <h3 className="text-xl font-bold text-brand-primary mt-0">Lab 1: Introduction to Linux and Data Handling</h3>
                <p className="mt-2">Coming soon. This lab will cover basic file manipulation, data inspection, and using command-line tools to work with sequencing data formats.</p>
            </div>
            <div className="bg-brand-light p-6 rounded-lg my-8 border border-gray-200">
                <h3 className="text-xl font-bold text-brand-primary mt-0">Lab 2: Bulk RNA-Seq Alignment and Quantification</h3>
                <p className="mt-2">Coming soon. This lab will guide you through a complete bulk RNA-seq pipeline using STAR and Salmon.</p>
            </div>
            <div className="bg-brand-light p-6 rounded-lg my-8 border border-gray-200">
                <h3 className="text-xl font-bold text-brand-primary mt-0">Lab 3: Differential Expression with DESeq2</h3>
                <p className="mt-2">Coming soon. Analyze a real-world dataset to find differentially expressed genes between conditions.</p>
            </div>
             <p>... more labs will be listed here.</p>
        </div>
      </div>
    </div>
  );
};

export default LabsPage;