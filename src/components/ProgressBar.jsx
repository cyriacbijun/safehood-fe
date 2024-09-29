import React from 'react';
import '../css/ProgressBar.css';

const ProgressBar = ({ value }) => {
    // Ensure value is within 1-100 range
    const progress = Math.min(Math.max(value, 1), 100);
  
    // Get category based on progress value
    const getCategory = (progress) => {
      if (progress <= 33) {
        return 'not-safe';
      } else if (progress <= 66) {
        return 'moderate';
      } else {
        return 'safe';
      }
    };
  
    const category = getCategory(progress);
  
    return (
      <div className="progress-bar-container">
        <div
          className={`progress-bar-fill ${category}`}
          style={{
            width: `${progress}%`,
          }}
        ></div>
        <span className="progress-text">{category.replace('-', ' ')}</span>
      </div>
    );
  };
  
  export default ProgressBar;