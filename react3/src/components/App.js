import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './Inicio';
import Blog from './Blog';
import Tienda from './Tienda';

function App() {
  console.log('App component rendered');
  return (
    <BrowserRouter>
    <h1>Prueba</h1>
      <div className="app">
        <nav className="navbar">
          <Link to="/">Inicio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/tienda">Tienda</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tienda" element={<Tienda />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;