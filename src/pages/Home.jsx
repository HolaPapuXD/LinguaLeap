import React from 'react';
import { Link } from 'react-router-dom';
import { levels } from '../data/levels';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>LinguaLeap</h1>
          <p className="hero-subtitle">Your Path to English Excellence</p>
          <p className="hero-description">Join our comprehensive English learning platform designed by SENA instructors. Master grammar, speaking, and writing with our structured curriculum.</p>
          <div className="hero-buttons">
            <Link to="/levels" className="btn btn-primary">
              Begin Learning
              <i className="bx bx-right-arrow-alt"></i>
            </Link>
            <Link to="/resources" className="btn btn-secondary">
              Free Resources
            </Link>
          </div>
          <div className="hero-features">
            <div className="feature-item">
              <i className="bx bx-check-circle"></i>
              <span>Grammar & Vocabulary</span>
            </div>
            <div className="feature-item">
              <i className="bx bx-check-circle"></i>
              <span>Speaking Practice</span>
            </div>
            <div className="feature-item">
              <i className="bx bx-check-circle"></i>
              <span>Writing Skills</span>
            </div>
          </div>
        </div>
      </section>

      <section className="levels-section">
        <div className="section-header">
          <h2>English Learning Levels</h2>
          <p>Follow our structured curriculum designed by SENA instructors</p>
        </div>
        <div className="levels-grid">
          <div className="level-card">
            <div className="level-icon">
              <i className="bx bxs-bulb"></i>
            </div>
            <h3>Beginner (A1)</h3>
            <p>Start with basic greetings, numbers, and simple present tense. Perfect for those just starting their English journey.</p>
            <Link to="/level/a1" className="learn-more">
              View Content <i className="bx bx-right-arrow-alt"></i>
            </Link>
          </div>
          <div className="level-card">
            <div className="level-icon">
              <i className="bx bxs-graduation"></i>
            </div>
            <h3>Elementary (A2)</h3>
            <p>Learn past tense, daily routines, and basic conversations. Build your confidence in everyday situations.</p>
            <Link to="/level/a2" className="learn-more">
              View Content <i className="bx bx-right-arrow-alt"></i>
            </Link>
          </div>
          <div className="level-card">
            <div className="level-icon">
              <i className="bx bxs-book-content"></i>
            </div>
            <h3>Intermediate (B1)</h3>
            <p>Master present perfect, conditionals, and complex sentences. Express yourself more fluently.</p>
            <Link to="/level/b1" className="learn-more">
              View Content <i className="bx bx-right-arrow-alt"></i>
            </Link>
          </div>
          <div className="level-card">
            <div className="level-icon">
              <i className="bx bxs-award"></i>
            </div>
            <h3>Advanced (B2)</h3>
            <p>Perfect your grammar, expand vocabulary, and develop academic writing skills.</p>
            <Link to="/level/b2" className="learn-more">
              View Content <i className="bx bx-right-arrow-alt"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2>Why Choose LinguaLeap?</h2>
          <p>Experience the future of language learning</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="bx bx-book-content"></i>
            </div>
            <h3>Structured Learning</h3>
            <p>Clear and organized lessons from basic to advanced levels with detailed explanations in Spanish</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="bx bx-check-circle"></i>
            </div>
            <h3>Interactive Exercises</h3>
            <p>Practice with multiple-choice exercises and immediate feedback to reinforce your learning</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="bx bx-library"></i>
            </div>
            <h3>Comprehensive Resources</h3>
            <p>Access a wide variety of exercises covering grammar, vocabulary, pronunciation, and business English</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-header">
          <h2>Start Your Learning Journey Today</h2>
          <p>Explore our free resources and take the first step towards English fluency</p>
        </div>
        <div className="cta-buttons">
          <Link to="/levels" className="btn btn-primary">
            Explore Levels
          </Link>
          <Link to="/resources" className="btn btn-secondary">
            View Resources
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 