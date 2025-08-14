import React, { useState } from 'react';
import { ArrowRightIcon, DatabaseIcon, ChartBarIcon, CellsIcon, TerminalIcon, PipelineIcon } from '../components/IconComponents';

interface PipelineStep {
  id: number;
  title: string;
  description: string;
  tools: string[];
  details: string;
  icon: React.ElementType;
  color: string;
  timeEstimate: string;
}

const bulkPipelineSteps: PipelineStep[] = [
  {
    id: 1,
    title: "Raw FASTQ Files",
    description: "Start with high-quality sequencing data from your RNA-seq experiment",
    tools: ["FASTQ format", "Quality scores", "Read pairs"],
    details: "Learn to work with paired-end and single-end reads, understand quality encoding (Phred scores), and prepare your data for analysis.",
    icon: DatabaseIcon,
    color: "blue",
    timeEstimate: "30 min"
  },
  {
    id: 2,
    title: "Quality Control",
    description: "Comprehensive assessment and filtering of sequencing reads",
    tools: ["FastQC", "MultiQC", "Trimmomatic"],
    details: "Generate detailed quality reports, identify adapter contamination, assess per-base quality, and make informed trimming decisions.",
    icon: ChartBarIcon,
    color: "green",
    timeEstimate: "45 min"
  },
  {
    id: 3,
    title: "Read Alignment",
    description: "Map reads to reference genome with precision and speed",
    tools: ["STAR", "HISAT2", "Bowtie2"],
    details: "Choose optimal alignment parameters, handle splice junctions, generate alignment statistics, and produce sorted BAM files.",
    icon: PipelineIcon,
    color: "purple",
    timeEstimate: "1 hour"
  },
  {
    id: 4,
    title: "Read Quantification",
    description: "Count reads mapping to genes and transcripts",
    tools: ["RSEM", "Salmon", "featureCounts"],
    details: "Generate accurate gene-level and transcript-level counts, handle multi-mapping reads, and create count matrices for downstream analysis.",
    icon: TerminalIcon,
    color: "orange",
    timeEstimate: "30 min"
  },
  {
    id: 5,
    title: "Differential Expression",
    description: "Identify genes that change between experimental conditions",
    tools: ["DESeq2", "edgeR", "limma"],
    details: "Apply statistical models, control for batch effects, generate volcano plots and MA plots, and interpret results with proper multiple testing correction.",
    icon: ChartBarIcon,
    color: "red",
    timeEstimate: "1.5 hours"
  },
  {
    id: 6,
    title: "Functional Analysis",
    description: "Understand biological meaning through pathway analysis",
    tools: ["clusterProfiler", "GSEA", "Enrichr"],
    details: "Perform GO enrichment, KEGG pathway analysis, create publication-ready plots, and interpret biological significance of results.",
    icon: CellsIcon,
    color: "indigo",
    timeEstimate: "2 hours"
  }
];

const singleCellPipelineSteps: PipelineStep[] = [
  {
    id: 1,
    title: "Raw 10X Data",
    description: "Start with Cell Ranger output: barcodes, features, and matrix",
    tools: ["Cell Ranger", "10X format", "HDF5"],
    details: "Understand 10X Genomics data structure, work with barcodes.tsv, features.tsv, and matrix.mtx files.",
    icon: DatabaseIcon,
    color: "blue",
    timeEstimate: "20 min"
  },
  {
    id: 2,
    title: "Data Loading & QC",
    description: "Import data into Seurat and assess cell quality metrics",
    tools: ["Seurat", "R/Bioconductor", "ggplot2"],
    details: "Calculate QC metrics (nFeatures, nCounts, percent mitochondrial), create violin plots, and establish filtering thresholds.",
    icon: ChartBarIcon,
    color: "green",
    timeEstimate: "1 hour"
  },
  {
    id: 3,
    title: "Filtering & Normalization",
    description: "Remove low-quality cells and normalize expression data",
    tools: ["Seurat", "SCTransform", "Log normalization"],
    details: "Apply cell and gene filtering criteria, perform normalization (LogNormalize vs SCTransform), and scale data for downstream analysis.",
    icon: PipelineIcon,
    color: "purple",
    timeEstimate: "45 min"
  },
  {
    id: 4,
    title: "Dimensionality Reduction",
    description: "Reduce complexity while preserving biological signal",
    tools: ["PCA", "UMAP", "t-SNE"],
    details: "Perform PCA for linear reduction, select optimal dimensions, generate UMAP/t-SNE embeddings for visualization.",
    icon: ChartBarIcon,
    color: "orange",
    timeEstimate: "30 min"
  },
  {
    id: 5,
    title: "Clustering Analysis",
    description: "Group cells based on expression similarity",
    tools: ["Leiden algorithm", "Louvain", "Seurat"],
    details: "Apply graph-based clustering, optimize resolution parameters, visualize clusters on UMAP, and assess cluster stability.",
    icon: CellsIcon,
    color: "red",
    timeEstimate: "1 hour"
  },
  {
    id: 6,
    title: "Cell Type Annotation",
    description: "Assign biological identities to discovered clusters",
    tools: ["SingleR", "Manual annotation", "Marker genes"],
    details: "Find cluster-specific marker genes, use reference datasets for automated annotation, and validate cell type assignments.",
    icon: TerminalIcon,
    color: "indigo",
    timeEstimate: "2 hours"
  },
  {
    id: 7,
    title: "Advanced Analysis",
    description: "Integrate datasets and perform trajectory analysis",
    tools: ["Seurat integration", "Monocle3", "Velocity"],
    details: "Remove batch effects across datasets, infer developmental trajectories, perform RNA velocity analysis, and explore cellular dynamics.",
    icon: PipelineIcon,
    color: "pink",
    timeEstimate: "3 hours"
  }
];

