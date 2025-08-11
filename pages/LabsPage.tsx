
import React, { useState } from 'react';
import { ArrowRightIcon, CodeIcon, PlayIcon, CheckIcon, ClockIcon, BookOpenIcon } from '../components/IconComponents';

interface Lab {
  id: string;
  title: string;
  description: string;
  module: number;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'bulk' | 'single-cell' | 'general';
  skills: string[];
  tools: string[];
  objectives: string[];
  dataset: string;
  status: 'available' | 'coming-soon';
  icon: React.ElementType;
}

const labs: Lab[] = [
  {
    id: 'linux-basics',
    title: 'Introduction to Linux and Data Handling',
    description: 'Master essential command-line skills for bioinformatics. Learn to navigate directories, manipulate files, and work with FASTQ/FASTA formats.',
    module: 3,
    duration: '2-3 hours',
    difficulty: 'beginner',
    category: 'general',
    skills: ['Command line navigation', 'File manipulation', 'Text processing', 'Data inspection'],
    tools: ['bash', 'grep', 'awk', 'sed', 'head/tail'],
    objectives: [
      'Navigate Linux filesystem efficiently',
      'Inspect and manipulate FASTQ files',
      'Use grep and awk for data filtering',
      'Create and run basic bash scripts'
    ],
    dataset: 'Sample FASTQ files (10,000 reads)',
    status: 'available',
    icon: CodeIcon
  },
  {
    id: 'quality-control',
    title: 'RNA-seq Quality Control with FastQC',
    description: 'Learn to assess sequencing data quality using FastQC and MultiQC. Identify common issues and make informed decisions about preprocessing.',
    module: 4,
    duration: '1-2 hours',
    difficulty: 'beginner',
    category: 'general',
    skills: ['Quality assessment', 'Report interpretation', 'Data visualization'],
    tools: ['FastQC', 'MultiQC', 'R/ggplot2'],
    objectives: [
      'Run FastQC on bulk and single-cell data',
      'Interpret quality control metrics',
      'Identify problematic samples',
      'Generate comprehensive QC reports'
    ],
    dataset: 'Public RNA-seq data from 12 samples',
    status: 'available',
    icon: CheckIcon
  },
  {
    id: 'bulk-pipeline',
    title: 'Complete Bulk RNA-seq Pipeline',
    description: 'Execute a full bulk RNA-seq analysis from raw reads to gene counts using STAR aligner and Salmon quantification.',
    module: 5,
    duration: '4-6 hours',
    difficulty: 'intermediate',
    category: 'bulk',
    skills: ['Read alignment', 'Transcript quantification', 'Pipeline construction'],
    tools: ['STAR', 'Salmon', 'samtools', 'tximport'],
    objectives: [
      'Build STAR genome index',
      'Align reads to reference genome',
      'Quantify transcript abundances',
      'Compare alignment vs pseudo-alignment approaches'
    ],
    dataset: 'Cancer vs normal samples (6 samples, 20M reads each)',
    status: 'available',
    icon: CodeIcon
  },
  {
    id: 'deseq2-analysis',
    title: 'Differential Expression with DESeq2',
    description: 'Identify differentially expressed genes using DESeq2. Learn normalization, statistical testing, and result interpretation.',
    module: 8,
    duration: '3-4 hours',
    difficulty: 'intermediate',
    category: 'bulk',
    skills: ['Statistical analysis', 'Data normalization', 'Result interpretation'],
    tools: ['DESeq2', 'R/Bioconductor', 'ggplot2', 'pheatmap'],
    objectives: [
      'Perform DESeq2 differential expression analysis',
      'Create MA plots and volcano plots',
      'Generate publication-quality heatmaps',
      'Interpret statistical significance and effect sizes'
    ],
    dataset: 'COVID-19 patient samples vs healthy controls',
    status: 'available',
    icon: PlayIcon
  },
  {
    id: 'pathway-analysis',
    title: 'Functional Enrichment and Pathway Analysis',
    description: 'Discover biological insights from gene lists using GO enrichment and KEGG pathway analysis with clusterProfiler.',
    module: 9,
    duration: '2-3 hours',
    difficulty: 'intermediate',
    category: 'bulk',
    skills: ['Functional annotation', 'Pathway analysis', 'Biological interpretation'],
    tools: ['clusterProfiler', 'enrichplot', 'KEGG', 'GO database'],
    objectives: [
      'Perform GO enrichment analysis',
      'Analyze KEGG pathways',
      'Create enrichment visualizations',
      'Interpret biological significance of results'
    ],
    dataset: 'Differentially expressed genes from cancer study',
    status: 'available',
    icon: BookOpenIcon
  },
  {
    id: 'scrna-preprocessing',
    title: 'Single-cell RNA-seq Preprocessing',
    description: 'Process raw single-cell data using Cell Ranger and perform initial quality control with Seurat.',
    module: 11,
    duration: '3-4 hours',
    difficulty: 'intermediate',
    category: 'single-cell',
    skills: ['Single-cell preprocessing', 'Quality filtering', 'Doublet detection'],
    tools: ['Cell Ranger', 'Seurat', 'Scrublet', 'R/Bioconductor'],
    objectives: [
      'Process 10x Genomics data with Cell Ranger',
      'Filter low-quality cells and genes',
      'Detect and remove doublets',
      'Normalize and scale single-cell data'
    ],
    dataset: 'PBMC 3k dataset from 10x Genomics',
    status: 'available',
    icon: CheckIcon
  },
  {
    id: 'scrna-clustering',
    title: 'Single-cell Clustering and Visualization',
    description: 'Discover cell populations using dimensionality reduction, clustering, and interactive visualization techniques.',
    module: 12,
    duration: '4-5 hours',
    difficulty: 'intermediate',
    category: 'single-cell',
    skills: ['Dimensionality reduction', 'Clustering algorithms', 'Data visualization'],
    tools: ['Seurat', 'UMAP', 't-SNE', 'Leiden clustering'],
    objectives: [
      'Perform PCA and select optimal dimensions',
      'Generate UMAP and t-SNE embeddings',
      'Identify cell clusters using Leiden algorithm',
      'Create publication-ready visualizations'
    ],
    dataset: 'Immune cell dataset with 8 cell types',
    status: 'available',
    icon: PlayIcon
  },
  {
    id: 'cell-annotation',
    title: 'Cell Type Annotation and Marker Discovery',
    description: 'Annotate cell clusters using marker genes and reference datasets with automated and manual approaches.',
    module: 13,
    duration: '3-4 hours',
    difficulty: 'advanced',
    category: 'single-cell',
    skills: ['Cell type annotation', 'Marker gene analysis', 'Reference mapping'],
    tools: ['Seurat', 'SingleR', 'CellTypist', 'Human Cell Atlas'],
    objectives: [
      'Identify cluster-specific marker genes',
      'Annotate cells using reference datasets',
      'Validate annotations with known markers',
      'Compare manual vs automated annotation methods'
    ],
    dataset: 'Human lung tissue single-cell data',
    status: 'available',
    icon: BookOpenIcon
  },
  {
    id: 'trajectory-analysis',
    title: 'Trajectory Inference and Pseudotime Analysis',
    description: 'Analyze cellular differentiation trajectories using Monocle3 and uncover temporal gene expression patterns.',
    module: 14,
    duration: '4-5 hours',
    difficulty: 'advanced',
    category: 'single-cell',
    skills: ['Trajectory inference', 'Pseudotime analysis', 'Dynamic gene expression'],
    tools: ['Monocle3', 'Slingshot', 'tradeSeq', 'R/Bioconductor'],
    objectives: [
      'Construct differentiation trajectories',
      'Calculate pseudotime for cells',
      'Identify genes with dynamic expression',
      'Visualize trajectory-associated patterns'
    ],
    dataset: 'Hematopoietic differentiation dataset',
    status: 'available',
    icon: ArrowRightIcon
  },
  {
    id: 'integration-analysis',
    title: 'Multi-sample Integration and Batch Correction',
    description: 'Integrate multiple single-cell datasets while preserving biological variation and removing technical batch effects.',
    module: 15,
    duration: '5-6 hours',
    difficulty: 'advanced',
    category: 'single-cell',
    skills: ['Data integration', 'Batch correction', 'Meta-analysis'],
    tools: ['Seurat', 'Harmony', 'Scanpy', 'scVI'],
    objectives: [
      'Integrate datasets from different studies',
      'Remove batch effects while preserving biology',
      'Compare integration methods',
      'Perform cross-dataset analysis'
    ],
    dataset: 'COVID-19 datasets from 3 different studies',
    status: 'coming-soon',
    icon: CodeIcon
  }
];

