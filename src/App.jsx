// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import ServiceAreas from './pages/ServiceAreas';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />

          {/* 6 Dedicated Service Pages */}
          <Route path="ac-repair" element={<ServiceDetail />} />
          <Route path="refrigerator-repair" element={<ServiceDetail />} />
          <Route path="washing-machine-repair" element={<ServiceDetail />} />
          <Route path="microwave-repair" element={<ServiceDetail />} />
          <Route path="clothes-dryer-repair" element={<ServiceDetail />} />
          <Route path="dishwasher-repair" element={<ServiceDetail />} />

          {/* Business & Information Pages */}
          <Route path="about" element={<About />} />
          <Route path="service-areas" element={<ServiceAreas />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;