import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Products from './components/Products';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import Chat from './components/Chat';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app-container">
      <Header onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
      {isMenuOpen && <Nav />}

    
      <nav className="top-nav">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Products />
                <Gallery />
                <Testimonial />
                <Chat />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

     <footer className="site-footer">

    <p>&copy; {new Date().getFullYear()} <strong>Glow and Glam</strong>. All rights reserved.</p>
    <p>
      Designed with 💖</p>
    <p>Follow us on:<br></br>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a> |
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> |
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>
    </p>
  
</footer>
    </div>
  );
}

export default App;
