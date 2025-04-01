import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Meet the team behind LinguaLeap</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            LinguaLeap is a project developed by students from SENA Caquetá, 
            focused on creating an innovative platform for English language learning. 
            Our goal is to make English education accessible, interactive, and engaging 
            for everyone.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <img src="/assets/images/team/angel.jpg" alt="Angel" />
              </div>
              <h3>Angel Felipe Perez Serrato</h3>
              <p>Full Stack Developer</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src="/assets/images/team/juan.jpg" alt="Juan" />
              </div>
              <h3>Juan Sebastian Lozada Ceballos</h3>
              <p>Full Stack Developer</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src="/assets/images/team/jesus.jpg" alt="Jesus" />
              </div>
              <h3>Jesus Manuel Joven Cordoba</h3>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We believe in the power of technology to transform education. 
            Our mission is to provide a comprehensive and engaging platform 
            that helps users master English through interactive exercises, 
            personalized learning paths, and immediate feedback.
          </p>
        </div>

        <div className="about-section">
          <h2>Institution</h2>
          <div className="institution-info">
            <img src="/assets/images/logoSena.png" alt="SENA Logo" className="sena-logo" />
            <p>
              This project is developed as part of our training at SENA Caquetá, 
              where we combine theoretical knowledge with practical experience 
              to create innovative solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="about-cta">
        <h2>Ready to Start Learning?</h2>
        <p>Join us on your journey to English fluency</p>
        <Link to="/levels" className="btn btn-primary">
          Start Learning
        </Link>
      </div>
    </div>
  );
}

export default About; 