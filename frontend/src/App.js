import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Startsida from './pages/Startsida';
import VerifieraMeddelande from './pages/VerifieraMeddelande';
import AIBedrageriskydd from './pages/AIBedrageriskydd';
import BlogBedrageriguide2025 from './pages/BlogBedrageriguide2025';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Startsida />} />
          <Route path="/verifiera-meddelande" element={<VerifieraMeddelande />} />
          <Route path="/ai-bedrageriskydd" element={<AIBedrageriskydd />} />
          <Route path="/blog/hur-kanner-man-igen-bedragare-online-2025" element={<BlogBedrageriguide2025 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;