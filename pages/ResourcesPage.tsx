
import React, { useState } from 'react';
import { ArrowRightIcon, DatabaseIcon, CodeIcon, BookOpenIcon, TerminalIcon, ChartBarIcon } from '../components/IconComponents';

interface Resource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: 'data' | 'tools' | 'tutorials' | 'references';
  subcategory: 'bulk' | 'single-cell' | 'both';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  type: 'database' | 'software' | 'tutorial' | 'paper' | 'documentation';
  tags: string[];
  icon: React.ElementType;
}

const A = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a href={href} className="text-brand-accent hover:underline font-sans font-semibold" target="_blank" rel="noopener noreferrer">{children}</a>
);

const resources: Resource[] = [
  // Data Sources - Bulk RNA-seq
  {
    id: 'geo',
    name: 'Gene Expression Omnibus (GEO)',
    description: 'NIH repository for functional genomics data with over 100,000 bulk RNA-seq studies',
    url: 'https://www.ncbi.nlm.nih.gov/geo/',
    category: 'data',
    subcategory: 'both',
    difficulty: 'beginner',
    type: 'database',
    tags: ['public', 'large-scale', 'metadata'],
    icon: DatabaseIcon
  },
  {
    id: 'gtex',
    name: 'Genotype-Tissue Expression (GTEx)',
    description: 'Comprehensive atlas of gene expression across 54 human tissues from 838 individuals',
    url: 'https://gtexportal.org/home/',
    category: 'data',
    subcategory: 'bulk',
    difficulty: 'beginner',
    type: 'database',
    tags: ['human', 'tissue-specific', 'eQTL'],
    icon: DatabaseIcon
  },
  {
    id: 'tcga',
    name: 'The Cancer Genome Atlas (TCGA)',
    description: 'Multi-omics data from 33 cancer types including RNA-seq from tumor and normal samples',
    url: 'https://portal.gdc.cancer.gov/',
    category: 'data',
    subcategory: 'bulk',
    difficulty: 'intermediate',
    type: 'database',
    tags: ['cancer', 'clinical', 'multi-omics'],
    icon: DatabaseIcon
  },
  {
    id: 'recount3',
    name: 'recount3',
    description: 'Over 750,000 human and mouse RNA-seq samples uniformly processed and ready for analysis',
    url: 'https://jhubiostatistics.shinyapps.io/recount3/',
    category: 'data',
    subcategory: 'bulk',
    difficulty: 'beginner',
    type: 'database',
    tags: ['processed', 'normalized', 'R-package'],
    icon: DatabaseIcon
  },

  // Data Sources - Single-cell RNA-seq
  {
    id: 'hca',
    name: 'Human Cell Atlas',
    description: 'Comprehensive reference of human cell types with high-quality annotated single-cell datasets',
    url: 'https://data.humancellatlas.org/',
    category: 'data',
    subcategory: 'single-cell',
    difficulty: 'beginner',
    type: 'database',
    tags: ['human', 'cell-atlas', 'well-annotated'],
    icon: DatabaseIcon
  },
  {
    id: 'tabula-muris',
    name: 'Tabula Muris',
    description: 'Single-cell atlas of mouse organs with 100,000+ cells from 20 tissues',
    url: 'https://tabula-muris.ds.czbiohub.org/',
    category: 'data',
    subcategory: 'single-cell',
    difficulty: 'beginner',
    type: 'database',
    tags: ['mouse', 'multi-tissue', 'reference'],
    icon: DatabaseIcon
  },
  {
    id: 'tabula-sapiens',
    name: 'Tabula Sapiens',
    description: 'Human single-cell transcriptomic atlas with 500,000+ cells across 24 tissues',
    url: 'https://tabula-sapiens-portal.ds.czbiohub.org/',
    category: 'data',
    subcategory: 'single-cell',
    difficulty: 'beginner',
    type: 'database',
    tags: ['human', 'multi-tissue', 'comprehensive'],
    icon: DatabaseIcon
  },

  // Analysis Tools - Bulk RNA-seq
  {
    id: 'deseq2',
    name: 'DESeq2',
    description: 'Gold standard for differential gene expression analysis in bulk RNA-seq data',
    url: 'https://bioconductor.org/packages/DESeq2/',
    category: 'tools',
    subcategory: 'bulk',
    difficulty: 'beginner',
    type: 'software',
    tags: ['R', 'bioconductor', 'differential-expression'],
    icon: CodeIcon
  },
  {
    id: 'star',
    name: 'STAR Aligner',
    description: 'Ultrafast universal RNA-seq aligner with splice-aware mapping capabilities',
    url: 'https://github.com/alexdobin/STAR',
    category: 'tools',
    subcategory: 'both',
    difficulty: 'intermediate',
    type: 'software',
    tags: ['alignment', 'command-line', 'splice-aware'],
    icon: TerminalIcon
  },
  {
    id: 'salmon',
    name: 'Salmon',
    description: 'Fast and bias-aware transcript quantification without alignment',
    url: 'https://salmon.readthedocs.io/',
    category: 'tools',
    subcategory: 'bulk',
    difficulty: 'intermediate',
    type: 'software',
    tags: ['quantification', 'pseudo-alignment', 'fast'],
    icon: ChartBarIcon
  },

  // Analysis Tools - Single-cell RNA-seq
  {
    id: 'seurat',
    name: 'Seurat',
    description: 'Comprehensive toolkit for single-cell genomics analysis and visualization',
    url: 'https://satijalab.org/seurat/',
    category: 'tools',
    subcategory: 'single-cell',
    difficulty: 'beginner',
    type: 'software',
    tags: ['R', 'clustering', 'integration', 'visualization'],
    icon: CodeIcon
  },
  {
    id: 'scanpy',
    name: 'Scanpy',
    description: 'Scalable toolkit for analyzing single-cell gene expression data',
    url: 'https://scanpy.readthedocs.io/',
    category: 'tools',
    subcategory: 'single-cell',
    difficulty: 'intermediate',
    type: 'software',
    tags: ['python', 'scalable', 'trajectory-inference'],
    icon: CodeIcon
  },
  {
    id: 'cellranger',
    name: '10x Cell Ranger',
    description: 'Pipeline for processing Chromium single-cell RNA-seq data',
    url: 'https://support.10xgenomics.com/single-cell-gene-expression/software/',
    category: 'tools',
    subcategory: 'single-cell',
    difficulty: 'beginner',
    type: 'software',
    tags: ['10x-genomics', 'preprocessing', 'commercial'],
    icon: TerminalIcon
  },

  // Tutorials and Learning Resources
  {
    id: 'bioconductor-workflows',
    name: 'Bioconductor Workflows',
    description: 'Step-by-step tutorials for RNA-seq analysis using R/Bioconductor packages',
    url: 'https://www.bioconductor.org/help/workflows/',
    category: 'tutorials',
    subcategory: 'both',
    difficulty: 'beginner',
    type: 'tutorial',
    tags: ['R', 'step-by-step', 'comprehensive'],
    icon: BookOpenIcon
  },
  {
    id: 'sctutorial',
    name: 'Single-cell Best Practices',
    description: 'Comprehensive tutorial on current best practices in single-cell RNA-seq analysis',
    url: 'https://github.com/theislab/single-cell-tutorial',
    category: 'tutorials',
    subcategory: 'single-cell',
    difficulty: 'intermediate',
    type: 'tutorial',
    tags: ['python', 'scanpy', 'best-practices'],
    icon: BookOpenIcon
  },
  {
    id: 'orchestrating-scrna',
    name: 'Orchestrating Single-Cell Analysis',
    description: 'Online book covering single-cell RNA-seq analysis with R/Bioconductor',
    url: 'http://bioconductor.org/books/release/OSCA/',
    category: 'tutorials',
    subcategory: 'single-cell',
    difficulty: 'beginner',
    type: 'documentation',
    tags: ['R', 'bioconductor', 'comprehensive', 'book'],
    icon: BookOpenIcon
  }
];

