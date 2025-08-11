
import React from 'react';
import {
    TerminalIcon,
    PipelineIcon,
    CellsIcon,
    ChartBarIcon,
    StatsIcon,
    DnaIcon,
    DatabaseIcon,
} from './components/IconComponents';

export interface Module {
  id: string;
  title: string;
  description: string;
  concepts: string[];
}

export interface ModuleCategory {
  category: string;
  modules: Module[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}

export interface LearningOutcome {
    icon: React.ElementType;
    title: string;
    description: string;
}

export interface Tutorial {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
}

export const MODULE_DATA: ModuleCategory[] = [
  {
    category: "Fundamentals Concepts",
    modules: [
      { 
        id: "M1", 
        title: "Intro to RNA-Seq Technology", 
        description: "Learn the ##basic principles## behind Next-Generation Sequencing (NGS) and how it applies to ##transcriptomics##. Understand the difference between DNA-seq, RNA-seq, and what biological questions can be answered.",
        concepts: ['NGS', 'mRNA', 'cDNA', 'FASTQ', 'sequencing'],
      },
      { 
        id: "M2", 
        title: "Setting up Your Environment", 
        description: "Prepare your ##computational environment## for bioinformatics. We'll guide you through installing essential tools like ##Conda## and setting up the required software packages for the course.",
        concepts: ['conda', 'bash', 'environment', 'packages', 'CLI'],
      },
      { 
        id: "M3", 
        title: "Linux Command Line", 
        description: "Master the ##essential commands## for navigating file systems and manipulating data. The command line is a ##bioinformatician's best friend## and a critical skill for analysis pipelines.",
        concepts: ['ls', 'cd', 'grep', 'awk', 'pipe', 'bash-script'],
      },
      { 
        id: "M4", 
        title: "Fundamentals of R", 
        description: "Grasp the ##core concepts## of the R programming language. Learn about data types, functions, and control structures, setting the stage for ##powerful statistical analysis##.",
        concepts: ['variables', 'functions', 'data.frame', 'tidyverse', 'ggplot2'],
      },
      { 
        id: "M5", 
        title: "Bulk RNA-Seq Pipelines", 
        description: "Execute a ##complete pipeline## from raw reads to count matrices. We'll cover tools like ##STAR## for alignment and ##Salmon## for quantification, automated with Nextflow.",
        concepts: ['STAR', 'RSEM', 'Salmon', 'Nextflow', 'QC'],
      },
      { 
        id: "M6", 
        title: "Single-cell RNA-Seq Pipelines", 
        description: "Process 10X Genomics data using ##Cell Ranger## and Nextflow. Learn how single-cell data is generated, from ##barcoding## to a final ##feature-barcode matrix##.",
        concepts: ['10x-genomics', 'cell-ranger', 'barcodes', 'UMIs', 'nextflow'],
      }
    ]
  },
  {
    category: "Bulk RNA-Seq Analysis",
    modules: [
      { 
        id: "M7", 
        title: "Exploratory Data Analysis", 
        description: "This module teaches how to generate the ##right chart## for quality control and ##data exploration##. Create basic but ##insightful graphs## like PCA plots and heatmaps to understand your data's structure.",
        concepts: ['PCA', 'heatmap', 'ggplot2', 'clustering', 'QC'],
      },
      { 
        id: "M8", 
        title: "Differential Expression", 
        description: "Statistically identify which genes change between conditions using premier tools like ##DESeq2## and ##edgeR##. Learn to interpret results like ##log-fold change## and ##p-values##.",
        concepts: ['DESeq2', 'edgeR', 'limma', 'volcano-plot', 'MA-plot'],
      },
      { 
        id: "M9", 
        title: "Functional Enrichment", 
        description: "Go beyond gene lists to understand ##biological meaning##. Perform GO and KEGG pathway analysis with ##clusterProfiler## to discover what your differentially expressed genes are doing.",
        concepts: ['GO', 'KEGG', 'enrichment', 'GSEA', 'clusterProfiler'],
      }
    ]
  },
  {
    category: "Single Cell Analysis",
    modules: [
      { 
        id: "M10", 
        title: "Foundations of Seurat", 
        description: "Dive into the world of single-cell analysis with the ##Seurat## R package. Learn about the ##Seurat object##, the core data structure for all your analyses.",
        concepts: ['Seurat', 'object', 'metadata', 'assays', 'slots'],
      },
      { 
        id: "M11", 
        title: "Preprocessing and QC", 
        description: "Ensure ##high-quality data## by filtering out low-quality cells and doublets. Understand key QC metrics like ##nFeature_RNA##, ##nCount_RNA##, and percent mitochondrial DNA.",
        concepts: ['filtering', 'doublets', 'normalization', 'violin-plot', 'QC'],
      },
      { 
        id: "M12", 
        title: "Clustering & Cell Annotation", 
        description: "Identify and label cell populations by ##unsupervised clustering##. Learn to use ##UMAP## for visualization and marker genes to assign ##biological cell types## to each cluster.",
        concepts: ['PCA', 'UMAP', 'clustering', 'markers', 'dot-plot', 'annotation'],
      },
      { 
        id: "M13", 
        title: "Data Integration", 
        description: "Combine datasets from different experiments, batches, or technologies. Use Seurat's powerful ##integration workflow## to remove technical noise and identify ##shared cell states##.",
        concepts: ['integration', 'batch-effect', 'anchors', 'CCA', 'RPCA'],
      },
      { 
        id: "M14", 
        title: "Spatial Transcriptomics", 
        description: "Go beyond 'what' and discover 'where'. Analyze gene expression in its ##native tissue context##. Learn to integrate ##spatial data## with your single-cell results for deeper insights.",
        concepts: ['visium', 'spatial', 'histology', 'integration', 'deconvolution'],
      }
    ]
  },
  {
    category: "Advanced Topics & Meta-Analysis",
    modules: [
      { 
        id: "M15", 
        title: "Meta-Analysis of Public Transcriptomic Data", 
        description: "Learn to leverage ##public data## from GEO, SRA, and other repositories. Master ##meta-analysis## techniques to combine multiple datasets and uncover novel biological insights through ##batch correction## methods.",
        concepts: ['meta-analysis', 'GEO', 'SRA', 'recount3', 'batch-correction', 'publication-strategy', 'data-reuse'],
      }
    ]
  }
];

export const WHAT_YOULL_LEARN: LearningOutcome[] = [
    {
        icon: TerminalIcon,
        title: "Master Essential Tools",
        description: "Gain fluency in the Linux command line and R programming, the two most critical tools for any computational biologist."
    },
    {
        icon: PipelineIcon,
        title: "Build Analysis Pipelines",
        description: "Learn to execute complete, end-to-end bulk RNA-seq analysis pipelines, from raw FASTQ files to count matrices."
    },
    {
        icon: CellsIcon,
        title: "Analyze Single-Cell Data",
        description: "Dive into the world of single-cell RNA-seq using Seurat, from data normalization and clustering to cell type annotation."
    },
    {
        icon: ChartBarIcon,
        title: "Create Stunning Visualizations",
        description: "Produce beautiful, publication-quality plots and figures like heatmaps, volcano plots, and UMAPs to effectively communicate your findings."
    },
    {
        icon: StatsIcon,
        title: "Interpret Biological Meaning",
        description: "Go beyond gene lists. Perform differential expression and functional enrichment analysis to uncover the biological stories in your data."
    },
    {
        icon: DatabaseIcon,
        title: "Leverage Public Data",
        description: "Learn how to find, download, and integrate public datasets from repositories like GEO and SRA to perform powerful meta-analyses."
    }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "This course transformed my research. The hands-on approach to data analysis is unparalleled. I can now confidently analyze my own transcriptomic data.",
    name: "Dr. Evelyn Reed",
    title: "Postdoctoral Fellow",
    imageUrl: "assets/images/student-1.jpg"
  },
  {
    quote: "An incredibly detailed and well-structured course. The instructor's expertise is evident in every module. Highly recommended for any biologist moving into computational work.",
    name: "John Carter",
    title: "PhD Student",
    imageUrl: "assets/images/student-2.jpg"
  },
   {
    quote: "The best investment I've made in my career. The skills I learned here were directly applicable to my work and helped me produce several high-impact publications.",
    name: "Dr. Anya Sharma",
    title: "Computational Biologist",
    imageUrl: "assets/images/student-3.jpg"
  }
];

