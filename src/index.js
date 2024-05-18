import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Register from './components/Register';
import PropertyList from './components/PropertyList';
import './index.css'

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/properties" element={<PropertyList />} />
    </Routes>
  </Router>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root />);
