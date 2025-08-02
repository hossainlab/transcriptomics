
import React from 'react';
import {
  ScatterChart, Scatter, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ZAxis, Label, ReferenceLine
} from 'recharts';

// Container for each chart
const ChartContainer = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-100 flex flex-col">
    <h4 className="text-xl font-semibold text-center mb-4 text-brand-dark">{title}</h4>
    <div className="w-full flex-grow" style={{ minHeight: '350px' }}>
        {children}
    </div>
  </div>
);

// --- Data Generation ---

const volcanoData = Array.from({ length: 300 }, () => {
  const log2FC = (Math.random() - 0.5) * 8;
  const pvalue = Math.pow(10, -Math.random() * 8);
  const negLog10P = -Math.log10(pvalue);
  let group = 'Not Significant';
  if (pvalue < 0.05 && Math.abs(log2FC) > 1) {
    group = log2FC > 1 ? 'Upregulated' : 'Downregulated';
  }
  return { log2FC, pvalue, negLog10P, group };
});
const volcanoColors = { Upregulated: '#E53E3E', Downregulated: '#3B82F6', 'Not Significant': '#CBD5E0' };

const pcaData = [
  { pc1: -2.5, pc2: 1.5, group: 'Control' }, { pc1: -2.8, pc2: 1.2, group: 'Control' },
  { pc1: -2.2, pc2: 1.8, group: 'Control' }, { pc1: 2.6, pc2: -1.7, group: 'Treated' },
  { pc1: 2.9, pc2: -1.4, group: 'Treated' }, { pc1: 2.3, pc2: -1.9, group: 'Treated' },
];

const umapClusters = {
    'CD4+ T-cells': { center: { x: 5, y: 6 }, color: '#00C49A' },
    'CD8+ T-cells': { center: { x: -4, y: 3 }, color: '#1A2A4D' },
    'B-cells': { center: { x: -3, y: -5 }, color: '#FF8042' },
    'Monocytes': { center: { x: 6, y: -4 }, color: '#FFBB28' },
};
const umapData = Object.entries(umapClusters).flatMap(([name, {center, color}]) =>
    Array.from({ length: 50 }, () => ({
        umap1: center.x + (Math.random() - 0.5) * 4,
        umap2: center.y + (Math.random() - 0.5) * 4,
        cluster: name,
        fill: color
    }))
);

const qcScatterData = Array.from({ length: 200 }, () => ({
    features: 500 + Math.random() * 2000,
    counts: 1000 + Math.random() * 8000
}));

const goData = [
  { name: 'Immune Response', p: 1e-12, count: 45 }, { name: 'Cell Adhesion', p: 1e-10, count: 32 },
  { name: 'Signal Transduction', p: 1e-9, count: 56 }, { name: 'Inflammatory Response', p: 1e-8, count: 28 },
  { name: 'Cell Proliferation', p: 1e-7, count: 61 },
].map(d => ({ ...d, negLog10P: -Math.log10(d.p) })).sort((a,b) => a.negLog10P - b.negLog10P);

// --- Chart Components ---

const VolcanoPlot = () => (
    <ResponsiveContainer>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="number" dataKey="log2FC" name="log2 Fold Change">
                 <Label value="log2 Fold Change" offset={-15} position="insideBottom" />
            </XAxis>
            <YAxis type="number" dataKey="negLog10P" name="-log10 p-value">
                 <Label value="-log10(p-value)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <ReferenceLine x={1} stroke="#A0AEC0" strokeDasharray="3 3" />
            <ReferenceLine x={-1} stroke="#A0AEC0" strokeDasharray="3 3" />
            <ReferenceLine y={-Math.log10(0.05)} stroke="#A0AEC0" strokeDasharray="3 3">
                 <Label value="p=0.05" position="right" fontSize="10" fill="#A0AEC0" />
            </ReferenceLine>
            {Object.keys(volcanoColors).map(group => (
                 <Scatter key={group} name={group} data={volcanoData.filter(d => d.group === group)} fill={volcanoColors[group]} shape="circle" />
            ))}
        </ScatterChart>
    </ResponsiveContainer>
);

const PcaPlot = () => (
    <ResponsiveContainer>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="number" dataKey="pc1" name="PC1"><Label value="PC1 (35%)" offset={-15} position="insideBottom" /></XAxis>
            <YAxis type="number" dataKey="pc2" name="PC2"><Label value="PC2 (18%)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} /></YAxis>
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend verticalAlign="top" />
            <Scatter name="Control" data={pcaData.filter(d => d.group === 'Control')} fill="#1A2A4D" />
            <Scatter name="Treated" data={pcaData.filter(d => d.group === 'Treated')} fill="#00C49A" />
        </ScatterChart>
    </ResponsiveContainer>
);

