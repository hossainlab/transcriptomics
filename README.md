# Transcriptomics Data Analysis (TDA)

## Course Overview
Transcriptomics Data Analysis (TDA) is a live, instructor-led training program designed to introduce participants to best practices in the analysis of high-throughput RNA sequencing (RNA-seq) data. This course empowers learners to independently analyze gene expression datasets using lightweight, open-source tools — with a strong emphasis on the R programming language and the Bioconductor ecosystem.

Delivered over live Zoom sessions, the course blends concise theoretical discussions with interactive, hands-on coding exercises using real-world ‘omic datasets. The instructional approach encourages active learning and immediate application of concepts.

While the primary focus is on cancer, neurological disorders, infectious disease, and One Health research, the analytical frameworks and data interpretation skills taught are broadly applicable to diverse areas of genomics and transcriptomics research.

## What is the goal of this course?
As high-throughput sequencing becomes increasingly accessible, the primary challenge in biomedical and life science research has shifted from data generation to data interpretation and analysis. This course is designed to equip researchers — especially students and early-career scientists — with a practical, lightweight toolkit for analyzing transcriptomic data using the R programming language and the Bioconductor suite of packages.

Rather than focusing on theory alone, this course emphasizes hands-on, reproducible data analysis using real-world bulk and single-cell RNA-seq datasets. Participants will learn to design and execute RNA-seq pipelines, troubleshoot common pitfalls, visualize and interpret expression patterns, and adopt best practices in scientific programming, all within the open-source R ecosystem.

## Who teaches the class?
This course is taught by Md Jubayer Hossain, a computational biologist and instructor at CHIRAL, with a focus on bioinformatics, transcriptomics, and public health genomics. He is the founder of DeepBio Limited, and his teaching is inspired by real-world use cases in infectious disease, cancer, and neurodegeneration. Guest instructors and collaborators from global research institutions may join live sessions to contribute expert insights during special lectures.

## Who supports or sponsors this course?
This course is an independent, open-science initiative. It is made possible by the support of the bioinformatics and open-source software communities, and leverages free tools such as:

- R and Bioconductor
- RStudio Cloud and Posit Workbench
- GitHub and GitHub Copilot for Education
- Free RNA-seq datasets from GEO, SRA, and recount3
  
Optional integrations with platforms like Google Colab, DataCamp, and Quarto may be included for enhanced learning. 

## What is the format of the course?
This is a live, Zoom-based course taught over a series of scheduled online sessions. Each session includes:

- A live lecture introducing key concepts and workflows
- A guided hands-on demo using real transcriptomics datasets
- Follow-up exercises and resources you can explore independently
Participants receive access to all lecture slides, code notebooks, data links, and recorded videos after each session.

## What will I learn?
By the end of this course, you will be able to:

- Analyze **bulk RNA-seq** and **single-cell RNA-seq** datasets  
- Develop a **lightweight and reproducible pipeline** in R  
- Apply **differential expression analysis** and functional enrichment  
- Create **high-quality visualizations** of transcriptomic data  
- Understand **experimental design and biases**  
- Use **public data repositories** like GEO and recount3  
- Leverage **AI tools** (like Copilot and ChatGPT) to boost your analysis workflow  
- Write reproducible reports using **R Markdown** or **Quarto**

  
## Who is this course for?
This course is ideal for:

- Graduate students and postdocs in biology, bioinformatics, or health sciences  
- Researchers new to transcriptomics or RNA-seq  
- Data science enthusiasts entering computational biology  

No prior experience in R or RNA-seq is required — just a willingness to learn and experiment.

## Can I follow along online if I can’t join live?

Yes! All lecture slides, code notebooks, data sources, and recorded videos will be made freely available via a GitHub repository and Google Drive. You can follow the course material at your own pace.

## What are the benefits of joining the live sessions?

Attending live sessions gives you access to:

- **Interactive Q&A and troubleshooting**  
- **Live coding walk-throughs with the instructor**  
- **Exclusive breakout sessions and project discussions**  
- **Early access to new modules and datasets**  
- **Opportunities to ask questions about your own data**  
- Optional **certificates of participation** (upon request)

---

## Will I receive a grade or certificate?

This is a **non-credit, non-graded course**, but participants who complete all modules and submit final assignments may request a **Certificate of Participation**. Priority is given to students attending live.

