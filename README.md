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

> Hossain MJ. Transcriptomics Data Analysis (TDA): An Open-Access, Hands-On RNA-seq Workshop. 2025. https://github.com/transcriptomics 

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

### Single-cell RNA-seq Tools and Packages
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

### Bulk RNA-seq Tools (Python Ecosystem)
| Tool / Package | Description | Link |
|----------------|-------------|------|
| **HTSeq** | Read counting tool for aligned RNA-seq data (BAM/SAM) | [HTSeq](https://htseq.readthedocs.io/) |
| **featureCounts (via subprocess)** | Often wrapped in Python scripts for counting mapped reads | [featureCounts](http://bioinf.wehi.edu.au/featureCounts/) |
| **Pandas** | Data manipulation and tabular processing | [Pandas](https://pandas.pydata.org/) |
| **NumPy** | Numerical computing backend | [NumPy](https://numpy.org/) |
| **SciPy** | Scientific computing and statistics | [SciPy](https://www.scipy.org/) |
| **Matplotlib / Seaborn** | Visualization and plotting | [Matplotlib](https://matplotlib.org/) / [Seaborn](https://seaborn.pydata.org/) |
| **statsmodels** | Statistical modeling (e.g., GLMs for DE analysis) | [statsmodels](https://www.statsmodels.org/) |
| **BioPython** | Bioinformatics utilities for FASTA/FASTQ/BAM parsing | [BioPython](https://biopython.org/) |

### Single-cell RNA-seq Tools (Python Ecosystem)
| Tool / Package | Description | Link |
|----------------|-------------|------|
| **Scanpy** | Scalable framework for single-cell analysis | [Scanpy](https://scanpy.readthedocs.io/) |
| **AnnData** | Core data structure for single-cell data | [AnnData](https://anndata.readthedocs.io/) |
| **scvelo** | RNA velocity analysis for dynamic cell states | [scvelo](https://scvelo.readthedocs.io/) |
| **CellRank** | Fate mapping using RNA velocity and Markov chains | [CellRank](https://cellrank.org/) |
| **Squidpy** | Spatial transcriptomics toolkit | [Squidpy](https://squidpy.readthedocs.io/) |
| **UMAP** | Dimensionality reduction method | [UMAP](https://umap-learn.readthedocs.io/) |
| **leidenalg** | Clustering via Leiden algorithm | [leidenalg](https://github.com/vtraag/leidenalg) |
| **Scanorama** | Batch correction and data integration | [Scanorama](https://github.com/brianhie/scanorama) |
| **Scrublet** | Doublet detection for single-cell data | [Scrublet](https://github.com/AllonKleinLab/scrublet) |
| **Harmony-Py** | Fast and accurate batch integration | [Harmony-Py](https://github.com/slowkow/harmony-py) |

## Single Cell Papers with Code
### Tutorial

- [[code | Python]](https://github.com/theislab/single-cell-tutorial) Luecken, M.D., and Theis, F.J. (2019). **Current best practices in single‐cell RNA‐seq analysis: a tutorial.** Mol. Syst. Biol. 15, e8746.

### Cell Atlas

- [[code | R]](https://github.com/Single-Cell-Genomics-Group-CNAG-CRG/Tumor-Immune-Cell-Atlas) Nieto, P., Marc Elosua-Bayes, M., Trincado, J.L., Marchese, D., Massoni-Badosa, R., Salvany, M., Henriques, A., Mereu, E., Moutinho, C., Ruiz, S., et al. (2020). **A Single-Cell Tumor Immune Atlas for Precision Oncology.** BioRxiv 2020.10.26.354829.

- [[code | Python]](https://github.com/czbiohub/tabula-muris-senis) Tabula Muris Consortium. **A single-cell transcriptomic atlas characterizes ageing tissues in the mouse.** Nature 2020;583. https://doi.org/10.1038/s41586-020-2496-1.

- [[code | R]](https://github.com/krasnowlab/HLCA) Travaglini, K. J. et al. **A molecular cell atlas of the human lung from single-cell RNA sequencing.** Nature 587, 619–625 (2020).

- [[code | Python and R]](https://github.com/haniffalab/HCA_skin) Reynolds, G. et al. [**Poised cell circuits in human skin are activated in disease.**](https://www.biorxiv.org/content/10.1101/2020.11.05.369363v1) bioRxiv 2020.11.05.369363 (2020) doi:10.1101/2020.11.05.369363.

- [[code | Python]](https://github.com/czbiohub/tabula-sapiens) Consortium TTS, Quake SR. The Tabula Sapiens: a multiple organ single cell transcriptomic atlas of humans. bioRxiv 2021; 2021.07.19.452956


### Developmental biology

- [[code | R]](https://github.com/ZornLab/Single-cell-transcriptomics-reveals-a-signaling-roadmap-coordinating-endoderm-and-mesoderm-lineage) Han, L., Chaturvedi, P., Kishimoto, K., Koike, H., Nasr, T., Iwasawa, K., Giesbrecht, K., Witcher, P.C., Eicher, A., Haines, L., et al. (2020). **Single cell transcriptomics identifies a signaling network coordinating endoderm and mesoderm diversification during foregut organogenesis.** Nat. Commun. 11.

- [[code | R and Python]](https://github.com/ZornLab/Single-cell-transcriptomics-reveals-a-signaling-roadmap-coordinating-endoderm-and-mesoderm-lineage) Wahle, P., Brancati, G., Harmel, C., He, Z., Gut, G., del Castillo, J. S., Xavier da Silveira dos Santos, A., Yu, Q., Noser, P., Fleck, J. S., Gjeta, B., Pavlinić, D., Picelli, S., Hess, M., Schmidt, G. W., Lummen, T. T. A., Hou, Y., Galliker, P., Goldblum, D., … Camp, J. G. (2023). [**Multimodal spatiotemporal phenotyping of human retinal organoid development.**](https://www.nature.com/articles/s41587-023-01747-2) Nature Biotechnology. https://doi.org/10.1038/s41587-023-01747-2


### Neuroscience

- [[code | Matlab]](https://github.com/linnarsson-lab/DG_paper_public) Hochgerner, H., Zeisel, A., Lönnerberg, P., and Linnarsson, S. (2018). **Conserved properties of dentate gyrus neurogenesis across postnatal development revealed by single-cell RNA sequencing.** Nat. Neurosci. 21.

- [[code | R]](https://github.com/alexandrotrevino/brainchromatin) Trevino, A. E. et al. [**Chromatin and gene-regulatory dynamics of the developing human cerebral cortex at single-cell resolution.**](https://www.biorxiv.org/content/10.1101/2020.12.29.424636v2) bioRxiv 2020.12.29.424636 (2021) doi:10.1101/2020.12.29.424636.

- [[code | R]](https://github.com/yuanbell/Single-cell-sequencing-of-subpallium) Yu, Y., Zeng, Z., Xie, D. et al. Interneuron origin and molecular diversity in the human fetal brain. Nat Neurosci (2021). https://doi.org/10.1038/s41593-021-00940-3

- [[code | R]](https://github.com/sestanlab/Cross-species-PFC-snRNA-seq) Ma, S., Skarica, M., Li, Q., Xu, C., Risgaard, R. D., Tebbenkamp, A. T. N., Mato-Blanco, X., Kovner, R., Krsnik, Ž., de Martin, X., Luria, V., Martí-Pérez, X., Liang, D., Karger, A., Schmidt, D. K., Gomez-Sanchez, Z., Qi, C., Gobeske, K. T., Pochareddy, S., … Sestan, N. (2022). [**Molecular and cellular evolution of the primate dorsolateral prefrontal cortex.**](https://www.science.org/doi/10.1126/science.abo7257) Science, eabo7257. https://doi.org/10.1126/science.abo7257

- [[code | R and Python]](https://github.com/quadbiolab/organoid_regulomes) Fleck, J. S., Jansen, S. M. J., Wollny, D., Zenk, F., Seimiya, M., Jain, A., Okamoto, R., Santel, M., He, Z., Camp, J. G., & Treutlein, B. (2022). [**Inferring and perturbing cell fate regulomes in human brain organoids.**](https://www.nature.com/articles/s41586-022-05279-8) Nature. https://doi.org/10.1038/s41586-022-05279-8

- [[code | R]](https://github.com/ListerLab/pfc_development/tree/vPublication) Herring, C. A., Simmons, R. K., Freytag, S., Poppe, D., Moffet, J. J. D., Pflueger, J., Buckberry, S., Vargas-Landin, D. B., Clément, O., Echeverría, E. G., Sutton, G. J., Alvarez-Franco, A., Hou, R., Pflueger, C., McDonald, K., Polo, J. M., Forrest, A. R. R., Nowak, A. K., Voineagu, I., … Lister, R. (2022). [**Human prefrontal cortex gene regulatory dynamics from gestation to adulthood at single-cell resolution.**](https://www.sciencedirect.com/science/article/pii/S0092867422012582) Cell. https://doi.org/https://doi.org/10.1016/j.cell.2022.09.039

### Immunology

- [[code | R]](https://github.com/dtm2451/ProgressiveHematopoiesis) Bunis, D. G. et al. [**Single-Cell Mapping of Progressive Fetal-to-Adult Transition in Human Naive T Cells.**](https://www.cell.com/cell-reports/fulltext/S2211-1247(20)31562-X) Cell Rep. 34, (2021).

### Human disease

- [[code | Python and R]](https://github.com/niklaslang/PCLS_perturbations) Lang, N. J., Gote-Schniering, J., Porras-Gonzalez, D., Yang, L., De Sadeleer, L. J., Jentzsch, R. C., Shitov, V. A., Zhou, S., Ansari, M., Agami, A., Mayr, C. H., Kashani, B. H., Chen, Y., Heumos, L., Pestoni, J. C., Geeraerts, E., Anquetil, V., Saniere, L., Wögrath, M., … Schiller, H. B. (2023). [**Ex vivo tissue perturbations coupled to single cell RNA-seq reveal multi-lineage cell circuit dynamics in human lung fibrogenesis.**](https://www.biorxiv.org/content/10.1101/2023.01.16.524219v1) BioRxiv, 2023.01.16.524219. https://doi.org/10.1101/2023.01.16.524219.

### scATAC-seq

- [[code | R, Python]](https://github.com/yal054/snATACutils) Li, Y.E., Preissl, S., Hou, X. et al. An atlas of gene regulatory elements in adult mouse cerebrum. Nature 598, 129–136 (2021). https://doi.org/10.1038/s41586-021-03604-1

### Spatial transcriptomics

- [[code | R]](https://github.com/saezlab/visium_heart/tree/master/snRNA_seq) Kuppe, C. et al. **Spatial multi-omic map of human myocardial infarction.** bioRxiv 2020.12.08.411686 (2020) doi:10.1101/2020.12.08.411686.

- [[code | Python and R]](https://github.com/Teichlab/HCA_Heart_ver2) Kanemaru, K., Cranley, J., Muraro, D., Miranda, A. M. A., Ho, S. Y., Wilbrey-Clark, A., Patrick Pett, J., Polanski, K., Richardson, L., Litvinukova, M., Kumasaka, N., Qin, Y., Jablonska, Z., Semprich, C. I., Mach, L., Dabrowska, M., Richoz, N., Bolt, L., Mamanova, L., … Teichmann, S. A. (2023). [**Spatially resolved multiomics of human cardiac niches.**](https://www.nature.com/articles/s41586-023-06311-1) Nature. https://doi.org/10.1038/s41586-023-06311-1

### Nanopore

- [[code | Perl, Shell and R]](https://github.com/ucagenomix/sicelore) Lebrigand, K., Magnone, V., Barbry, P. & Waldmann, R. [**High throughput error corrected Nanopore single cell transcriptome sequencing.**](https://www.nature.com/articles/s41467-020-17800-6) Nat. Commun. 11, 4025 (2020).

### Experimental research

- [[code | R]](https://github.com/tgen/banovichlab) Habermann A, Gutierrez A, Bui L, Yahn S, Winters N, Calvi C, et al. **Single-cell RNA sequencing reveals profibrotic roles of distinct epithelial and mesenchymal lineages in pulmonary fibrosis.** Sci Adv 2020;6:eaba1972. https://doi.org/10.1101/753806.

- [[code | R]](https://github.com/marzamKI/neurogenic_astros) Zamboni, M., Llorens-Bobadilla, E., Magnusson, J.P., and Frisén, J. (2020). **A Widespread Neurogenic Potential of Neocortical Astrocytes Is Induced by Injury.** Cell Stem Cell 1–13.

- [[code | Python]](https://github.com/linnarsson-lab/ipynb-lamanno2016) La Manno, G., Gyllborg, D., Codeluppi, S., Nishimura, K., Salto, C., Zeisel, A., Borm, L.E., Stott, S.R.W., Toledo, E.M., Villaescusa, J.C., et al. (2016). **Molecular Diversity of Midbrain Development in Mouse, Human, and Stem Cells.** Cell 167, 566-580.e19.

- [[code | R]](https://github.com/klarman-cell-observatory/ivPerturbSeq) Jin, X. et al. **In vivo Perturb-Seq reveals neuronal and glial abnormalities associated with autism risk genes.** Science 370, eaaz6063 (2020).

### Benchmark study

- [[code | R]](https://github.com/oxwang/fda_scRNA-seq) Chen, W. et al. [**A multicenter study benchmarking single-cell RNA sequencing technologies using reference samples.**](https://www.nature.com/articles/s41587-020-00748-9) Nat. Biotechnol. (2020) doi:10.1038/s41587-020-00748-9.

### Trajectory analysis

- [[code | Python]](https://github.com/rajewsky-lab/planarian_lineages) Plass, M., Solana, J., Alexander Wolf, F., Ayoub, S., Misios, A., Glažar, P., Obermayer, B., Theis, F.J., Kocks, C., and Rajewsky, N. (2018). **Cell type atlas and lineage tree of a whole complex animal by single-cell transcriptomics.** Science. 360.

### Visualization

- [[code]](https://github.com/faryabib/NatMethods_TooManyCells_analysis) Schwartz GW, Zhou Y, Petrovic J, Fasolino M, Xu L, Shaffer SM, et al. **TooManyCells identifies and visualizes relationships of single-cell clades.** Nat Methods 2020. https://doi.org/10.1038/s41592-020-0748-5.











