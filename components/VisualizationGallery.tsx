import React, { useState } from 'react';

interface VisualizationItem {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  category: 'bulk' | 'single-cell';
  type: string;
}

const VISUALIZATION_DATA: VisualizationItem[] = [
  // Bulk RNA-seq visualizations
  {
    id: 'volcano-plot',
    title: 'Volcano Plot',
    description: 'Visualize differential gene expression with statistical significance',
    imagePath: '/images/bulk/volcano_plot-1.png',
    category: 'bulk',
    type: 'Differential Expression'
  },
  {
    id: 'ma-plot',
    title: 'MA Plot',
    description: 'Display log-fold changes vs mean expression levels',
    imagePath: '/images/bulk/ma_plot-1.png',
    category: 'bulk',
    type: 'Differential Expression'
  },
  {
    id: 'heatmap-bulk',
    title: 'Expression Heatmap',
    description: 'Show hierarchical clustering and expression patterns',
    imagePath: '/images/bulk/heatmap_plot-1.png',
    category: 'bulk',
    type: 'Clustering'
  },
  {
    id: 'pca-bulk',
    title: 'PCA Plot',
    description: 'Principal component analysis for sample relationships',
    imagePath: '/images/bulk/pca_plot-1.png',
    category: 'bulk',
    type: 'Dimensionality Reduction'
  },
  {
    id: 'go-enrichment',
    title: 'GO Enrichment',
    description: 'Gene Ontology functional enrichment analysis',
    imagePath: '/images/bulk/go_enrich-1.png',
    category: 'bulk',
    type: 'Functional Analysis'
  },
  {
    id: 'kegg-pathway',
    title: 'KEGG Pathways',
    description: 'Pathway enrichment and biological processes',
    imagePath: '/images/bulk/kegg_enrich-1.png',
    category: 'bulk',
    type: 'Functional Analysis'
  },
  
  // Single-cell RNA-seq visualizations
  {
    id: 'umap-clusters',
    title: 'UMAP Clustering',
    description: 'Cell clustering and dimensionality reduction visualization',
    imagePath: '/images/single-cell/tsne_umap_cluster.png',
    category: 'single-cell',
    type: 'Clustering'
  },
  {
    id: 'feature-plots',
    title: 'Feature Plots',
    description: 'Gene expression overlaid on UMAP coordinates',
    imagePath: '/images/single-cell/featureplot_vlnplot_examples.png',
    category: 'single-cell',
    type: 'Gene Expression'
  },
  {
    id: 'violin-plots',
    title: 'Violin Plots',
    description: 'Quality control metrics and gene expression distributions',
    imagePath: '/images/single-cell/vlnplot_QC.png',
    category: 'single-cell',
    type: 'Quality Control'
  },
  {
    id: 'heatmap-markers',
    title: 'Marker Gene Heatmap',
    description: 'Top marker genes for each cell cluster',
    imagePath: '/images/single-cell/heatmap_clmarkers.png',
    category: 'single-cell',
    type: 'Marker Analysis'
  },
  {
    id: 'integration',
    title: 'Dataset Integration',
    description: 'Batch correction and dataset integration using Seurat',
    imagePath: '/images/single-cell/umap_seurat_datasets.png',
    category: 'single-cell',
    type: 'Integration'
  },
  {
    id: 'trajectory',
    title: 'Trajectory Analysis',
    description: 'Pseudotime and developmental trajectories',
    imagePath: '/images/single-cell/scvelo_DS1_scvelo_stream.png',
    category: 'single-cell',
    type: 'Trajectory'
  }
];

const VisualizationGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bulk' | 'single-cell'>('all');
  const [selectedImage, setSelectedImage] = useState<VisualizationItem | null>(null);

  const filteredVisualizations = selectedCategory === 'all' 
    ? VISUALIZATION_DATA 
    : VISUALIZATION_DATA.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Category Filter */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-xl p-1 flex space-x-1">
          {[
            { key: 'all', label: 'All Charts' },
            { key: 'bulk', label: 'Bulk RNA-seq' },
            { key: 'single-cell', label: 'Single-Cell' }
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as any)}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                selectedCategory === key
                  ? 'bg-brand-accent text-white shadow-lg'
                  : 'text-brand-secondary hover:text-brand-dark'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVisualizations.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer group"
            onClick={() => setSelectedImage(item)}
          >
            {/* Image Container */}
            <div className="aspect-w-16 aspect-h-12 bg-gray-50 overflow-hidden">
              <img
                src={item.imagePath}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="flex items-center justify-center h-48 bg-gray-100 text-gray-500 rounded-lg">
                      <div class="text-center">
                        <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <p class="text-sm">Chart Preview<br>Coming Soon</p>
                      </div>
                    </div>`;
                  }
                }}
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  item.category === 'bulk' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-purple-100 text-purple-700'
                }`}>
                  {item.category === 'bulk' ? 'Bulk' : 'Single-Cell'}
                </span>
              </div>
              <p className="text-sm text-brand-secondary mb-2">{item.description}</p>
              <div className="text-xs text-brand-accent font-semibold">
                {item.type}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-brand-dark">{selectedImage.title}</h3>
                  <p className="text-brand-secondary">{selectedImage.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              <img
                src={selectedImage.imagePath}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik02MCA4MEwxMDAuNTg2IDEyMC41ODZDMTA0LjM5MyAxMjQuMzkzIDEwNy42MDcgMTI0LjM5MyAxMTEuNDE0IDEyMC41ODZMMTU2IDc2TTEyMCA2MEwxMzUuNTg2IDc1LjU4NkMxMzkuMzkzIDc5LjM5MyAxNDIuNjA3IDc5LjM5MyAxNDYuNDE0IDc1LjU4NkwxODAgNDJNNjAgMzBIMTQwQzE0NS41MjMgMzAgMTUwIDM0LjQ3NzIgMTUwIDQwVjEzMEMxNTAgMTM1LjUyMyAxNDUuNTIzIDE0MCAxNDAgMTQwSDYwQzU0LjQ3NzIgMTQwIDUwIDEzNS41MjMgNTAgMTMwVjQwQzUwIDM0LjQ3NzIgNTQuNDc3MiAzMCA2MCAzMFoiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+';
                  target.alt = 'Image not available';
                }}
              />
              <div className="mt-4 flex items-center justify-between">
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  selectedImage.category === 'bulk' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-purple-100 text-purple-700'
                }`}>
                  {selectedImage.category === 'bulk' ? 'Bulk RNA-seq' : 'Single-Cell RNA-seq'}
                </span>
                <span className="text-sm text-brand-accent font-semibold">
                  {selectedImage.type}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualizationGallery;