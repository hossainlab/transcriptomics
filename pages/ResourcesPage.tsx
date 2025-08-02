
import React from 'react';

const A = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a href={href} className="text-brand-accent hover:underline font-sans font-semibold" target="_blank" rel="noopener noreferrer">{children}</a>
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
    <div className="bg-brand-light p-4 rounded-lg border border-gray-200 mb-4">
        <div className="text-brand-secondary">{citation}</div>
        {(codeLink || codeLang) && (
            <A href={codeLink || '#'} >
                <span className="mt-2 inline-block text-sm">
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
    return (
        <div className="bg-white min-h-screen">
            <header className="bg-brand-light border-b border-gray-200 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold text-brand-primary">Resources</h1>
                    <p className="mt-4 text-xl text-brand-secondary">A curated collection of data sources, tools, and papers for transcriptomic analysis.</p>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <SectionHeader title="Data Sources" />
                <SubSectionHeader title="Bulk RNA-seq" />
                <ResourceTable headers={bulkRnaSeqDataSources.headers} data={bulkRnaSeqDataSources.rows} />
                <SubSectionHeader title="Single-cell RNA-seq" />
                <ResourceTable headers={singleCellRnaSeqDataSources.headers} data={singleCellRnaSeqDataSources.rows} />

                <SectionHeader title="Analysis Tools & Packages" />
                <SubSectionHeader title="Bulk RNA-seq" />
                <p className="text-brand-secondary mb-4">A mix of standalone tools and packages primarily from the R/Bioconductor ecosystem.</p>
                <ResourceTable headers={bulkRnaSeqToolsR.headers} data={bulkRnaSeqToolsR.rows} />
                <p className="text-brand-secondary mt-8 mb-4">Core packages from the Python ecosystem for data handling and analysis.</p>
                <ResourceTable headers={bulkRnaSeqToolsPython.headers} data={bulkRnaSeqToolsPython.rows} />

                <SubSectionHeader title="Single-cell RNA-seq" />
                <p className="text-brand-secondary mb-4">Core packages from the R/Bioconductor ecosystem.</p>
                <ResourceTable headers={singleCellRnaSeqToolsR.headers} data={singleCellRnaSeqToolsR.rows} />
                <p className="text-brand-secondary mt-8 mb-4">Core packages from the Python ecosystem, centered around Scanpy.</p>
                <ResourceTable headers={singleCellRnaSeqToolsPython.headers} data={singleCellRnaSeqToolsPython.rows} />
                
                <SectionHeader title="Single Cell Papers with Code" />
                {papersWithCode.map(categoryData => (
                    <div key={categoryData.category} className="mb-8">
                        <h3 className="text-xl font-semibold text-brand-dark mb-4">{categoryData.category}</h3>
                        {categoryData.papers.map((paper, index) => <PaperEntry key={index} {...paper} />)}
                    </div>
                ))}
            </main>
        </div>
    );
};

export default ResourcesPage;