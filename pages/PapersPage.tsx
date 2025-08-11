import React, { useState } from 'react';
import { ArrowRightIcon, DatabaseIcon, ChartBarIcon, CellsIcon, TerminalIcon } from '../components/IconComponents';

interface Paper {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  pmid?: string;
  category: 'bulk' | 'single-cell';
  type: string;
  impact: string;
  description: string;
  keyFindings: string[];
  methods: string[];
  relevance: string;
  icon: React.ElementType;
  color: string;
}

const bulkRNASeqPapers: Paper[] = [
  {
    id: 'deseq2',
    title: 'Moderated estimation of fold change and dispersion for RNA-seq data with DESeq2',
    authors: 'Love, M.I., Huber, W., Anders, S.',
    journal: 'Genome Biology',
    year: 2014,
    doi: '10.1186/s13059-014-0550-8',
    pmid: '25516281',
    category: 'bulk',
    type: 'Methods',
    impact: 'Cited 20,000+ times',
    description: 'The seminal paper introducing DESeq2, the most widely used method for differential gene expression analysis in RNA-seq data.',
    keyFindings: [
      'Introduced improved shrinkage estimation for log fold changes',
      'Developed empirical Bayes approach for dispersion estimation',
      'Provided robust statistical framework for small sample sizes',
      'Established standard workflow for bulk RNA-seq analysis'
    ],
    methods: ['DESeq2', 'Negative binomial modeling', 'Empirical Bayes', 'Wald test'],
    relevance: 'Essential foundation for Module 8: Differential Expression Analysis. You will use DESeq2 extensively throughout the course.',
    icon: ChartBarIcon,
    color: 'blue'
  },
  {
    id: 'star',
    title: 'STAR: ultrafast universal RNA-seq aligner',
    authors: 'Dobin, A., Davis, C.A., Schlesinger, F., et al.',
    journal: 'Bioinformatics',
    year: 2013,
    doi: '10.1093/bioinformatics/bts635',
    pmid: '23104886',
    category: 'bulk',
    type: 'Methods',
    impact: 'Cited 15,000+ times',
    description: 'Introduction of STAR aligner, revolutionizing RNA-seq read mapping with unprecedented speed and accuracy.',
    keyFindings: [
      'Developed ultrafast splice-aware alignment algorithm',
      'Achieved superior accuracy for junction detection',
      'Enabled analysis of large-scale RNA-seq datasets',
      'Set new standard for RNA-seq alignment pipelines'
    ],
    methods: ['STAR alignment', 'Suffix arrays', 'Splice junction detection', 'Two-pass mapping'],
    relevance: 'Core tool in Module 5: Bulk RNA-Seq Pipelines. You will learn to optimize STAR parameters for different experimental designs.',
    icon: TerminalIcon,
    color: 'green'
  },
  {
    id: 'gtex',
    title: 'The GTEx Consortium atlas of genetic regulatory effects across human tissues',
    authors: 'GTEx Consortium',
    journal: 'Science',
    year: 2020,
    doi: '10.1126/science.aaz1776',
    pmid: '32913098',
    category: 'bulk',
    type: 'Resource',
    impact: 'Nature Index Top 10',
    description: 'Comprehensive atlas of gene expression and regulation across 54 human tissues from 838 individuals.',
    keyFindings: [
      'Mapped genetic variants affecting gene expression across tissues',
      'Identified tissue-specific and shared regulatory mechanisms',
      'Created largest human transcriptome reference to date',
      'Revealed principles of genetic regulation in humans'
    ],
    methods: ['Bulk RNA-seq', 'eQTL mapping', 'Multi-tissue analysis', 'Genetic association'],
    relevance: 'Reference dataset used in Module 15: Meta-Analysis. Learn to leverage this massive resource for comparative studies.',
    icon: DatabaseIcon,
    color: 'purple'
  },
  {
    id: 'salmon',
    title: 'Salmon provides fast and bias-aware quantification of transcript expression',
    authors: 'Patro, R., Duggal, G., Love, M.I., Irizarry, R.A., Kingsford, C.',
    journal: 'Nature Methods',
    year: 2017,
    doi: '10.1038/nmeth.4197',
    pmid: '28263959',
    category: 'bulk',
    type: 'Methods',
    impact: 'Cited 8,000+ times',
    description: 'Revolutionary alignment-free quantification method that dramatically improved speed and accuracy of transcript abundance estimation.',
    keyFindings: [
      'Introduced lightweight alignment for fast quantification',
      'Developed bias correction models for accurate estimates',
      'Enabled analysis of transcript-level expression',
      'Reduced computational requirements by orders of magnitude'
    ],
    methods: ['Salmon', 'k-mer mapping', 'EM algorithm', 'Bias modeling'],
    relevance: 'Alternative quantification method covered in Module 5. Compare Salmon vs RSEM approaches in hands-on exercises.',
    icon: ChartBarIcon,
    color: 'orange'
  }
];

