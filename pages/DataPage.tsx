
import React, { useState } from 'react';
import { ArrowRightIcon, DatabaseIcon, DownloadIcon, ExternalLinkIcon, InfoIcon, TagIcon } from '../components/IconComponents';

interface Dataset {
  id: string;
  name: string;
  description: string;
  type: 'bulk' | 'single-cell' | 'spatial';
  organism: string;
  tissue: string;
  samples: number;
  size: string;
  format: string[];
  modules: number[];
  source: string;
  accession?: string;
  doi?: string;
  citation: string;
  downloadUrl?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  icon: React.ElementType;
}

const datasets: Dataset[] = [
  {
    id: 'gtex-brain',
    name: 'GTEx Human Brain Bulk RNA-seq',
    description: 'Comprehensive bulk RNA-seq data from 13 brain regions across 245 individuals from the GTEx consortium. Perfect for learning differential expression analysis and tissue comparison.',
    type: 'bulk',
    organism: 'Human',
    tissue: 'Brain (13 regions)',
    samples: 245,
    size: '2.3 GB',
    format: ['FASTQ', 'Counts Matrix', 'Metadata'],
    modules: [5, 7, 8, 9],
    source: 'GTEx Consortium',
    accession: 'phs000424.v8',
    doi: '10.1126/science.aaz1776',
    citation: 'GTEx Consortium (2020). The GTEx Consortium atlas of genetic regulatory effects across human tissues. Science, 369(6509).',
    downloadUrl: 'https://gtexportal.org/home/datasets',
    difficulty: 'beginner',
    tags: ['tissue-specific', 'healthy', 'reference', 'large-scale'],
    icon: DatabaseIcon
  },
  {
    id: 'covid-bulk',
    name: 'COVID-19 Patient Bulk RNA-seq',
    description: 'Blood RNA-seq from severe COVID-19 patients vs healthy controls. Ideal for learning disease comparison analysis and pathway enrichment.',
    type: 'bulk',
    organism: 'Human',
    tissue: 'Whole blood',
    samples: 48,
    size: '1.8 GB',
    format: ['FASTQ', 'Counts Matrix', 'Clinical Data'],
    modules: [6, 8, 9, 15],
    source: 'Public Repository',
    accession: 'GSE152418',
    doi: '10.1038/s41467-020-18849-z',
    citation: 'Overmyer, K.A. et al. (2021). Large-scale multi-omic analysis of COVID-19 severity. Cell Systems, 12(1), 23-40.',
    downloadUrl: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE152418',
    difficulty: 'intermediate',
    tags: ['disease', 'clinical', 'case-control', 'biomarkers'],
    icon: DatabaseIcon
  },
  {
    id: 'pbmc-3k',
    name: '10x PBMC 3k Single-Cell Dataset',
    description: 'Classic single-cell dataset with 2,700 peripheral blood mononuclear cells. The gold standard for learning scRNA-seq analysis fundamentals.',
    type: 'single-cell',
    organism: 'Human',
    tissue: 'Peripheral blood',
    samples: 2700,
    size: '350 MB',
    format: ['H5', 'Matrix Market', 'Seurat Object'],
    modules: [10, 11, 12, 13],
    source: '10x Genomics',
    citation: '10x Genomics (2016). Single Cell Gene Expression Dataset by Cell Ranger 1.1.0.',
    downloadUrl: 'https://cf.10xgenomics.com/samples/cell/pbmc3k/pbmc3k_filtered_gene_bc_matrices.tar.gz',
    difficulty: 'beginner',
    tags: ['tutorial', 'immune-cells', 'well-characterized', 'benchmark'],
    icon: DatabaseIcon
  },
  {
    id: 'hca-lung',
    name: 'Human Cell Atlas Lung Dataset',
    description: 'Comprehensive single-cell atlas of human lung with 65,000 cells covering multiple cell types. Excellent for advanced clustering and annotation.',
    type: 'single-cell',
    organism: 'Human',
    tissue: 'Lung',
    samples: 65000,
    size: '4.2 GB',
    format: ['H5AD', 'Loom', 'Metadata'],
    modules: [12, 13, 14, 15],
    source: 'Human Cell Atlas',
    accession: 'HCA19-15',
    doi: '10.1038/s41586-020-2922-4',
    citation: 'Travaglini, K.J. et al. (2020). A molecular cell atlas of the human lung from single-cell RNA sequencing. Nature, 587(7835), 619-625.',
    downloadUrl: 'https://data.humancellatlas.org/',
    difficulty: 'advanced',
    tags: ['atlas', 'multi-celltype', 'reference', 'comprehensive'],
    icon: DatabaseIcon
  },
  {
    id: 'tabula-muris',
    name: 'Tabula Muris Multi-Organ Atlas',
    description: 'Single-cell atlas of 20 mouse organs with 100,000+ cells. Perfect for cross-tissue analysis and method development.',
    type: 'single-cell',
    organism: 'Mouse',
    tissue: 'Multi-organ (20 tissues)',
    samples: 100000,
    size: '8.5 GB',
    format: ['H5AD', 'Seurat Objects', 'CSV'],
    modules: [13, 14, 15],
    source: 'CZ Biohub',
    doi: '10.1038/s41586-018-0590-4',
    citation: 'Tabula Muris Consortium (2018). Single-cell transcriptomics of 20 mouse organs creates a Tabula Muris. Nature, 562(7727), 367-372.',
    downloadUrl: 'https://tabula-muris.ds.czbiohub.org/',
    difficulty: 'advanced',
    tags: ['multi-organ', 'mouse', 'atlas', 'comparative'],
    icon: DatabaseIcon
  },
  {
    id: 'covid-scrna',
    name: 'COVID-19 Single-Cell Immune Profiling',
    description: 'Single-cell analysis of immune responses in severe COVID-19 patients. Demonstrates clinical applications of scRNA-seq.',
    type: 'single-cell',
    organism: 'Human',
    tissue: 'Peripheral blood',
    samples: 44000,
    size: '3.1 GB',
    format: ['H5AD', 'Counts Matrix', 'Clinical Metadata'],
    modules: [13, 14, 15],
    source: 'Public Repository',
    accession: 'GSE150728',
    doi: '10.1038/s41591-020-0944-y',
    citation: 'Wilk, A.J. et al. (2020). A single-cell atlas of the peripheral immune response in patients with severe COVID-19. Nature Medicine, 26(7), 1070-1076.',
    downloadUrl: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE150728',
    difficulty: 'intermediate',
    tags: ['disease', 'immune', 'clinical', 'biomarkers'],
    icon: DatabaseIcon
  },
  {
    id: 'visium-brain',
    name: 'Visium Mouse Brain Spatial Dataset',
    description: 'Spatial transcriptomics of mouse brain sections using 10x Visium technology. Learn spatial analysis techniques.',
    type: 'spatial',
    organism: 'Mouse',
    tissue: 'Brain (sagittal)',
    samples: 2800,
    size: '1.2 GB',
    format: ['H5', 'Spatial Images', 'Coordinates'],
    modules: [14],
    source: '10x Genomics',
    citation: '10x Genomics (2020). Visium Spatial Gene Expression Dataset by Space Ranger 1.1.0.',
    downloadUrl: 'https://cf.10xgenomics.com/samples/spatial-exp/1.1.0/V1_Adult_Mouse_Brain/',
    difficulty: 'advanced',
    tags: ['spatial', 'brain', 'tissue-architecture', 'novel-method'],
    icon: DatabaseIcon
  },
  {
    id: 'trajectory-hematopoiesis',
    name: 'Hematopoietic Differentiation Dataset',
    description: 'Single-cell trajectory analysis of blood cell development. Perfect for learning pseudotime analysis and trajectory inference.',
    type: 'single-cell',
    organism: 'Human',
    tissue: 'Bone marrow',
    samples: 15000,
    size: '950 MB',
    format: ['H5AD', 'Trajectory Metadata'],
    modules: [14],
    source: 'Public Repository',
    accession: 'GSE76244',
    doi: '10.1126/science.aah4573',
    citation: 'Nestorowa, S. et al. (2016). A single-cell resolution map of mouse hematopoietic stem and progenitor cell differentiation. Blood, 128(8), e20-31.',
    downloadUrl: 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE76244',
    difficulty: 'advanced',
    tags: ['trajectory', 'development', 'stem-cells', 'differentiation'],
    icon: DatabaseIcon
  }
];

