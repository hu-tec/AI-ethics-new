import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import AboutEthics from './pages/AboutEthics';
import Applications from './pages/Applications';
import Services from './pages/Services';
import MarketResearch from './pages/MarketResearch';
import AboutHutec from './pages/AboutHutec';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutEthics />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/services" element={<Services />} />
          <Route path="/market-research" element={<MarketResearch />} />
          <Route path="/about-hutec" element={<AboutHutec />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
