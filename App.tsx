
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LabsPage from './pages/LabsPage';
import DataPage from './pages/DataPage';
import PapersPage from './pages/PapersPage';
import FaqsPage from './pages/FaqsPage';
import InstructorPage from './pages/InstructorPage';
import PipelinePage from './pages/PipelinePage';
import ResourcesPage from './pages/ResourcesPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-brand-light text-brand-dark font-serif leading-relaxed">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/labs" element={<LabsPage />} />
            <Route path="/data" element={<DataPage />} />
            <Route path="/papers" element={<PapersPage />} />
            <Route path="/pipeline" element={<PipelinePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/instructor" element={<InstructorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;