const DatasetCard: React.FC<{ dataset: Dataset; isActive: boolean; onClick: () => void }> = ({ dataset, isActive, onClick }) => {
  const typeColors = {
    bulk: 'bg-blue-100 text-blue-700 border-blue-300',
    'single-cell': 'bg-purple-100 text-purple-700 border-purple-300',
    spatial: 'bg-green-100 text-green-700 border-green-300'
  };

  const difficultyColors = {
    beginner: 'bg-green-50 text-green-600',
    intermediate: 'bg-yellow-50 text-yellow-600',
    advanced: 'bg-red-50 text-red-600'
  };

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer transition-all duration-300 rounded-xl border-2 p-6 hover:shadow-lg hover:scale-102 ${
        isActive
          ? 'border-brand-accent shadow-lg scale-105'
          : 'border-gray-200 bg-white hover:border-brand-accent/50'
      }`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-lg ${isActive ? 'bg-brand-accent text-white' : 'bg-gray-100'}`}>
          <dataset.icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${typeColors[dataset.type]}`}>
              {dataset.type === 'single-cell' ? 'Single-Cell' : dataset.type === 'spatial' ? 'Spatial' : 'Bulk RNA-seq'}
            </span>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${difficultyColors[dataset.difficulty]}`}>
              {dataset.difficulty}
            </span>
          </div>
          <h3 className="text-lg font-bold text-brand-dark mb-2">{dataset.name}</h3>
          <p className="text-sm text-brand-secondary leading-relaxed mb-3">{dataset.description}</p>
          <div className="flex items-center gap-4 text-xs text-brand-secondary">
            <span>{dataset.samples.toLocaleString()} samples</span>
            <span>•</span>
            <span>{dataset.size}</span>
            <span>•</span>
            <span>{dataset.organism}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DatasetDetails: React.FC<{ dataset: Dataset }> = ({ dataset }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-4 rounded-xl bg-brand-accent text-white">
        <dataset.icon className="w-8 h-8" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className={`px-3 py-1 text-sm font-semibold rounded-full border ${
            dataset.type === 'bulk' ? 'bg-blue-100 text-blue-700 border-blue-300' :
            dataset.type === 'single-cell' ? 'bg-purple-100 text-purple-700 border-purple-300' :
            'bg-green-100 text-green-700 border-green-300'
          }`}>
            {dataset.type === 'single-cell' ? 'Single-Cell RNA-seq' : dataset.type === 'spatial' ? 'Spatial Transcriptomics' : 'Bulk RNA-seq'}
          </span>
          <span className={`px-3 py-1 text-sm font-medium rounded-full ${
            dataset.difficulty === 'beginner' ? 'bg-green-50 text-green-600' :
            dataset.difficulty === 'intermediate' ? 'bg-yellow-50 text-yellow-600' :
            'bg-red-50 text-red-600'
          }`}>
            {dataset.difficulty} level
          </span>
        </div>
        <h2 className="text-2xl font-bold text-brand-dark mb-2">{dataset.name}</h2>
        <p className="text-brand-secondary">{dataset.description}</p>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div>
        <h3 className="text-lg font-bold text-brand-dark mb-4">Dataset Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-brand-secondary min-w-[100px]">Organism:</span>
            <span className="text-brand-dark">{dataset.organism}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-brand-secondary min-w-[100px]">Tissue:</span>
            <span className="text-brand-dark">{dataset.tissue}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-brand-secondary min-w-[100px]">Samples:</span>
            <span className="text-brand-dark">{dataset.samples.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-brand-secondary min-w-[100px]">Size:</span>
            <span className="text-brand-dark">{dataset.size}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-brand-secondary min-w-[100px]">Source:</span>
            <span className="text-brand-dark">{dataset.source}</span>
          </div>
          {dataset.accession && (
            <div className="flex items-center gap-3">
              <span className="font-semibold text-brand-secondary min-w-[100px]">Accession:</span>
              <span className="text-brand-dark font-mono text-sm">{dataset.accession}</span>
            </div>
          )}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-brand-dark mb-4">Course Integration</h3>
        <div className="mb-4">
          <span className="font-semibold text-brand-secondary">Used in Modules:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {dataset.modules.map((module) => (
              <span key={module} className="bg-brand-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                Module {module}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-brand-secondary">File Formats:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {dataset.format.map((format) => (
              <span key={format} className="bg-gray-100 text-brand-dark px-3 py-1 rounded-full text-sm font-mono">
                {format}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="font-semibold text-brand-secondary">Tags:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {dataset.tags.map((tag) => (
              <span key={tag} className="bg-brand-light text-brand-dark px-2 py-1 rounded-full text-xs border">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="p-6 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-xl mb-6">
      <h3 className="text-lg font-bold text-brand-dark mb-3">Citation</h3>
      <p className="text-brand-secondary text-sm leading-relaxed italic">{dataset.citation}</p>
      {dataset.doi && (
        <div className="mt-2">
          <a
            href={`https://doi.org/${dataset.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-accent hover:underline text-sm font-semibold"
          >
            DOI: {dataset.doi}
          </a>
        </div>
      )}
    </div>

    <div className="flex flex-col sm:flex-row gap-4">
      {dataset.downloadUrl ? (
        <a
          href={dataset.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all"
        >
          <DownloadIcon className="mr-2 w-5 h-5" />
          <span>Download Dataset</span>
          <ExternalLinkIcon className="ml-2 w-4 h-4" />
        </a>
      ) : (
        <div className="inline-flex items-center bg-gray-300 text-gray-600 font-semibold py-3 px-6 rounded-lg cursor-not-allowed">
          <InfoIcon className="mr-2 w-5 h-5" />
          <span>Available in Course</span>
        </div>
      )}
      <a
        href="https://forms.gle/sK7qXPHmSDwoq1738"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center border-2 border-brand-primary text-brand-primary font-semibold py-3 px-6 rounded-lg hover:bg-brand-primary hover:text-white transition-all"
      >
        <span>Access Full Course</span>
        <ArrowRightIcon className="ml-2 w-4 h-4" />
      </a>
    </div>
  </div>
);

const DataPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(datasets[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDatasets = datasets.filter(dataset => {
    const matchesType = selectedType === 'all' || dataset.type === selectedType;
    const matchesSearch = dataset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dataset.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dataset.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesType && matchesSearch;
  });

  const types = [
    { key: 'all', label: 'All Datasets', count: datasets.length },
    { key: 'bulk', label: 'Bulk RNA-seq', count: datasets.filter(d => d.type === 'bulk').length },
    { key: 'single-cell', label: 'Single-Cell', count: datasets.filter(d => d.type === 'single-cell').length },
    { key: 'spatial', label: 'Spatial', count: datasets.filter(d => d.type === 'spatial').length }
  ];

  const totalSamples = datasets.reduce((sum, d) => sum + d.samples, 0);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-brand-light/30 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Course Datasets
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Access carefully curated datasets from published studies. Practice with real data 
            used in cutting-edge transcriptomics research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/sK7qXPHmSDwoq1738"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Dataset Access
            </a>
            <a
              href="#datasets"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-brand-primary transition-all"
            >
              Browse Datasets
            </a>
          </div>
        </div>
      </section>

      {/* Dataset Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Real Research Data</h2>
            <p className="text-lg text-brand-secondary max-w-3xl mx-auto">
              All datasets come from peer-reviewed publications and public repositories, giving you authentic research experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <DatabaseIcon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-600 mb-2">{datasets.length}</div>
              <p className="text-brand-secondary">Curated Datasets</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">{totalSamples.toLocaleString()}</div>
              <p className="text-brand-secondary">Total Samples</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <p className="text-brand-secondary">Analysis Types</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
              <p className="text-brand-secondary">Course modules supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dataset Explorer */}
      <section id="datasets" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Dataset Library</h2>
            <p className="text-lg text-brand-secondary max-w-3xl mx-auto mb-8">
              Explore datasets organized by analysis type and complexity level
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto mb-6">
              <input
                type="text"
                placeholder="Search datasets by name, organism, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-accent focus:outline-none text-lg"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {types.map(({ key, label, count }) => (
                <button
                  key={key}
                  onClick={() => setSelectedType(key)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedType === key
                      ? 'bg-brand-accent text-white shadow-lg'
                      : 'bg-white text-brand-secondary hover:text-brand-dark border-2 border-gray-200 hover:border-brand-accent'
                  }`}
                >
                  {label} ({count})
                </button>
              ))}
            </div>
          </div>

          {/* Dataset Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {filteredDatasets.length === 0 ? (
              <div className="col-span-2 text-center py-12">
                <p className="text-xl text-brand-secondary">No datasets found matching your criteria.</p>
                <p className="text-brand-secondary mt-2">Try different keywords or type filters.</p>
              </div>
            ) : (
              filteredDatasets.map((dataset) => (
                <DatasetCard
                  key={dataset.id}
                  dataset={dataset}
                  isActive={selectedDataset?.id === dataset.id}
                  onClick={() => setSelectedDataset(dataset)}
                />
              ))
            )}
          </div>

          {/* Selected Dataset Details */}
          {selectedDataset && <DatasetDetails dataset={selectedDataset} />}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Ready to Analyze Real Data?</h2>
          <p className="text-lg text-brand-secondary mb-8 max-w-3xl mx-auto">
            Don't just download datasets—learn to analyze them professionally! Our course provides 
            step-by-step guidance for every dataset.
          </p>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-brand-accent">
            <h3 className="text-xl font-bold text-brand-dark mb-4">What You Get With Course Access</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="text-left">
                <h4 className="font-semibold text-brand-dark mb-2">Pre-processed Data:</h4>
                <ul className="text-sm text-brand-secondary space-y-1">
                  <li>• Ready-to-use count matrices</li>
                  <li>• Quality-controlled datasets</li>
                  <li>• Comprehensive metadata files</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-brand-dark mb-2">Analysis Guidance:</h4>
                <ul className="text-sm text-brand-secondary space-y-1">
                  <li>• Step-by-step analysis protocols</li>
                  <li>• Expected results and interpretations</li>
                  <li>• Troubleshooting common issues</li>
                </ul>
              </div>
            </div>
            
            <a
              href="https://forms.gle/sK7qXPHmSDwoq1738"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-brand-accent to-brand-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform group"
            >
              <span>Get Full Dataset Access</span>
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataPage;