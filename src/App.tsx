/**
 * ============================================
 * APP COMPONENT - ROOT
 * ============================================
 */

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  // Ajusta basename para funcionar em subpath (GitHub Pages /portfolio/)
  const base = import.meta.env.BASE_URL || '/';
  return (
    <BrowserRouter basename={base}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