## Can I bring my own data?

Yes! You are encouraged to bring your own **bulk or single-cell RNA-seq data** to the course. During the later sessions, we’ll discuss how to structure custom projects using what you’ve learned.

## Can I cite this course in my work?

Yes! If you found this course helpful in preparing a manuscript or research project, you are welcome to acknowledge it. Please link to the course GitHub repository and cite the instructor as:

> Hossain MJ. Transcriptomics Data Analysis (TDA): An Open-Access, Hands-On RNA-seq Workshop. 2025. https://github.com/tda 

## Resources 
### Bulk RNA-seq Data Sources
| Source Name | Description | Access Link | Notes |
|-------------|-------------|-------------|-------|
| **GEO (Gene Expression Omnibus)** | NIH repository for functional genomics data; includes processed and raw RNA-seq datasets | [GEO](https://www.ncbi.nlm.nih.gov/geo/) | Vast coverage across organisms, diseases, and platforms |
| **SRA (Sequence Read Archive)** | Raw sequencing data including FASTQ for RNA-seq studies | [SRA](https://www.ncbi.nlm.nih.gov/sra) | Use with SRA Toolkit or via GEO links |
| **ArrayExpress (EBI)** | Functional genomics data archive by EMBL-EBI | [ArrayExpress](https://www.ebi.ac.uk/arrayexpress/) | European counterpart to GEO |
| **recount3** | Preprocessed and normalized RNA-seq data across multiple projects | [recount3](https://jhubiostatistics.shinyapps.io/recount3/) | Easily accessible via R/Bioconductor |
| **GTEx (Genotype-Tissue Expression)** | Bulk RNA-seq data from healthy human tissues | [GTEx](https://gtexportal.org/home/) | Excellent for baseline human expression reference |
| **TCGA (The Cancer Genome Atlas)** | RNA-seq data from various cancer types | [GDC Portal](https://portal.gdc.cancer.gov/) | Registration required for controlled-access data |
| **ARCHS4** | Massive collection of processed RNA-seq expression matrices | [ARCHS4](https://maayanlab.cloud/archs4/) | Includes gene co-expression and functional predictions |
| **Expression Atlas (EMBL-EBI)** | Baseline and differential gene expression across organisms | [Expression Atlas](https://www.ebi.ac.uk/gxa/home) | Supports both bulk and some single-cell studies |

###  Single-cell RNA-seq Data Sources
| Source Name | Description | Access Link | Notes |
|-------------|-------------|-------------|-------|
| **Human Cell Atlas (HCA)** | Single-cell RNA-seq data from diverse human tissues | [HCA Data Portal](https://data.humancellatlas.org/) | High-quality, well-annotated datasets |
| **Single Cell Expression Atlas (EBI)** | Curated collection of scRNA-seq datasets from ArrayExpress | [SC Atlas](https://www.ebi.ac.uk/gxa/sc/home) | Searchable by tissue, species, and conditions |
| **Broad Single Cell Portal** | Portal for visualization and sharing of single-cell studies | [Broad SCP](https://singlecell.broadinstitute.org/single_cell) | Project browser and interactive plots |
| **Tabula Muris** | scRNA-seq from multiple mouse organs and cell types | [Tabula Muris](https://tabula-muris.ds.czbiohub.org/) | Great for method development or cross-tissue comparison |
| **Tabula Sapiens** | Human counterpart to Tabula Muris | [Tabula Sapiens](https://tabula-sapiens-portal.ds.czbiohub.org/) | Pan-tissue scRNA-seq reference |
| **PanglaoDB** | Annotated scRNA-seq datasets by cell type | [PanglaoDB](https://panglaodb.se/) | Easily browsable for human and mouse |
| **scRNA-tools Database** | Not a dataset repository, but links to tools and studies | [scRNA-tools](https://www.scrna-tools.org/) | Browse datasets tagged with analysis tools |
| **GEO (scRNA-seq)** | Many single-cell datasets are also submitted via GEO | [GEO](https://www.ncbi.nlm.nih.gov/geo/) | Use filters like "expression profiling by high throughput sequencing" and keywords like "single-cell" |

### Bulk RNA-seq Tools and Packages
| Tool / Package | Description | Language | Link |
|----------------|-------------|----------|------|
| **FastQC** | Quality control for raw sequence reads | Standalone (Java) | [FastQC](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/) |
| **MultiQC** | Aggregate QC reports (e.g., FastQC, STAR, Salmon) | Python | [MultiQC](https://multiqc.info/) |
| **Trimmomatic** | Read trimming for Illumina data | Java | [Trimmomatic](http://www.usadellab.org/cms/?page=trimmomatic) |
| **HISAT2** | Fast, splice-aware read alignment | C++ | [HISAT2](https://daehwankimlab.github.io/hisat2/) |
| **STAR** | Ultrafast RNA-seq aligner | C++ | [STAR](https://github.com/alexdobin/STAR) |
| **Salmon** | Alignment-free transcript quantification | C++ | [Salmon](https://salmon.readthedocs.io/) |
| **Kallisto** | Pseudo-alignment for quantification | C++ | [Kallisto](https://pachterlab.github.io/kallisto/) |
| **tximport** | Import transcript-level quantification into gene-level matrix | R (Bioconductor) | [tximport](https://bioconductor.org/packages/tximport/) |
| **DESeq2** | Differential expression analysis | R (Bioconductor) | [DESeq2](https://bioconductor.org/packages/DESeq2/) |
| **edgeR** | Differential expression using count data | R (Bioconductor) | [edgeR](https://bioconductor.org/packages/edgeR/) |
| **limma-voom** | Linear modeling with RNA-seq data | R (Bioconductor) | [limma](https://bioconductor.org/packages/limma/) |
| **biomaRt** | Gene annotation and ID conversion | R (Bioconductor) | [biomaRt](https://bioconductor.org/packages/biomaRt/) |
| **pheatmap** | Heatmaps for expression data | R | [pheatmap](https://cran.r-project.org/web/packages/pheatmap/index.html) |
| **ggplot2** | Data visualization framework | R (tidyverse) | [ggplot2](https://ggplot2.tidyverse.org/) |
| **clusterProfiler** | Functional enrichment (GO/KEGG) | R (Bioconductor) | [clusterProfiler](https://bioconductor.org/packages/clusterProfiler/) |

### 🔬 Single-cell RNA-seq Tools and Packages
| Tool / Package | Description | Language | Link |
|----------------|-------------|----------|------|
| **Seurat** | Comprehensive scRNA-seq analysis framework | R | [Seurat](https://satijalab.org/seurat/) |
| **SingleR** | Automated cell type annotation using reference datasets | R (Bioconductor) | [SingleR](https://bioconductor.org/packages/SingleR/) |
| **scater** | Quality control, visualization, and analysis | R (Bioconductor) | [scater](https://bioconductor.org/packages/scater/) |
| **scran** | Normalization and variance modeling | R (Bioconductor) | [scran](https://bioconductor.org/packages/scran/) |
| **celldex** | Prebuilt reference datasets for cell annotation | R (Bioconductor) | [celldex](https://bioconductor.org/packages/celldex/) |
| **scRNA-tools** | Curated database of tools for scRNA-seq | Web resource | [scRNA-tools](https://www.scrna-tools.org/) |
| **Scanpy** | Fast and scalable scRNA-seq analysis | Python | [Scanpy](https://scanpy.readthedocs.io/) |
| **anndata** | Data structure for single-cell data in Python | Python | [anndata](https://anndata.readthedocs.io/) |
| **UMAP** | Dimensionality reduction method | Python / R | [UMAP](https://umap-learn.readthedocs.io/) |
| **leidenalg** | Community detection for clustering | Python | [leidenalg](https://github.com/vtraag/leidenalg) |
| **CellTypist** | Fast cell type annotation using machine learning | Python | [CellTypist](https://www.celltypist.org/) |
| **Monocle3** | Trajectory inference and pseudotime analysis | R (Bioconductor) | [Monocle3](https://cole-trapnell-lab.github.io/monocle3/) |
| **scVelo** | RNA velocity for dynamic cell state modeling | Python | [scVelo](https://scvelo.readthedocs.io/) |
| **BiocSingular** | PCA/SVD implementations for large scRNA-seq | R (Bioconductor) | [BiocSingular](https://bioconductor.org/packages/BiocSingular/) |