const LabCard: React.FC<{ lab: Lab; isActive: boolean; onClick: () => void }> = ({ lab, isActive, onClick }) => {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-700 border-green-300',
    intermediate: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    advanced: 'bg-red-100 text-red-700 border-red-300'
  };

  const categoryColors = {
    general: 'border-gray-200 bg-gray-50',
    bulk: 'border-blue-200 bg-blue-50',
    'single-cell': 'border-purple-200 bg-purple-50'
  };

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer transition-all duration-300 rounded-xl border-2 p-6 hover:shadow-lg hover:scale-102 ${
        isActive
          ? 'border-brand-accent shadow-lg scale-105'
          : `${categoryColors[lab.category]} hover:border-brand-accent/50`
      } ${lab.status === 'coming-soon' ? 'opacity-75' : ''}`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-lg ${isActive ? 'bg-brand-accent text-white' : 'bg-white/70'}`}>
          <lab.icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-brand-secondary text-white px-2 py-1 text-xs font-semibold rounded-full">
              Module {lab.module}
            </span>
            <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${difficultyColors[lab.difficulty]}`}>
              {lab.difficulty}
            </span>
            <span className="text-xs bg-white/80 px-2 py-1 rounded-full">
              {lab.duration}
            </span>
          </div>
          <h3 className="text-lg font-bold text-brand-dark mb-2">{lab.title}</h3>
          <p className="text-sm text-brand-secondary leading-relaxed mb-3">{lab.description}</p>
          <div className="flex items-center gap-2">
            <ClockIcon className="w-4 h-4 text-brand-secondary" />
            <span className="text-xs text-brand-secondary">{lab.dataset}</span>
          </div>
        </div>
      </div>
      
      {lab.status === 'coming-soon' && (
        <div className="text-center py-2">
          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
            Coming Soon
          </span>
        </div>
      )}
    </div>
  );
};

const LabDetails: React.FC<{ lab: Lab }> = ({ lab }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-4 rounded-xl bg-brand-accent text-white">
        <lab.icon className="w-8 h-8" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-brand-secondary text-white px-3 py-1 text-sm font-semibold rounded-full">
            Module {lab.module}
          </span>
          <span className={`px-3 py-1 text-sm font-semibold rounded-full border ${
            lab.difficulty === 'beginner' ? 'bg-green-100 text-green-700 border-green-300' :
            lab.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700 border-yellow-300' :
            'bg-red-100 text-red-700 border-red-300'
          }`}>
            {lab.difficulty}
          </span>
          <span className="text-sm text-brand-secondary">{lab.duration}</span>
        </div>
        <h2 className="text-2xl font-bold text-brand-dark mb-2">{lab.title}</h2>
        <p className="text-brand-secondary">{lab.description}</p>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div>
        <h3 className="text-lg font-bold text-brand-dark mb-4">Learning Objectives</h3>
        <ul className="space-y-2">
          {lab.objectives.map((objective, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
              <span className="text-sm text-brand-secondary">{objective}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold text-brand-dark mb-4">Tools & Technologies</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {lab.tools.map((tool, idx) => (
            <span key={idx} className="bg-brand-light text-brand-dark px-3 py-2 rounded-full text-sm font-mono border">
              {tool}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-brand-dark mb-4">Skills You'll Develop</h3>
        <div className="flex flex-wrap gap-2">
          {lab.skills.map((skill, idx) => (
            <span key={idx} className="bg-gray-100 text-brand-secondary px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="p-6 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-xl mb-6">
      <h3 className="text-lg font-bold text-brand-dark mb-3">Dataset Information</h3>
      <p className="text-brand-secondary">{lab.dataset}</p>
    </div>

    <div className="flex flex-col sm:flex-row gap-4">
      {lab.status === 'available' ? (
        <a
          href="https://forms.gle/sK7qXPHmSDwoq1738"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all"
        >
          <PlayIcon className="mr-2 w-5 h-5" />
          <span>Start Lab Exercise</span>
        </a>
      ) : (
        <div className="inline-flex items-center bg-gray-300 text-gray-600 font-semibold py-3 px-6 rounded-lg cursor-not-allowed">
          <ClockIcon className="mr-2 w-5 h-5" />
          <span>Coming Soon</span>
        </div>
      )}
      <a
        href="https://forms.gle/sK7qXPHmSDwoq1738"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center border-2 border-brand-primary text-brand-primary font-semibold py-3 px-6 rounded-lg hover:bg-brand-primary hover:text-white transition-all"
      >
        <span>Enroll in Full Course</span>
        <ArrowRightIcon className="ml-2 w-4 h-4" />
      </a>
    </div>
  </div>
);

const LabsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLab, setSelectedLab] = useState<Lab | null>(labs[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLabs = labs.filter(lab => {
    const matchesCategory = selectedCategory === 'all' || lab.category === selectedCategory;
    const matchesSearch = lab.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lab.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lab.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { key: 'all', label: 'All Labs', count: labs.length },
    { key: 'general', label: 'Foundations', count: labs.filter(l => l.category === 'general').length },
    { key: 'bulk', label: 'Bulk RNA-seq', count: labs.filter(l => l.category === 'bulk').length },
    { key: 'single-cell', label: 'Single-Cell', count: labs.filter(l => l.category === 'single-cell').length }
  ];

  const availableLabs = labs.filter(l => l.status === 'available').length;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-brand-light/30 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Hands-On Lab Exercises
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Master transcriptomics through practical, real-world exercises. From Linux basics to advanced 
            single-cell analysis - build skills that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/sK7qXPHmSDwoq1738"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Practicing Today
            </a>
            <a
              href="#labs"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-brand-primary transition-all"
            >
              Explore Labs
            </a>
          </div>
        </div>
      </section>

      {/* Lab Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Comprehensive Practical Training</h2>
            <p className="text-lg text-brand-secondary max-w-3xl mx-auto">
              Progressive lab exercises designed to build your skills from beginner to advanced levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <PlayIcon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-600 mb-2">{availableLabs}</div>
              <p className="text-brand-secondary">Labs Available Now</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <ClockIcon className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
              <p className="text-brand-secondary">Hours of Practice</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <CheckIcon className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-600 mb-2">Real</div>
              <p className="text-brand-secondary">Datasets & Tools</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
              <p className="text-brand-secondary">Course modules covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Explorer */}
      <section id="labs" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Interactive Lab Explorer</h2>
            <p className="text-lg text-brand-secondary max-w-3xl mx-auto mb-8">
              Choose your learning path and practice with real datasets used in published research
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto mb-6">
              <input
                type="text"
                placeholder="Search labs by title, skills, or tools..."
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

          {/* Lab Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {filteredLabs.length === 0 ? (
              <div className="col-span-2 text-center py-12">
                <p className="text-xl text-brand-secondary">No labs found matching your criteria.</p>
                <p className="text-brand-secondary mt-2">Try different keywords or category filters.</p>
              </div>
            ) : (
              filteredLabs.map((lab) => (
                <LabCard
                  key={lab.id}
                  lab={lab}
                  isActive={selectedLab?.id === lab.id}
                  onClick={() => setSelectedLab(lab)}
                />
              ))
            )}
          </div>

          {/* Selected Lab Details */}
          {selectedLab && <LabDetails lab={selectedLab} />}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Ready to Start Practicing?</h2>
          <p className="text-lg text-brand-secondary mb-8 max-w-3xl mx-auto">
            Don't just learn theory—get your hands dirty with real data! Our labs provide the practical 
            experience employers value most.
          </p>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-brand-accent">
            <h3 className="text-xl font-bold text-brand-dark mb-4">What Makes Our Labs Special</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="text-left">
                <h4 className="font-semibold text-brand-dark mb-2">Real-World Focus:</h4>
                <ul className="text-sm text-brand-secondary space-y-1">
                  <li>• Published datasets from major studies</li>
                  <li>• Industry-standard tools and workflows</li>
                  <li>• Realistic computational challenges</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-brand-dark mb-2">Progressive Learning:</h4>
                <ul className="text-sm text-brand-secondary space-y-1">
                  <li>• Start with basics, advance gradually</li>
                  <li>• Build on previous lab knowledge</li>
                  <li>• Develop portfolio of completed projects</li>
                </ul>
              </div>
            </div>
            
            <a
              href="https://forms.gle/sK7qXPHmSDwoq1738"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-brand-accent to-brand-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform group"
            >
              <span>Start Your First Lab</span>
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabsPage;