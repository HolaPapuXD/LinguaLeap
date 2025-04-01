import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { levels } from '../data/levels';
import '../styles/Level.css';

function Level() {
  const { levelId } = useParams();
  const level = levels.find(l => l.id === levelId);

  if (!level) {
    return <div className="error">Level not found</div>;
  }

  return (
    <div className="level-page">
      <div className="level-header">
        <h1><i className={`bx ${level.icon}`}></i> {level.name}</h1>
        <p>{level.description}</p>
      </div>

      <div className="topics-grid">
        {level.topics.map((topic) => (
          <Link 
            to={`/level/${levelId}/topic/${topic.id}`} 
            key={topic.id} 
            className="topic-card"
          >
            <div className="topic-content">
              <i className={`bx ${topic.icon}`}></i>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <div className="lessons-preview">
                {topic.learningMethods ? (
                  topic.learningMethods.slice(0, 2).map((method, index) => (
                    <span key={index} className="lesson-tag">{method.name}</span>
                  ))
                ) : topic.lessons ? (
                  topic.lessons.slice(0, 2).map((lesson, index) => (
                    <span key={index} className="lesson-tag">{lesson}</span>
                  ))
                ) : null}
                {topic.learningMethods && topic.learningMethods.length > 2 && (
                  <span className="lesson-tag">+{topic.learningMethods.length - 2} more</span>
                )}
                {topic.lessons && topic.lessons.length > 2 && (
                  <span className="lesson-tag">+{topic.lessons.length - 2} more</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Level; 