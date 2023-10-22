import React from 'react';
import './CustomPlayer.css';
import { FaPlay, FaVolumeUp } from 'react-icons/fa';

function CustomPlayer() {
  return (
    <div className="custom-player">
      <button className="play-pause-button">
        <FaPlay size={30} />
      </button>
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>
      <div className="volume-container">
        <button className="volume-button">
          <FaVolumeUp size={30} />
        </button>
            <input type="range" className="volume-slider" min="0" max="100" value="100" />
      </div>
      <div className="time-display">
        00:00 / 00:00
      </div>
    </div>
  );
}

export default CustomPlayer;