const singleCellPapers: Paper[] = [
  {
    id: 'seurat',
    title: 'Integrated analysis of multimodal single-cell data',
    authors: 'Hao, Y., Hao, S., Andersen-Nissen, E., et al.',
    journal: 'Cell',
    year: 2021,
    doi: '10.1016/j.cell.2021.04.048',
    pmid: '34062119',
    category: 'single-cell',
    type: 'Methods',
    impact: 'Cited 5,000+ times',
    description: 'Seurat v4 paper describing comprehensive workflow for single-cell multimodal data integration and analysis.',
    keyFindings: [
      'Established standard single-cell analysis workflow',
      'Introduced methods for multimodal data integration',
      'Developed reference-based cell type annotation',
      'Created framework for atlas-scale data analysis'
    ],
    methods: ['Seurat', 'CCA integration', 'UMAP', 'Reference mapping', 'SCTransform'],
    relevance: 'Foundation of Modules 10-14: Single-Cell Analysis. Seurat workflow forms the core of your single-cell training.',
    icon: CellsIcon,
    color: 'blue'
  },
  {
    id: 'human-cell-atlas',
    title: 'Single-cell transcriptomics of 20 mouse organs creates a Tabula Muris',
    authors: 'Tabula Muris Consortium',
    journal: 'Nature',
    year: 2018,
    doi: '10.1038/s41586-018-0590-4',
    pmid: '30283141',
    category: 'single-cell',
    type: 'Atlas',
    impact: 'Cited 3,500+ times',
    description: 'Comprehensive single-cell atlas of mouse organs, establishing cell type definitions and reference datasets.',
    keyFindings: [
      'Characterized cell types across 20 mouse organs',
      'Created comprehensive reference atlas for mouse biology',
      'Identified tissue-specific and shared cell populations',
      'Established standards for multi-organ single-cell studies'
    ],
    methods: ['10X Chromium', 'SMART-Seq2', 'Cell type annotation', 'Cross-tissue comparison'],
    relevance: 'Reference dataset used in Module 12: Clustering & Cell Annotation. Practice cell type identification using this atlas.',
    icon: DatabaseIcon,
    color: 'green'
  },
  {
    id: 'trajectory',
    title: 'The dynamics and regulators of cell fate decisions are revealed by pseudotemporal ordering of single cells',
    authors: 'Trapnell, C., Cacchiarelli, D., Grimsby, J., et al.',
    journal: 'Nature Biotechnology',
    year: 2014,
    doi: '10.1038/nbt.2859',
    pmid: '24658644',
    category: 'single-cell',
    type: 'Methods',
    impact: 'Cited 4,800+ times',
    description: 'Pioneering work on pseudotime analysis, introducing Monocle for trajectory inference in single-cell data.',
    keyFindings: [
      'Introduced concept of pseudotime for developmental ordering',
      'Developed trajectory inference algorithms',
      'Revealed dynamics of cell fate decisions',
      'Established framework for temporal analysis of single cells'
    ],
    methods: ['Monocle', 'Pseudotime', 'Trajectory inference', 'Developmental analysis'],
    relevance: 'Advanced topic in Module 14: Single-Cell Analysis. Learn trajectory analysis for developmental studies.',
    icon: ArrowRightIcon,
    color: 'purple'
  },
  {
    id: 'integration',
    title: 'Comprehensive Integration of Single-Cell Data',
    authors: 'Stuart, T., Butler, A., Hoffman, P., et al.',
    journal: 'Cell',
    year: 2019,
    doi: '10.1016/j.cell.2019.05.031',
    pmid: '31178118',
    category: 'single-cell',
    type: 'Methods',
    impact: 'Cited 7,200+ times',
    description: 'Seurat v3 integration methods for combining multiple single-cell datasets while preserving biological variation.',
    keyFindings: [
      'Developed canonical correlation analysis for integration',
      'Solved batch effect problems in single-cell data',
      'Enabled large-scale atlas construction',
      'Preserved biological signals while removing technical noise'
    ],
    methods: ['Seurat v3', 'CCA', 'Mutual nearest neighbors', 'Anchor-based integration'],
    relevance: 'Core method in Module 13: Data Integration. Essential for combining multiple single-cell experiments.',
    icon: CellsIcon,
    color: 'orange'
  },
  {
    id: 'spatial',
    title: 'Spatial transcriptomics and in situ sequencing to study Alzheimer\'s disease',
    authors: 'Chen, A., Liao, S., Cheng, M., et al.',
    journal: 'Cell',
    year: 2021,
    doi: '10.1016/j.cell.2021.04.016',
    pmid: '33951415',
    category: 'single-cell',
    type: 'Application',
    impact: 'Featured in Cell',
    description: 'Breakthrough application of spatial transcriptomics to understand Alzheimer\'s disease pathology in tissue context.',
    keyFindings: [
      'Mapped disease progression in spatial context',
      'Identified region-specific cellular responses',
      'Revealed cell-cell communication patterns',
      'Demonstrated clinical relevance of spatial omics'
    ],
    methods: ['Spatial transcriptomics', '10X Visium', 'Spatial analysis', 'Disease modeling'],
    relevance: 'Advanced application in Module 14: Spatial Transcriptomics. Explore cutting-edge spatial analysis methods.',
    icon: TerminalIcon,
    color: 'red'
  },
  {
    id: 'covid-atlas',
    title: 'A single-cell atlas of the peripheral immune response in patients with severe COVID-19',
    authors: 'Wilk, A.J., Rustagi, A., Zhao, N.Q., et al.',
    journal: 'Nature Medicine',
    year: 2020,
    doi: '10.1038/s41591-020-0944-y',
    pmid: '32514174',
    category: 'single-cell',
    type: 'Application',
    impact: 'Cited 1,200+ times',
    description: 'Critical single-cell study revealing immune dysfunction in severe COVID-19 patients.',
    keyFindings: [
      'Characterized immune cell states in severe COVID-19',
      'Identified inflammatory signatures in blood cells',
      'Revealed T cell dysfunction patterns',
      'Provided insights for therapeutic targets'
    ],
    methods: ['10X single-cell', 'Immune profiling', 'Differential expression', 'Pathway analysis'],
    relevance: 'Real-world case study used throughout the course. Example of translational single-cell research with clinical impact.',
    icon: CellsIcon,
    color: 'indigo'
  }
];

