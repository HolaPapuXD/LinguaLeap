import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Levels from './pages/Levels';
import Level from './pages/Level';
import Topic from './pages/Topic';
import LearningMethod from './pages/LearningMethod';
import Resources from './pages/Resources';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/levels" element={<Levels />} />
            <Route path="/level/:levelId" element={<Level />} />
            <Route path="/level/:levelId/topic/:topicId" element={<Topic />} />
            <Route path="/level/:levelId/topic/:topicId/method/:methodId" element={<LearningMethod />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="home-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>LinguaLeap</h3>
              <p>© LinguaLeap All Rights Reserved</p>
            </div>
            <div className="footer-social">
              <a href="https://web.facebook.com/sena.caqueta/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://x.com/SENACaqueta" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="https://www.instagram.com/senacomunica/" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;