const ResourceCard: React.FC<{ resource: Resource; isActive: boolean; onClick: () => void }> = ({ resource, isActive, onClick }) => {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-700 border-green-300',
    intermediate: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    advanced: 'bg-red-100 text-red-700 border-red-300'
  };

  const categoryColors = {
    data: 'border-blue-200 bg-blue-50',
    tools: 'border-purple-200 bg-purple-50',
    tutorials: 'border-green-200 bg-green-50',
    references: 'border-orange-200 bg-orange-50'
  };

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer transition-all duration-300 rounded-xl border-2 p-6 hover:shadow-lg hover:scale-102 ${
        isActive
          ? 'border-brand-accent shadow-lg scale-105'
          : `${categoryColors[resource.category]} hover:border-brand-accent/50`
      }`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-lg ${isActive ? 'bg-brand-accent text-white' : 'bg-white/70'}`}>
          <resource.icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${difficultyColors[resource.difficulty]}`}>
              {resource.difficulty}
            </span>
            <span className="text-xs bg-white/80 px-2 py-1 rounded-full font-mono">
              {resource.subcategory}
            </span>
          </div>
          <h3 className="text-lg font-bold text-brand-dark mb-2">{resource.name}</h3>
          <p className="text-sm text-brand-secondary leading-relaxed">{resource.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1 mt-4">
        {resource.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="bg-white/60 text-brand-secondary px-2 py-1 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const ResourceDetails: React.FC<{ resource: Resource }> = ({ resource }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-4 rounded-xl bg-brand-accent text-white">
        <resource.icon className="w-8 h-8" />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-brand-dark mb-2">{resource.name}</h2>
        <p className="text-brand-secondary">{resource.description}</p>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div>
        <h3 className="text-lg font-bold text-brand-dark mb-4">Resource Details</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-brand-secondary min-w-[100px]">Category:</span>
            <span className="text-brand-dark capitalize">{resource.category}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-brand-secondary min-w-[100px]">Type:</span>
            <span className="text-brand-dark capitalize">{resource.type}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-brand-secondary min-w-[100px]">Scope:</span>
            <span className="text-brand-dark capitalize">{resource.subcategory} RNA-seq</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-brand-secondary min-w-[100px]">Difficulty:</span>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              resource.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
              resource.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {resource.difficulty}
            </span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-brand-dark mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {resource.tags.map((tag) => (
            <span key={tag} className="bg-brand-light text-brand-dark px-3 py-2 rounded-full text-sm border">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-6">
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all"
      >
        <span>Access Resource</span>
        <ArrowRightIcon className="ml-2 w-4 h-4" />
      </a>
    </div>
  </div>
);

const SectionHeader = ({ title, subtext }: { title: string; subtext?: string }) => (
    <div className="mt-16 mb-8">
        <h2 className="text-3xl font-bold text-brand-primary border-l-4 border-brand-accent pl-4">{title}</h2>
        {subtext && <p className="mt-2 text-lg text-brand-secondary pl-5">{subtext}</p>}
    </div>
);

const SubSectionHeader = ({ title }: { title: string }) => (
    <h3 className="text-2xl font-semibold text-brand-dark mt-8 mb-4">{title}</h3>
);

const ResourceTable = ({ headers, data }: { headers: string[], data: (string | JSX.Element)[][] }) => (
    <div className="overflow-x-auto shadow-md sm:rounded-lg border border-gray-200">
        <table className="min-w-full text-sm text-left text-brand-secondary">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 font-sans">
                <tr>
                    {headers.map(header => (
                        <th key={header} scope="col" className="px-6 py-3 font-bold">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="bg-white border-b hover:bg-brand-light/50 font-serif">
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className={`px-6 py-4 align-top ${cellIndex === 0 ? 'font-semibold text-brand-dark' : ''}`}>
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const PaperEntry = ({ codeLink, codeLang, citation }: { codeLink?: string, codeLang?: string, citation: string | JSX.Element }) => (
    <div className="bg-brand-light p-4 rounded-lg border border-gray-200 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="text-brand-secondary mb-2 sm:mb-0 sm:mr-4">{citation}</div>
        {(codeLink || codeLang) && (
            <A href={codeLink || '#'} >
                <span className="text-sm flex-shrink-0">
                    [code {codeLang && `| ${codeLang}`}] &rarr;
                </span>
            </A>
        )}
    </div>
);

// Data Definitions
const bulkRnaSeqDataSources = {
    headers: ["Source Name", "Description", "Access Link", "Notes"],
    rows: [
        [<strong>GEO</strong>, 'NIH repository for functional genomics data', <A href="https://www.ncbi.nlm.nih.gov/geo/">GEO</A>, 'Vast coverage across organisms, diseases, and platforms'],
        [<strong>SRA</strong>, 'Raw sequencing data including FASTQ', <A href="https://www.ncbi.nlm.nih.gov/sra">SRA</A>, 'Use with SRA Toolkit or via GEO links'],
        [<strong>ArrayExpress</strong>, 'Functional genomics data archive by EMBL-EBI', <A href="https://www.ebi.ac.uk/arrayexpress/">ArrayExpress</A>, 'European counterpart to GEO'],
        [<strong>recount3</strong>, 'Preprocessed and normalized RNA-seq data', <A href="https://jhubiostatistics.shinyapps.io/recount3/">recount3</A>, 'Easily accessible via R/Bioconductor'],
        [<strong>GTEx</strong>, 'Bulk RNA-seq data from healthy human tissues', <A href="https://gtexportal.org/home/">GTEx</A>, 'Excellent for baseline human expression reference'],
        [<strong>TCGA</strong>, 'RNA-seq data from various cancer types', <A href="https://portal.gdc.cancer.gov/">GDC Portal</A>, 'Registration required for controlled-access data'],
        [<strong>ARCHS4</strong>, 'Massive collection of processed RNA-seq expression matrices', <A href="https://maayanlab.cloud/archs4/">ARCHS4</A>, 'Includes gene co-expression and functional predictions'],
        [<strong>Expression Atlas</strong>, 'Baseline and differential gene expression', <A href="https://www.ebi.ac.uk/gxa/home">Expression Atlas</A>, 'Supports both bulk and some single-cell studies'],
    ]
};

const singleCellRnaSeqDataSources = {
    headers: ["Source Name", "Description", "Access Link", "Notes"],
    rows: [
        [<strong>Human Cell Atlas</strong>, 'scRNA-seq data from diverse human tissues', <A href="https://data.humancellatlas.org/">HCA Data Portal</A>, 'High-quality, well-annotated datasets'],
        [<strong>SC Expression Atlas</strong>, 'Curated collection of scRNA-seq datasets', <A href="https://www.ebi.ac.uk/gxa/sc/home">SC Atlas</A>, 'Searchable by tissue, species, and conditions'],
        [<strong>Broad SCP</strong>, 'Portal for visualization and sharing of single-cell studies', <A href="https://singlecell.broadinstitute.org/single_cell">Broad SCP</A>, 'Project browser and interactive plots'],
        [<strong>Tabula Muris</strong>, 'scRNA-seq from multiple mouse organs', <A href="https://tabula-muris.ds.czbiohub.org/">Tabula Muris</A>, 'Great for method development or cross-tissue comparison'],
        [<strong>Tabula Sapiens</strong>, 'Human counterpart to Tabula Muris', <A href="https://tabula-sapiens-portal.ds.czbiohub.org/">Tabula Sapiens</A>, 'Pan-tissue scRNA-seq reference'],
        [<strong>PanglaoDB</strong>, 'Annotated scRNA-seq datasets by cell type', <A href="https://panglaodb.se/">PanglaoDB</A>, 'Easily browsable for human and mouse'],
        [<strong>scRNA-tools DB</strong>, 'Links to tools and studies, not a data repo', <A href="https://www.scrna-tools.org/">scRNA-tools</A>, 'Browse datasets tagged with analysis tools'],
        [<strong>GEO (scRNA-seq)</strong>, 'Many single-cell datasets are submitted via GEO', <A href="https://www.ncbi.nlm.nih.gov/geo/">GEO</A>, 'Use keywords like "single-cell"'],
    ]
};

const bulkRnaSeqToolsR = {
    headers: ["Tool / Package", "Description", "Language", "Link"],
    rows: [
        ['FastQC', 'Quality control for raw sequence reads', 'Standalone (Java)', <A href="https://www.bioinformatics.babraham.ac.uk/projects/fastqc/">FastQC</A>],
        ['MultiQC', 'Aggregate QC reports', 'Python', <A href="https://multiqc.info/">MultiQC</A>],
        ['Trimmomatic', 'Read trimming for Illumina data', 'Java', <A href="http://www.usadellab.org/cms/?page=trimmomatic">Trimmomatic</A>],
        ['HISAT2', 'Fast, splice-aware read alignment', 'C++', <A href="https://daehwankimlab.github.io/hisat2/">HISAT2</A>],
        ['STAR', 'Ultrafast RNA-seq aligner', 'C++', <A href="https://github.com/alexdobin/STAR">STAR</A>],
        ['Salmon', 'Alignment-free transcript quantification', 'C++', <A href="https://salmon.readthedocs.io/">Salmon</A>],
        ['Kallisto', 'Pseudo-alignment for quantification', 'C++', <A href="https://pachterlab.github.io/kallisto/">Kallisto</A>],
        ['tximport', 'Import transcript-level to gene-level', 'R (Bioconductor)', <A href="https://bioconductor.org/packages/tximport/">tximport</A>],
        ['DESeq2', 'Differential expression analysis', 'R (Bioconductor)', <A href="https://bioconductor.org/packages/DESeq2/">DESeq2</A>],
        ['edgeR', 'Differential expression using count data', 'R (Bioconductor)', <A href="https://bioconductor.org/packages/edgeR/">edgeR</A>],
        ['limma-voom', 'Linear modeling with RNA-seq data', 'R (Bioconductor)', <A href="https://bioconductor.org/packages/limma/">limma</A>],
        ['biomaRt', 'Gene annotation and ID conversion', 'R (Bioconductor)', <A href="https://bioconductor.org/packages/biomaRt/">biomaRt</A>],
        ['pheatmap', 'Heatmaps for expression data', 'R', <A href="https://cran.r-project.org/web/packages/pheatmap/index.html">pheatmap</A>],
        ['ggplot2', 'Data visualization framework', 'R (tidyverse)', <A href="https://ggplot2.tidyverse.org/">ggplot2</A>],
        ['clusterProfiler', 'Functional enrichment (GO/KEGG)', 'R (Bioconductor)', <A href="https://bioconductor.org/packages/clusterProfiler/">clusterProfiler</A>],
    ]
};

const bulkRnaSeqToolsPython = {
    headers: ["Tool / Package", "Description", "Link"],
    rows: [
        ['HTSeq', 'Read counting tool for aligned RNA-seq data', <A href="https://htseq.readthedocs.io/">HTSeq</A>],
        ['featureCounts', 'Wrapped in Python for counting mapped reads', <A href="http://bioinf.wehi.edu.au/featureCounts/">featureCounts</A>],
        ['Pandas', 'Data manipulation and tabular processing', <A href="https://pandas.pydata.org/">Pandas</A>],
        ['NumPy', 'Numerical computing backend', <A href="https://numpy.org/">NumPy</A>],
        ['SciPy', 'Scientific computing and statistics', <A href="https://www.scipy.org/">SciPy</A>],
        ['Matplotlib/Seaborn', 'Visualization and plotting', <><A href="https://matplotlib.org/">Matplotlib</A> / <A href="https://seaborn.pydata.org/">Seaborn</A></>],
        ['statsmodels', 'Statistical modeling (e.g., GLMs for DE)', <A href="https://www.statsmodels.org/">statsmodels</A>],
        ['BioPython', 'Bioinformatics utilities for parsing', <A href="https://biopython.org/">BioPython</A>],
    ]
};

const singleCellRnaSeqToolsR = {
    headers: ["Tool / Package", "Description", "Language", "Link"],
    rows: [
        ['Seurat', 'Comprehensive scRNA-seq analysis framework', 'R', <A href="https://satijalab.org/seurat/">Seurat</A>],
        ['SingleR', 'Automated cell type annotation', 'R (Bioconductor)', <A href="https://bioconductor.org/packages/SingleR/">SingleR</A>],
        ['scater', 'Quality control, visualization, and analysis', 'R (Bioconductor)', <A href="https://bioconductor.org/packages/scater/">scater</A>],
        ['scran', 'Normalization and variance modeling', 'R (Bioconductor)', <A href="https://bioconductor.org/packages/scran/">scran</A>],
        ['celldex', 'Prebuilt reference datasets for annotation', 'R (Bioconductor)', <A href="https://bioconductor.org/packages/celldex/">celldex</A>],
        ['scRNA-tools', 'Curated database of tools for scRNA-seq', 'Web resource', <A href="https://www.scrna-tools.org/">scRNA-tools</A>],
        ['Monocle3', 'Trajectory inference and pseudotime', 'R (Bioconductor)', <A href="https://cole-trapnell-lab.github.io/monocle3/">Monocle3</A>],
        ['BiocSingular', 'PCA/SVD for large scRNA-seq', 'R (Bioconductor)', <A href="https://bioconductor.org/packages/BiocSingular/">BiocSingular</A>],
    ]
};

const singleCellRnaSeqToolsPython = {
    headers: ["Tool / Package", "Description", "Link"],
    rows: [
        ['Scanpy', 'Scalable framework for single-cell analysis', <A href="https://scanpy.readthedocs.io/">Scanpy</A>],
        ['AnnData', 'Core data structure for single-cell data', <A href="https://anndata.readthedocs.io/">AnnData</A>],
        ['scvelo', 'RNA velocity analysis for dynamic cell states', <A href="https://scvelo.readthedocs.io/">scvelo</A>],
        ['CellRank', 'Fate mapping using RNA velocity', <A href="https://cellrank.org/">CellRank</A>],
        ['Squidpy', 'Spatial transcriptomics toolkit', <A href="https://squidpy.readthedocs.io/">Squidpy</A>],
        ['UMAP', 'Dimensionality reduction method', <A href="https://umap-learn.readthedocs.io/">UMAP</A>],
        ['leidenalg', 'Clustering via Leiden algorithm', <A href="https://github.com/vtraag/leidenalg">leidenalg</A>],
        ['Scanorama', 'Batch correction and data integration', <A href="https://github.com/brianhie/scanorama">Scanorama</A>],
        ['Scrublet', 'Doublet detection for single-cell data', <A href="https://github.com/AllonKleinLab/scrublet">Scrublet</A>],
        ['Harmony-Py', 'Fast and accurate batch integration', <A href="https://github.com/slowkow/harmony-py">Harmony-Py</A>],
    ]
};

const papersWithCode = [
    { category: "Tutorial", papers: [{ citation: <>Luecken, M.D., & Theis, F.J. (2019). <strong>Current best practices in single‐cell RNA‐seq analysis: a tutorial.</strong> Mol. Syst. Biol. 15, e8746.</>, codeLang: 'Python', codeLink: 'https://github.com/theislab/single-cell-tutorial' }] },
    { category: "Cell Atlas", papers: [
        { citation: <>Nieto, P., et al. (2020). <strong>A Single-Cell Tumor Immune Atlas for Precision Oncology.</strong> BioRxiv.</>, codeLang: 'R', codeLink: 'https://github.com/Single-Cell-Genomics-Group-CNAG-CRG/Tumor-Immune-Cell-Atlas' },
        { citation: <>Tabula Muris Consortium. (2020). <strong>A single-cell transcriptomic atlas characterizes ageing tissues in the mouse.</strong> Nature 583.</>, codeLang: 'Python', codeLink: 'https://github.com/czbiohub/tabula-muris-senis' },
        { citation: <>Travaglini, K. J. et al. (2020). <strong>A molecular cell atlas of the human lung from single-cell RNA sequencing.</strong> Nature 587.</>, codeLang: 'R', codeLink: 'https://github.com/krasnowlab/HLCA' },
        { citation: <><a className="text-brand-accent hover:underline" href="https://www.biorxiv.org/content/10.1101/2020.11.05.369363v1">Reynolds, G. et al. (2020). <strong>Poised cell circuits in human skin are activated in disease.</strong> bioRxiv.</a></>, codeLang: 'Python and R', codeLink: 'https://github.com/haniffalab/HCA_skin' },
        { citation: <>Consortium TTS, Quake SR. (2021). <strong>The Tabula Sapiens: a multiple organ single cell transcriptomic atlas of humans.</strong> bioRxiv.</>, codeLang: 'Python', codeLink: 'https://github.com/czbiohub/tabula-sapiens' },
    ]},
    { category: "Developmental Biology", papers: [
        { citation: <>Han, L., et al. (2020). <strong>Single cell transcriptomics identifies a signaling network coordinating endoderm and mesoderm diversification.</strong> Nat. Commun. 11.</>, codeLang: 'R', codeLink: 'https://github.com/ZornLab/Single-cell-transcriptomics-reveals-a-signaling-roadmap-coordinating-endoderm-and-mesoderm-lineage' },
        { citation: <><a className="text-brand-accent hover:underline" href="https://www.nature.com/articles/s41587-023-01747-2">Wahle, P., et al. (2023). <strong>Multimodal spatiotemporal phenotyping of human retinal organoid development.</strong> Nature Biotechnology.</a></>, codeLang: 'R and Python', codeLink: 'https://github.com/ZornLab/Single-cell-transcriptomics-reveals-a-signaling-roadmap-coordinating-endoderm-and-mesoderm-lineage' },
    ]},
    { category: "Neuroscience", papers: [
        { citation: <>Hochgerner, H., et al. (2018). <strong>Conserved properties of dentate gyrus neurogenesis across postnatal development revealed by single-cell RNA sequencing.</strong> Nat. Neurosci. 21.</>, codeLang: 'Matlab', codeLink: 'https://github.com/linnarsson-lab/DG_paper_public' },
        { citation: <><a className="text-brand-accent hover:underline" href="https://www.biorxiv.org/content/10.1101/2020.12.29.424636v2">Trevino, A. E. et al. (2021). <strong>Chromatin and gene-regulatory dynamics of the developing human cerebral cortex at single-cell resolution.</strong> bioRxiv.</a></>, codeLang: 'R', codeLink: 'https://github.com/alexandrotrevino/brainchromatin' },
    ]},
    // Abridged for brevity, more papers can be added following this structure
];

const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('both');
  const [selectedResource, setSelectedResource] = useState<Resource | null>(resources[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'both' || resource.subcategory === selectedSubcategory || resource.subcategory === 'both';
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const categories = [
    { key: 'all', label: 'All Resources', count: resources.length },
    { key: 'data', label: 'Data Sources', count: resources.filter(r => r.category === 'data').length },
    { key: 'tools', label: 'Analysis Tools', count: resources.filter(r => r.category === 'tools').length },
    { key: 'tutorials', label: 'Tutorials', count: resources.filter(r => r.category === 'tutorials').length }
  ];

  const subcategories = [
    { key: 'both', label: 'All Types' },
    { key: 'bulk', label: 'Bulk RNA-seq' },
    { key: 'single-cell', label: 'Single-Cell' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-brand-light/30 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Learning Resources
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Essential data sources, analysis tools, and tutorials to accelerate your transcriptomics research. 
            Curated for students at every level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/sK7qXPHmSDwoq1738"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Master These Tools
            </a>
            <a
              href="#resources"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-brand-primary transition-all"
            >
              Explore Resources
            </a>
          </div>
        </div>
      </section>

      {/* Resource Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Comprehensive Resource Library</h2>
            <p className="text-lg text-brand-secondary max-w-3xl mx-auto">
              Hand-picked resources used in cutting-edge research labs and taught in our course modules
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <DatabaseIcon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-600 mb-2">{resources.filter(r => r.category === 'data').length}</div>
              <p className="text-brand-secondary">Data Sources</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <CodeIcon className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-600 mb-2">{resources.filter(r => r.category === 'tools').length}</div>
              <p className="text-brand-secondary">Analysis Tools</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <BookOpenIcon className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-2">{resources.filter(r => r.category === 'tutorials').length}</div>
              <p className="text-brand-secondary">Learning Materials</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
              <p className="text-brand-secondary">Course modules supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Explorer */}
      <section id="resources" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Resource Explorer</h2>
            <p className="text-lg text-brand-secondary max-w-3xl mx-auto mb-8">
              Search, filter, and discover the perfect resources for your transcriptomics projects
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto mb-6">
              <input
                type="text"
                placeholder="Search resources by name, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-accent focus:outline-none text-lg"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
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
            
            <div className="flex flex-wrap justify-center gap-2">
              {subcategories.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setSelectedSubcategory(key)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    selectedSubcategory === key
                      ? 'bg-brand-secondary text-white'
                      : 'bg-gray-100 text-brand-secondary hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Resource Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {filteredResources.length === 0 ? (
              <div className="col-span-2 text-center py-12">
                <p className="text-xl text-brand-secondary">No resources found matching your criteria.</p>
                <p className="text-brand-secondary mt-2">Try different keywords or category filters.</p>
              </div>
            ) : (
              filteredResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  isActive={selectedResource?.id === resource.id}
                  onClick={() => setSelectedResource(resource)}
                />
              ))
            )}
          </div>

          {/* Selected Resource Details */}
          {selectedResource && <ResourceDetails resource={selectedResource} />}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Ready to Use These Resources?</h2>
          <p className="text-lg text-brand-secondary mb-8 max-w-3xl mx-auto">
            Don't just browse resources—learn to use them effectively! Our course provides hands-on training 
            with these essential tools and databases.
          </p>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-brand-accent">
            <h3 className="text-xl font-bold text-brand-dark mb-4">What You'll Learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="text-left">
                <h4 className="font-semibold text-brand-dark mb-2">Data Access & Management:</h4>
                <ul className="text-sm text-brand-secondary space-y-1">
                  <li>• Download and process GEO/TCGA datasets</li>
                  <li>• Navigate HCA and single-cell atlases</li>
                  <li>• Quality control and preprocessing workflows</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-brand-dark mb-2">Tool Mastery:</h4>
                <ul className="text-sm text-brand-secondary space-y-1">
                  <li>• DESeq2 for differential expression</li>
                  <li>• Seurat for single-cell analysis</li>
                  <li>• Integration of multiple analysis tools</li>
                </ul>
              </div>
            </div>
            
            <a
              href="https://forms.gle/sK7qXPHmSDwoq1738"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-brand-accent to-brand-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform group"
            >
              <span>Start Learning With These Resources</span>
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;