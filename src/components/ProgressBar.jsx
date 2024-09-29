import React from 'react';
import '../css/ProgressBar.css';

const ProgressBar = ({ value }) => {
  // Ensure the value is between 0 and 1
  const progress = Math.min(Math.max(value, 0), 1);

  // Calculate dynamic color based on the progress (from red to green)
  const getProgressColor = (progress) => {
    const red = Math.min(255, (1 - progress) * 255);
    const green = Math.min(255, progress * 255);
    return `rgb(${red}, ${green}, 0)`;
  };

  return (
    // Only show progress bar when the value is greater than 0
    <div className={`progress-bar-container ${progress === 0 ? 'hidden' : ''}`}>
      <div
        className="progress-bar-fill"
        style={{
          width: `${progress * 100}%`,
          backgroundColor: getProgressColor(progress),
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
