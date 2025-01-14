import React from 'react';


function Popup({ message, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <p>{message}</p>
        <button onClick={onClose} className="popup-close-btn">
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
