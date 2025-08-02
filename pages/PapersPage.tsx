
import React from 'react';

const papers = [
    { title: "The STAR aligner: ultrafast, universal RNA-seq aligner", authors: "Dobin A, et al.", journal: "Bioinformatics. 2013", link: "https://doi.org/10.1093/bioinformatics/bts635" },
    { title: "DESeq2 for differential gene expression analysis", authors: "Love MI, Huber W, Anders S.", journal: "Genome Biology. 2014", link: "https://doi.org/10.1186/s13059-014-0550-8" },
    { title: "Seurat: Tools for Single-Cell Genomics", authors: "Hao Y, et al.", journal: "Cell. 2021", link: "https://doi.org/10.1016/j.cell.2021.04.048" },
    { title: "Nextflow enables reproducible computational workflows", authors: "Di Tommaso P, et al.", journal: "Nature Biotechnology. 2017", link: "https://doi.org/10.1038/nbt.3820" }
];

const PapersPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-brand-light border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-brand-primary">Recommended Reading</h1>
            <p className="mt-4 text-xl text-brand-secondary">A curated list of foundational papers and key publications.</p>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose lg:prose-xl max-w-none text-brand-secondary">
          <p>The field of transcriptomics is built upon decades of incredible research. This curated list includes key papers that introduced the tools and concepts we cover in this course, as well as landmark studies that showcase their application. Reading these will provide a deeper context for your learning.</p>
        </div>
        <div className="mt-12 space-y-8">
          {papers.map((paper, index) => (
            <div key={index} className="bg-brand-light p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-brand-dark mt-0">{paper.title}</h3>
              <p className="text-md text-brand-secondary mt-2 font-sans">{paper.authors}</p>
              <p className="text-md italic text-gray-500 mt-1 font-sans">{paper.journal}</p>
              <a href={paper.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-brand-accent font-bold hover:underline font-sans">
                Read Paper &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PapersPage;