export const FAQS = [
  {
    question: "Who is this course for?",
    answer: "This course is designed for graduate students, postdoctoral researchers, and established scientists who want to learn how to analyze transcriptomic data. A basic understanding of biology is helpful, but no prior programming experience is required."
  },
  {
    question: "What software will I need?",
    answer: "We will guide you through setting up all necessary open-source software. You will need a computer with a Linux/macOS environment or a Windows machine with WSL (Windows Subsystem for Linux). Detailed instructions are provided in Module 2."
  },
  {
    question: "Do I get a certificate upon completion?",
    answer: "Yes, upon successful completion of all modules and assignments, you will receive a certificate of completion that you can share on your professional networks."
  },
  {
    question: "How long do I have access to the course materials?",
    answer: "You will have lifetime access to all course materials, including video lectures, code notebooks, and datasets. You can learn at your own pace and revisit the content anytime."
  },
    {
    question: "Is there support available if I get stuck?",
    answer: "Absolutely. The course includes access to a private community forum where you can ask questions and interact with the instructor and fellow students. We also have dedicated Q&A sessions."
  }
];

export const INSTRUCTOR_INFO = {
    name: "Md. Jubayer Hossain",
    position: "Founder & CEO, DeepBio Limited, Founder & Executive Director, CHIRAL Bangladesh",
    photoUrl: "https://spaces-cdn.owlstown.com/blobs/lb0dtxxthwlho2poglu8wogl42w2",
    bio: "Md. Jubayer Hossain is the Founder and CEO of DeepBio Limited and Executive Director of CHIRAL Bangladesh. He holds BSc and MSc degrees in Microbiology from Jagannath University. He teaches AI for Public Health at Daffodil International University and leads bioinformatics and machine learning programs at cBLAST, University of Dhaka. His research focuses on applying AI to health data—including omics and neuroimaging—to discover biomarkers and develop predictive models for cancer and neurological disorders. He also specializes in visualizing complex biological data for clinical interpretation.",
    longBio: "Md. Jubayer Hossain is a computational biologist and bioinformatics researcher with extensive experience in transcriptomics data analysis and machine learning applications in healthcare. He holds BSc and MSc degrees in Microbiology from Jagannath University, Dhaka, Bangladesh.\n\nAs the Founder and CEO of DeepBio Limited, he leads innovative projects at the intersection of artificial intelligence and biological data analysis. He also serves as the Founder and Executive Director of CHIRAL Bangladesh, a non-profit organization dedicated to advancing computational research in life sciences.\n\nCurrently, he teaches AI for Public Health at Daffodil International University and leads bioinformatics and machine learning programs at cBLAST (Center for Bioinformatics Learning Advancement and Systematic Training), University of Dhaka. His research focuses on applying AI and machine learning techniques to health data, including omics data and neuroimaging, to discover biomarkers and develop predictive models for cancer and neurological disorders.\n\nWith a passion for making complex computational methods accessible to biologists, Md. Jubayer has developed comprehensive training programs that bridge the gap between traditional biology and modern computational approaches. He specializes in visualizing complex biological data for clinical interpretation and has contributed to numerous research projects in transcriptomics, genomics, and precision medicine.\n\nHis teaching philosophy centers on building strong conceptual foundations before diving into technical implementations, ensuring that students understand both the 'how' and 'why' of computational biology methods."
}


