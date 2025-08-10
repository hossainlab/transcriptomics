
import React from 'react';

const DataPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <header className="bg-brand-light border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-brand-primary">Datasets</h1>
            <p className="mt-4 text-xl text-brand-secondary">Access all the data used throughout the course for your analysis.</p>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose lg:prose-xl max-w-none text-brand-secondary">
            <p>This page provides access to all the datasets used in the lectures, labs, and assignments. All data is publicly available and has been curated for educational purposes. We provide direct download links as well as accession numbers for original sources where applicable.</p>
            
            <h2>Core Datasets</h2>
            
            <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-sans font-bold text-gray-600 uppercase tracking-wider">Dataset Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-sans font-bold text-gray-600 uppercase tracking-wider">Description</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-sans font-bold text-gray-600 uppercase tracking-wider">Download</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 font-semibold">Human Brain Bulk RNA-Seq</td>
                            <td className="px-6 py-4">A foundational dataset for learning bulk RNA-seq analysis pipelines. Used in Modules 5, 7, 8, 9.</td>
                            <td className="px-6 py-4 whitespace-nowrap"><a href="#" className="text-brand-accent hover:underline font-sans font-semibold">Link (Coming Soon)</a></td>
                        </tr>
                         <tr>
                            <td className="px-6 py-4 font-semibold">10X PBMC Single-Cell</td>
                            <td className="px-6 py-4">A public 10X Genomics dataset of peripheral blood mononuclear cells. Used in Modules 6, 10-13.</td>
                            <td className="px-6 py-4 whitespace-nowrap"><a href="#" className="text-brand-accent hover:underline font-sans font-semibold">Link (Coming Soon)</a></td>
                        </tr>
                         <tr>
                            <td className="px-6 py-4 font-semibold">Mouse Brain Spatial</td>
                            <td className="px-6 py-4">A Visium spatial transcriptomics dataset of the mouse brain. Used in Module 14.</td>
                            <td className="px-6 py-4 whitespace-nowrap"><a href="#" className="text-brand-accent hover:underline font-sans font-semibold">Link (Coming Soon)</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Data Usage Policy</h2>
            <p>All datasets provided are for educational purposes only within the context of this course. If you plan to use this data for your own publications, please refer to the original source and cite it appropriately.</p>
        </div>
      </div>
    </div>
  );
};

export default DataPage;