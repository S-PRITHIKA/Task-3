// import Chat from './components/Chat.jsx';

// function App() {
//   return (
//     <div>
//       <Chat userId="user1" receiverId="user2" />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Chat from './components/Chat.jsx';
import './App.css'; // Make sure this has the styles we discussed

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <div className="top-nav">
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>

      {/* Main Section */}
      <main className="main-content">
        <h1 className="title">Glow and Glam</h1>
        <p className="subtitle">Explore our latest beauty collections.</p>

        {/* Chat Component */}
        <Chat userId="user1" receiverId="user2" />
      </main>

      
      <footer className="site-footer">

    <p>&copy; {new Date().getFullYear()} <strong>Glow and Glam</strong>. All rights reserved.</p>
    <p>
      Designed with 💖 by <a href="https://www.codveda.com" target="_blank" rel="noopener noreferrer">Codveda Technologies</a>
    </p>
    <p>Follow us on:
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a> |
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> |
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>
    </p>
  
</footer>

    </div>
  );
}

export default App;
