import React, { useState } from 'react';
import Products from './components/Products';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About'; 
import Gallery from './components/Gallery';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app-container">
      <Header
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      {isMenuOpen && <Nav />}
      <main>
        <Home />
         <About /> 
        <Products /> 
         <Gallery /> {}
      </main>
    </div>
  );
}
export default App;