const Heatmap = () => {
  const genes = ['Gene A', 'Gene B', 'Gene C', 'Gene D', 'Gene E', 'Gene F', 'Gene G', 'Gene H'];
  const samples = ['Ctrl 1', 'Ctrl 2', 'Ctrl 3', 'Trt 1', 'Trt 2', 'Trt 3'];
  const data = [
    [0.1,0.15,0.2,0.8,0.9,0.85],[0.2,0.25,0.1,0.7,0.75,0.8],[0.15,0.1,0.2,0.85,0.8,0.9],
    [0.05,0.1,0.15,0.9,0.95,0.9],[0.9,0.8,0.85,0.1,0.15,0.2],[0.85,0.9,0.8,0.2,0.1,0.15],
    [0.8,0.85,0.9,0.15,0.2,0.1],[0.95,0.9,0.85,0.05,0.1,0.15]
  ];
  const lowColor = { r: 248, g: 249, b: 250 }, highColor = { r: 26, g: 42, b: 77 }; // light to primary
  const getColor = v => `rgb(${lowColor.r+(highColor.r-lowColor.r)*v},${lowColor.g+(highColor.g-lowColor.g)*v},${lowColor.b+(highColor.b-lowColor.b)*v})`;

  return (
    <div className="flex flex-col h-full justify-center">
        <div className="flex text-xs font-mono">
            <div className="flex flex-col justify-around text-right pr-2">
                {genes.map(g => <div key={g} className="flex-grow flex items-center">{g}</div>)}
            </div>
            <div className="flex-grow">
                <div className="flex justify-around text-center">
                    {samples.map(s => <div key={s} className="transform -rotate-45 h-10 w-4">{s}</div>)}
                </div>
                <div className="grid grid-cols-6 gap-0.5 mt-1 border border-gray-200">
                    {data.flat().map((val, i) => <div key={i} className="w-full aspect-square" style={{ backgroundColor: getColor(val) }}></div>)}
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4 text-xs font-mono">
            <span>Low</span>
            <div className="w-24 h-4 rounded" style={{ background: 'linear-gradient(to right, rgb(248, 249, 250), rgb(26, 42, 77))' }}></div>
            <span>High</span>
        </div>
    </div>
  );
};

const UmapPlot = () => (
    <ResponsiveContainer>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="number" dataKey="umap1" name="UMAP_1" tick={{fontSize: 10}}><Label value="UMAP_1" offset={-15} position="insideBottom" /></XAxis>
            <YAxis type="number" dataKey="umap2" name="UMAP_2" tick={{fontSize: 10}}><Label value="UMAP_2" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} /></YAxis>
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend iconSize={10} wrapperStyle={{fontSize: "12px"}} verticalAlign="top"/>
            {Object.keys(umapClusters).map(cluster => (
                 <Scatter key={cluster} name={cluster} data={umapData.filter(d => d.cluster === cluster)} fill={umapClusters[cluster].color} />
            ))}
        </ScatterChart>
    </ResponsiveContainer>
);

const QcScatterPlot = () => (
    <ResponsiveContainer>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="number" dataKey="features" name="nFeature_RNA" domain={[0, 3000]}><Label value="nFeature_RNA" offset={-15} position="insideBottom" /></XAxis>
            <YAxis type="number" dataKey="counts" name="nCount_RNA" domain={[0, 10000]}><Label value="nCount_RNA" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} /></YAxis>
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={qcScatterData} fill="#1A2A4D" fillOpacity={0.6} shape="circle" />
        </ScatterChart>
    </ResponsiveContainer>
);

const GoPlot = () => (
    <ResponsiveContainer>
        <BarChart data={goData} layout="vertical" margin={{ top: 5, right: 20, left: 130, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number"><Label value="-log10(p-value)" offset={-15} position="insideBottom" /></XAxis>
            <YAxis type="category" dataKey="name" width={120} tick={{fontSize: 11}}/>
            <Tooltip />
            <Bar dataKey="negLog10P" name="-log10(p-value)" fill="#00C49A" />
        </BarChart>
    </ResponsiveContainer>
);


// Main component
const ShowcaseCharts = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <ChartContainer title="Volcano Plot"><VolcanoPlot /></ChartContainer>
            <ChartContainer title="Principal Component Analysis"><PcaPlot /></ChartContainer>
            <ChartContainer title="Clustered Heatmap"><Heatmap /></ChartContainer>
            <ChartContainer title="Single-Cell UMAP"><UmapPlot /></ChartContainer>
            <ChartContainer title="QC Metrics per Cell"><QcScatterPlot /></ChartContainer>
            <ChartContainer title="GO Enrichment Analysis"><GoPlot /></ChartContainer>
        </div>
    )
}

export default ShowcaseCharts;