export const TUTORIALS: Tutorial[] = [
    {
        icon: PipelineIcon,
        title: "RNA-Seq Analysis with R | Workflow Setup",
        description: "This video is the first part of a series on RNA-Seq analysis with R. Learn how to set up your workflow for RNA-Seq analysis in R.",
        link: "https://youtu.be/tRNGUINrpls?si=Z_lF-Cgq1K7hO6TE"
    },
    
    {
        icon: PipelineIcon,
        title: "RNA-Seq Analysis with R | Introduction to RNA-Seq",
        description: "Learn how to analyze RNA-Seq data with R in this informative video series. In this video, we'll cover the basics of RNA-Seq analysis and get you started on using R for your research.",
        link: "https://youtu.be/hiDo9JCkdH8?si=-cTp8-M37JfyRylo"
    },
    
    {
        icon: PipelineIcon,
        title: "RNA-Seq Analysis with R | Fundamentals of R: Part I ",
        description: "This video is perfect for beginners and anyone looking to strengthen their R skills before diving deeper into RNA-Seq analysis. Understanding these fundamentals will help you navigate the more advanced topics in the upcoming videos.",
        link: "https://youtu.be/WgH-6gDGoyc?si=bHy30Ep6ZdPd88gN"
    },
    {
        icon: PipelineIcon,
        title: "RNA-Seq Analysis with R | Fundamentals of R: Part II",
        description: "By the end of this video, you'll be well-equipped to handle the intricacies of RNA-Seq data using R. This foundational knowledge is crucial as we move forward into the more specialized topics in the upcoming videos.",
        link: "https://youtu.be/Eps9BtmYRBs?si=wlCZF_ApsmunFDAv"
    }, 
    {
        icon: PipelineIcon,
        title: "RNA-Seq Analysis with R | RNA-Seq Data Manipulation",
        description: "In this fifth installment of the RNA-Seq Analysis with R series, we dive into RNA-Seq data manipulation techniques using R. You'll learn how to efficiently handle large RNA-Seq datasets, focusing on essential tasks such as filtering, normalizing, and transforming data for downstream analysis.",
        link: "https://youtu.be/bdWws0gntMI?si=-hfAMWwYoSPF9snT"
    },
    {
        icon: PipelineIcon,
        title: "RNA-Seq Analysis with R | RNA-Seq Data Visualization",
        description: "In the sixth video of our RNA-Seq Analysis with R series, we focus on RNA-Seq data visualization techniques. This tutorial covers a range of methods to visually explore and interpret RNA-Seq data, including the creation of heatmaps, PCA plots, and expression level distributions.",
        link: "https://youtu.be/QuobIs-VI4E?si=pmz_lqqdWVBTqdtN"
    },
     {
        icon: PipelineIcon,
        title: "RNA-Seq Analysis with R | RNA-Seq Pipeline from Scratch: Step-by-Step Guide",
        description: "Learn how to analyze RNA-Seq data with R in this step-by-step guide. Follow along as we build an RNA-Seq pipeline from scratch!",
        link: "https://youtu.be/8tQ0vnXnAIc?si=Ku7EzLe8dE6ZSsl-"
    }
];