const PipelineCard: React.FC<{ step: PipelineStep; isActive: boolean; onClick: () => void; index: number }> = ({
  step,
  isActive,
  onClick,
  index
}) => {
  const colorClasses = {
    blue: 'border-blue-500 bg-blue-50 text-blue-700',
    green: 'border-green-500 bg-green-50 text-green-700',
    purple: 'border-purple-500 bg-purple-50 text-purple-700',
    orange: 'border-orange-500 bg-orange-50 text-orange-700',
    red: 'border-red-500 bg-red-50 text-red-700',
    indigo: 'border-indigo-500 bg-indigo-50 text-indigo-700',
    pink: 'border-pink-500 bg-pink-50 text-pink-700'
  };

  const activeColorClasses = {
    blue: 'border-blue-600 bg-blue-100 shadow-blue-200',
    green: 'border-green-600 bg-green-100 shadow-green-200',
    purple: 'border-purple-600 bg-purple-100 shadow-purple-200',
    orange: 'border-orange-600 bg-orange-100 shadow-orange-200',
    red: 'border-red-600 bg-red-100 shadow-red-200',
    indigo: 'border-indigo-600 bg-indigo-100 shadow-indigo-200',
    pink: 'border-pink-600 bg-pink-100 shadow-pink-200'
  };

  return (
    <div className="relative">
      <div
        onClick={onClick}
        className={`cursor-pointer transition-all duration-300 rounded-xl border-2 p-4 ${
          isActive
            ? `${activeColorClasses[step.color as keyof typeof activeColorClasses]} shadow-lg scale-105`
            : `${colorClasses[step.color as keyof typeof colorClasses]} hover:shadow-md hover:scale-102`
        }`}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg ${isActive ? 'bg-white' : 'bg-white/70'}`}>
            <step.icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-brand-dark">{step.title}</h3>
            <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded-full">
              {step.timeEstimate}
            </span>
          </div>
        </div>
        <p className="text-sm text-brand-secondary leading-relaxed">{step.description}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {step.tools.slice(0, 2).map((tool, idx) => (
            <span key={idx} className="text-xs bg-white/80 px-2 py-1 rounded-full font-mono">
              {tool}
            </span>
          ))}
          {step.tools.length > 2 && (
            <span className="text-xs bg-white/80 px-2 py-1 rounded-full">+{step.tools.length - 2} more</span>
          )}
        </div>
      </div>
      
      {/* Connection arrow */}
      {index < (step.id === bulkPipelineSteps.length ? bulkPipelineSteps.length : singleCellPipelineSteps.length) - 1 && (
        <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
          <div className="bg-white rounded-full p-1 border-2 border-gray-300">
            <ArrowRightIcon className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      )}
    </div>
  );
};

const PipelineDetails: React.FC<{ step: PipelineStep }> = ({ step }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
    <div className="flex items-center gap-4 mb-4">
      <div className={`p-3 rounded-lg ${step.color === 'blue' ? 'bg-blue-100' : step.color === 'green' ? 'bg-green-100' : step.color === 'purple' ? 'bg-purple-100' : step.color === 'orange' ? 'bg-orange-100' : step.color === 'red' ? 'bg-red-100' : step.color === 'indigo' ? 'bg-indigo-100' : 'bg-pink-100'}`}>
        <step.icon className="w-8 h-8" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-brand-dark">{step.title}</h3>
        <p className="text-brand-accent font-semibold">Step {step.id} • {step.timeEstimate}</p>
      </div>
    </div>
    
    <p className="text-brand-secondary mb-4 leading-relaxed">{step.details}</p>
    
    <div className="mb-4">
      <h4 className="font-semibold text-brand-dark mb-2">Tools & Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {step.tools.map((tool, idx) => (
          <span key={idx} className="bg-brand-light text-brand-dark px-3 py-1 rounded-full text-sm font-mono border">
            {tool}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const PipelinePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bulk' | 'single-cell'>('bulk');
  const [selectedStep, setSelectedStep] = useState<PipelineStep | null>(bulkPipelineSteps[0]);

  const currentSteps = activeTab === 'bulk' ? bulkPipelineSteps : singleCellPipelineSteps;

  const handleTabChange = (tab: 'bulk' | 'single-cell') => {
    setActiveTab(tab);
    setSelectedStep(tab === 'bulk' ? bulkPipelineSteps[0] : singleCellPipelineSteps[0]);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-brand-light/30 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Master RNA-Seq Analysis Pipelines
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Learn step-by-step workflows for both bulk and single-cell RNA sequencing. 
            From raw data to biological insights in publication-ready analyses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/sK7qXPHmSDwoq1738"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Learning Pipelines
            </a>
            <a
              href="#pipelines"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-brand-primary transition-all"
            >
              Explore Workflows
            </a>
          </div>
        </div>
      </section>

      {/* Pipeline Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Why Master These Pipelines?</h2>
            <p className="text-lg text-brand-secondary max-w-3xl mx-auto">
              These aren't just theoretical workflows - they're battle-tested pipelines used in real research labs worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Reproducible Results</h3>
              <p className="text-brand-secondary">
                Learn standardized workflows that ensure your analyses are reproducible and publication-ready.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <PipelineIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Industry Standards</h3>
              <p className="text-brand-secondary">
                Master the same tools and workflows used by leading pharmaceutical companies and research institutions.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CellsIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Cutting-Edge Methods</h3>
              <p className="text-brand-secondary">
                Stay ahead with the latest single-cell technologies and analysis approaches used in top-tier research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pipeline Explorer */}
      <section id="pipelines" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Interactive Pipeline Explorer</h2>
            <p className="text-lg text-brand-secondary max-w-3xl mx-auto mb-8">
              Click through each step to understand the complete workflow. See the tools, time estimates, and detailed explanations.
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
                  Bulk RNA-seq Pipeline
                </button>
                <button
                  onClick={() => handleTabChange('single-cell')}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'single-cell'
                      ? 'bg-brand-accent text-white shadow-lg'
                      : 'text-brand-secondary hover:text-brand-dark'
                  }`}
                >
                  Single-Cell Pipeline
                </button>
              </div>
            </div>
          </div>

          {/* Pipeline Steps */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentSteps.map((step, index) => (
                <PipelineCard
                  key={step.id}
                  step={step}
                  isActive={selectedStep?.id === step.id}
                  onClick={() => setSelectedStep(step)}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Selected Step Details */}
          {selectedStep && <PipelineDetails step={selectedStep} />}
        </div>
      </section>

      {/* Time Investment */}
      <section className="py-16 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Master Both Pipelines in Our Course</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Bulk RNA-seq</h3>
              <p className="text-4xl font-bold text-brand-dark mb-2">~6 hours</p>
              <p className="text-brand-secondary">Complete pipeline from raw reads to pathway analysis</p>
              <div className="mt-4 text-left">
                <p className="text-sm text-brand-secondary">✓ 6 comprehensive modules</p>
                <p className="text-sm text-brand-secondary">✓ Hands-on exercises with real data</p>
                <p className="text-sm text-brand-secondary">✓ Publication-ready visualizations</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">Single-Cell RNA-seq</h3>
              <p className="text-4xl font-bold text-brand-dark mb-2">~8 hours</p>
              <p className="text-brand-secondary">From raw 10X data to advanced trajectory analysis</p>
              <div className="mt-4 text-left">
                <p className="text-sm text-brand-secondary">✓ 7 detailed modules</p>
                <p className="text-sm text-brand-secondary">✓ Seurat workflow mastery</p>
                <p className="text-sm text-brand-secondary">✓ Cell type annotation techniques</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-brand-accent">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Ready to Master RNA-seq Pipelines?</h3>
            <p className="text-lg text-brand-secondary mb-6">
              Join hundreds of researchers who have transformed their data analysis skills with our comprehensive, 
              hands-on approach to transcriptomics.
            </p>
            <a
              href="https://forms.gle/sK7qXPHmSDwoq1738"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-brand-accent to-brand-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform group"
            >
              <span>Enroll in Complete Course</span>
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

export default PipelinePage;