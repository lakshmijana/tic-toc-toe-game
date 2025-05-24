import React from 'react';
import './HelpModal2.css';

const HelpModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="help-modal">
      <div className="help-content">
        <h2>How to Play Twisted Tic Tac Toe</h2>
        
        <div className="help-section">
          <h3>🎯 Objective</h3>
          <p>Be the first to get 3 of your emojis in a row (horizontally, vertically, or diagonally).</p>
        </div>

        <div className="help-section">
          <h3>🎮 Setup</h3>
          <p>Each player chooses a different emoji category. You'll get random emojis from your chosen category.</p>
        </div>

        <div className="help-section">
          <h3>📋 Rules</h3>
          <ul>
            <li>Players take turns placing emojis on the 3×3 grid</li>
            <li>Each player can only have 3 emojis on the board at once</li>
            <li>When you place your 4th emoji, your oldest emoji disappears</li>
            <li>You cannot place your new emoji where your oldest emoji was</li>
            <li>Win by getting 3 of your emojis in a line</li>
          </ul>
        </div>

        <div className="help-section">
          <h3>🔄 The Vanishing Rule</h3>
          <p>This is what makes the game twisted! Your oldest emoji vanishes when you place a 4th one, keeping the game dynamic and preventing draws.</p>
        </div>

        <div className="help-section">
          <h3>🎛️ Controls</h3>
          <ul>
            <li><strong>New Game:</strong> Start over with new category selection</li>
            <li><strong>Play Again:</strong> Replay with same categories</li>
            <li><strong>Help:</strong> Show this help screen</li>
          </ul>
        </div>

        <button className="control-btn" onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default HelpModal;