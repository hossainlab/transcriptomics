
import React from 'react';
import { ArrowRightIcon } from '../components/IconComponents';

const PipelineStep = ({ title, description, tools }: { title: string; description: string; tools?: string }) => (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full max-w-xs sm:max-w-sm mx-auto md:w-64 text-center flex-shrink-0">
      <h4 className="font-bold font-sans text-brand-primary">{title}</h4>
      <p className="text-sm text-brand-secondary mt-1 min-h-[3.5rem] flex items-center justify-center px-2">{description}</p>
      {tools && <p className="text-xs text-gray-500 mt-2 font-mono bg-gray-100 p-1 rounded">Tools: {tools}</p>}
    </div>
);
  
const PipelineArrow = () => (
    <div className="flex-shrink-0 flex items-center justify-center h-8 w-full md:h-auto md:w-16 md:mx-2">
        <ArrowRightIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300 transform rotate-90 md:transform-none" />
    </div>
);

const PipelineSection = ({ title, description, children }: { title: string, description: string, children: React.ReactNode }) => (
    <div className="mb-20">
        <h2 className="text-3xl font-bold text-brand-primary mb-2 border-l-4 border-brand-accent pl-4">{title}</h2>
        <p className="text-lg text-brand-secondary mb-8 pl-5">{description}</p>
        <div className="flex flex-col md:flex-row items-center md:overflow-x-auto md:pb-6 md:-mx-4 md:px-4">
            {children}
        </div>
    </div>
);

const PipelinePage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <header className="bg-brand-light border-b border-gray-200 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold text-brand-primary">Analysis Pipelines</h1>
                    <p className="mt-4 text-xl text-brand-secondary">Visual overviews of the bulk and single-cell RNA-seq workflows you'll master.</p>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <PipelineSection title="Bulk RNA-Seq Analysis Pipeline" description="Follow the flow of data from raw reads to biological insights in population-level studies.">
                    <PipelineStep title="1. Raw Data" description="Start with FASTQ files from the sequencer." />
                    <PipelineArrow />
                    <PipelineStep title="2. Quality Control" description="Assess read quality." tools="FastQC" />
                    <PipelineArrow />
                    <PipelineStep title="3. Alignment" description="Map reads to a reference genome." tools="STAR, HISAT2" />
                    <PipelineArrow />
                    <PipelineStep title="4. Quantification" description="Count reads per gene." tools="RSEM, Salmon" />
                    <PipelineArrow />
                    <PipelineStep title="5. Count Matrix" description="Generate a table of counts vs. samples." />
                    <PipelineArrow />
                    <PipelineStep title="6. Differential Expression" description="Find genes that change between conditions." tools="DESeq2, edgeR" />
                    <PipelineArrow />
                    <PipelineStep title="7. Downstream Analysis" description="Pathway enrichment and visualization." tools="clusterProfiler" />
                </PipelineSection>

                <PipelineSection title="Single-Cell RNA-Seq Analysis Pipeline" description="Explore cellular heterogeneity by analyzing gene expression on a cell-by-cell basis.">
                    <PipelineStep title="1. Raw Data" description="Begin with FASTQ files and barcode info." />
                    <PipelineArrow />
                    <PipelineStep title="2. Pre-processing" description="Demultiplex and generate count matrix." tools="Cell Ranger" />
                    <PipelineArrow />
                    <PipelineStep title="3. Quality Control" description="Filter low-quality cells and genes." tools="Seurat" />
                    <PipelineArrow />
                    <PipelineStep title="4. Normalization" description="Adjust for library size differences." tools="Seurat" />
                    <PipelineArrow />
                    <PipelineStep title="5. Dimensionality Reduction" description="Reduce complexity for visualization." tools="PCA, UMAP" />
                    <PipelineArrow />
                    <PipelineStep title="6. Clustering" description="Group cells based on expression." tools="Seurat" />
                    <PipelineArrow />
                    <PipelineStep title="7. Cell Type Annotation" description="Assign biological identities to clusters." />
                    <PipelineArrow />
                    <PipelineStep title="8. Advanced Analysis" description="Integration, trajectory analysis, etc." tools="Seurat" />
                </PipelineSection>
            </main>
        </div>
    );
}

export default PipelinePage;
