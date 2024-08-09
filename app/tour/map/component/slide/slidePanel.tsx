import React from 'react';
import './SlidePanel.css';

const SlidePanel: React.FC<SlidePanelProps> = ({ isVisible, content, onClose } ) => {
  return (
    <div className={`slide-panel ${isVisible ? 'visible' : ''}`}>
      <div className="panel-content">
        <p>{content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

interface SlidePanelProps {
    isVisible: boolean;
    content: React.ReactNode; 
    onClose: () => void;
  }

export default SlidePanel;