const PaperCard: React.FC<{ paper: Paper; isActive: boolean; onClick: () => void }> = ({
  paper,
  isActive,
  onClick
}) => {
  const colorClasses = {
    blue: 'border-blue-500 bg-blue-50',
    green: 'border-green-500 bg-green-50',
    purple: 'border-purple-500 bg-purple-50',
    orange: 'border-orange-500 bg-orange-50',
    red: 'border-red-500 bg-red-50',
    indigo: 'border-indigo-500 bg-indigo-50'
  };

  const activeColorClasses = {
    blue: 'border-blue-600 bg-blue-100 shadow-blue-200',
    green: 'border-green-600 bg-green-100 shadow-green-200',
    purple: 'border-purple-600 bg-purple-100 shadow-purple-200',
    orange: 'border-orange-600 bg-orange-100 shadow-orange-200',
    red: 'border-red-600 bg-red-100 shadow-red-200',
    indigo: 'border-indigo-600 bg-indigo-100 shadow-indigo-200'
  };

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer transition-all duration-300 rounded-xl border-2 p-6 ${
        isActive
          ? `${activeColorClasses[paper.color as keyof typeof activeColorClasses]} shadow-lg scale-105`
          : `${colorClasses[paper.color as keyof typeof colorClasses]} hover:shadow-md hover:scale-102`
      }`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-lg ${isActive ? 'bg-white' : 'bg-white/70'}`}>
          <paper.icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
              paper.category === 'bulk' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-purple-100 text-purple-700'
            }`}>
              {paper.category === 'bulk' ? 'Bulk RNA-seq' : 'Single-Cell'}
            </span>
            <span className="text-xs bg-white/80 px-2 py-1 rounded-full font-mono">
              {paper.type}
            </span>
          </div>
          <h3 className="text-lg font-bold text-brand-dark mb-2 line-clamp-2">{paper.title}</h3>
          <p className="text-sm text-brand-secondary mb-2">{paper.authors}</p>
          <div className="flex items-center gap-3 text-sm">
            <span className="font-semibold text-brand-accent">{paper.journal}</span>
            <span className="text-brand-secondary">{paper.year}</span>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
              {paper.impact}
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm text-brand-secondary leading-relaxed">{paper.description}</p>
    </div>
  );
};

const PaperDetails: React.FC<{ paper: Paper }> = ({ paper }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
    <div className="flex items-center gap-4 mb-6">
      <div className={`p-4 rounded-xl ${paper.color === 'blue' ? 'bg-blue-100' : paper.color === 'green' ? 'bg-green-100' : paper.color === 'purple' ? 'bg-purple-100' : paper.color === 'orange' ? 'bg-orange-100' : paper.color === 'red' ? 'bg-red-100' : 'bg-indigo-100'}`}>
        <paper.icon className="w-8 h-8" />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-brand-dark mb-2">{paper.title}</h2>
        <p className="text-brand-secondary mb-2">{paper.authors}</p>
        <div className="flex items-center gap-4 text-sm">
          <span className="font-semibold text-brand-accent">{paper.journal} ({paper.year})</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
            {paper.impact}
          </span>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-bold text-brand-dark mb-4">Key Findings</h3>
        <ul className="space-y-2">
          {paper.keyFindings.map((finding, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-brand-secondary">{finding}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold text-brand-dark mb-4">Methods & Tools</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {paper.methods.map((method, idx) => (
            <span key={idx} className="bg-brand-light text-brand-dark px-3 py-2 rounded-full text-sm font-mono border">
              {method}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-8 p-6 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-xl">
      <h3 className="text-lg font-bold text-brand-dark mb-3">Course Relevance</h3>
      <p className="text-brand-secondary leading-relaxed">{paper.relevance}</p>
    </div>

    <div className="mt-6 flex flex-col sm:flex-row gap-4">
      <a
        href={`https://doi.org/${paper.doi}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all"
      >
        <span>Read Paper</span>
        <ArrowRightIcon className="ml-2 w-4 h-4" />
      </a>
      {paper.pmid && (
        <a
          href={`https://pubmed.ncbi.nlm.nih.gov/${paper.pmid}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center border-2 border-brand-primary text-brand-primary font-semibold py-3 px-6 rounded-lg hover:bg-brand-primary hover:text-white transition-all"
        >
          PubMed
        </a>
      )}
    </div>
  </div>
);

const PapersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bulk' | 'single-cell'>('bulk');
  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(bulkRNASeqPapers[0]);

  const currentPapers = activeTab === 'bulk' ? bulkRNASeqPapers : singleCellPapers;

  const handleTabChange = (tab: 'bulk' | 'single-cell') => {
    setActiveTab(tab);
    setSelectedPaper(tab === 'bulk' ? bulkRNASeqPapers[0] : singleCellPapers[0]);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-brand-light/30 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Essential Papers in Transcriptomics
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Explore groundbreaking publications that shaped bulk and single-cell RNA-seq analysis. 
            These papers form the foundation of methods you'll master in our course.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/sK7qXPHmSDwoq1738"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Master These Methods
            </a>
            <a
              href="#papers"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-brand-primary transition-all"
            >
              Explore Papers
            </a>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">High-Impact Research</h2>
            <p className="text-lg text-brand-secondary max-w-3xl mx-auto">
              These publications have collectively shaped the field of transcriptomics and continue to guide current research practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">20,000+</div>
              <p className="text-brand-secondary">Citations for DESeq2 paper</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-brand-secondary">Combined publications featured</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">2013-2021</div>
              <p className="text-brand-secondary">Span of breakthrough discoveries</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <div className="text-4xl font-bold text-orange-600 mb-2">15</div>
              <p className="text-brand-secondary">Course modules these papers support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Paper Explorer */}
      <section id="papers" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Literature Explorer</h2>
            <p className="text-lg text-brand-secondary max-w-3xl mx-auto mb-8">
              Click on any paper to explore its key contributions, methods, and relevance to your learning journey.
            </p>
            
            {/* Tab Selector */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-xl p-1 flex">
                <button
                  onClick={() => handleTabChange('bulk')}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'bulk'
                      ? 'bg-brand-accent text-white shadow-lg'
                      : 'text-brand-secondary hover:text-brand-dark'
                  }`}
                >
                  Bulk RNA-seq Papers
                </button>
                <button
                  onClick={() => handleTabChange('single-cell')}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'single-cell'
                      ? 'bg-brand-accent text-white shadow-lg'
                      : 'text-brand-secondary hover:text-brand-dark'
                  }`}
                >
                  Single-Cell Papers
                </button>
              </div>
            </div>
          </div>

          {/* Paper Cards */}
          <div className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {currentPapers.map((paper) => (
                <PaperCard
                  key={paper.id}
                  paper={paper}
                  isActive={selectedPaper?.id === paper.id}
                  onClick={() => setSelectedPaper(paper)}
                />
              ))}
            </div>
          </div>

          {/* Selected Paper Details */}
          {selectedPaper && <PaperDetails paper={selectedPaper} />}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Learn from the Best Research</h2>
          <p className="text-lg text-brand-secondary mb-8 max-w-3xl mx-auto">
            Don't just read about these methods—master them! Our course teaches you to implement and apply 
            the same techniques used in these high-impact studies.
          </p>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-brand-accent">
            <h3 className="text-xl font-bold text-brand-dark mb-4">What You'll Master</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="text-left">
                <h4 className="font-semibold text-brand-dark mb-2">From Bulk RNA-seq Papers:</h4>
                <ul className="text-sm text-brand-secondary space-y-1">
                  <li>• DESeq2 differential expression analysis</li>
                  <li>• STAR alignment optimization</li>
                  <li>• Salmon quantification workflows</li>
                  <li>• GTEx data mining techniques</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-brand-dark mb-2">From Single-Cell Papers:</h4>
                <ul className="text-sm text-brand-secondary space-y-1">
                  <li>• Seurat integration methods</li>
                  <li>• Trajectory inference with Monocle</li>
                  <li>• Reference-based annotation</li>
                  <li>• Spatial transcriptomics analysis</li>
                </ul>
              </div>
            </div>
            
            <a
              href="https://forms.gle/sK7qXPHmSDwoq1738"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-brand-accent to-brand-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform group"
            >
              <span>Start Learning These Methods</span>
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PapersPage;