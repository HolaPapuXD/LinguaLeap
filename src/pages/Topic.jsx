import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { levels } from '../data/levels';
import '../styles/Topic.css';

const Topic = () => {
  const { levelId, topicId } = useParams();
  const level = levels.find(l => l.id === levelId);
  const topic = level?.topics.find(t => t.id === topicId);

  if (!topic) {
    return (
      <div className="topic-page">
        <div className="topic-header">
          <h1>Topic Not Found</h1>
          <p>The topic you're looking for doesn't exist.</p>
          <Link to="/levels" className="btn btn-primary">
            Back to Levels
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="topic-page">
      <div className="topic-header">
        <Link to={`/level/${levelId}`} className="back-button">
          <i className="bx bx-arrow-back"></i>
          Back to {level.name}
        </Link>
        <h1>{topic.title}</h1>
        <p>{topic.description}</p>
      </div>

      <div className="topic-content">
        <div className="learning-methods">
          <h2>Learning Methods</h2>
          <div className="methods-grid">
            {topic.learningMethods.map((method) => (
              <Link
                key={method.id}
                to={`/level/${levelId}/topic/${topicId}/method/${method.id}`}
                className="method-card"
              >
                <div className="method-icon">
                  <i className={`bx ${method.icon}`}></i>
                </div>
                <h3>{method.name}</h3>
                <p>{method.description}</p>
                <div className="method-stats">
                  <span>
                    <i className="bx bx-time"></i>
                    {method.duration}
                  </span>
                  <span>
                    <i className="bx bx-book"></i>
                    {method.exercises.length} exercises
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic; 