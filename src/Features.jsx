import React from 'react';
import './Features.css'; // Create FeaturesSection.css for styling

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <div className="feature">
        <h2>Interactive Lessons</h2>
        <p>Engage with well-structured lessons designed to enhance understanding.</p>
      </div>
      <div className="feature">
        <h2>Gamified Learning Experience</h2>
        <p>Learn through games designed to make education fun and interactive.</p>
      </div>
      <div className="feature">
        <h2>Progress Tracking</h2>
        <p>Track your learning progress and achievements over time.</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
