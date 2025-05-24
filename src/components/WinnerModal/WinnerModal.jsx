import React from 'react';
import { emojiCategories } from '../../utils/constants.js';
import './WinnerModal2.css';

const WinnerModal = ({
  show,
  winner,
  player1Category,
  player2Category,
  onPlayAgain,
  onResetGame,
  onClose
}) => {
  if (!show) return null;

  return (
    <div className="winner-celebration">
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="winner-message">
        <div className="hooray">🎉 HOORAY! 🎉</div>
        <div className="player-won">Player {winner} Wins!</div>
        <div className="celebration-emojis">
          {winner === 1 ? 
            emojiCategories[player1Category].slice(0, 3).join(' ') : 
            emojiCategories[player2Category].slice(0, 3).join(' ')
          }
        </div>
        <div className="victory-text">Fantastic Victory!</div>
        
        <div className="winner-modal-controls">
          <button className="control-btn play-again-btn" onClick={onPlayAgain}>
            🎮 Play Again
          </button>
          <button className="control-btn" onClick={onResetGame}>
            🔄 New Game
          </button>
          <button className="control-btn close-btn" onClick={onClose}>
            ✖️ Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinnerModal;