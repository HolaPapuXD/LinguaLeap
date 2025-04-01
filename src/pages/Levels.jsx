import React from 'react';
import { Link } from 'react-router-dom';
import { levels } from '../data/levels';
import '../styles/Levels.css';

const Levels = () => {
  return (
    <div className="levels-page">
      <div className="levels-header">
        <h1>Choose Your Level</h1>
        <p>Select the level that best matches your current English proficiency</p>
      </div>

      <div className="levels-grid">
        {levels.map((level) => (
          <Link to={`/level/${level.id}`} key={level.id} className="level-card">
            <div className="level-icon">
              <i className={`bx ${level.icon}`}></i>
            </div>
            <h3>{level.name}</h3>
            <p>{level.description}</p>
            <div className="level-topics">
              <h4>Topics Covered:</h4>
              <ul>
                {level.topics.slice(0, 3).map((topic, index) => (
                  <li key={index}>{topic.title}</li>
                ))}
                {level.topics.length > 3 && (
                  <li className="more-topics">+{level.topics.length - 3} more</li>
                )}
              </ul>
            </div>
          </Link>
        ))}
      </div>

      <div className="levels-info">
        <div className="info-section">
          <h2>Why Choose LinguaLeap?</h2>
          <div className="info-grid">
            <div className="info-card">
              <i className="bx bx-book-content"></i>
              <h3>Structured Learning</h3>
              <p>Clear and organized lessons from basic to advanced levels with detailed explanations in Spanish</p>
            </div>
            <div className="info-card">
              <i className="bx bx-check-circle"></i>
              <h3>Interactive Exercises</h3>
              <p>Practice with multiple-choice exercises and immediate feedback to reinforce your learning</p>
            </div>
            <div className="info-card">
              <i className="bx bx-library"></i>
              <h3>Comprehensive Resources</h3>
              <p>Access a wide variety of exercises covering grammar, vocabulary, pronunciation, and business English</p>
            </div>
            <div className="info-card">
              <i className="bx bx-navigation"></i>
              <h3>Easy to Follow</h3>
              <p>Simple and intuitive interface that lets you focus on learning at your own pace</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Levels; 