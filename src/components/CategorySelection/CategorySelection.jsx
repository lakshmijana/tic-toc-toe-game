import React from 'react';
import { emojiCategories } from '../../utils/constants.js';
import './CategorySelection2.css';

const CategorySelection = ({
  player1Category,
  player2Category,
  setPlayer1Category,
  setPlayer2Category,
  onStartGame
}) => {
  return (
    <div className="category-selection">
     
      <h2 style={{color:"orange"}}>Emoji Clash</h2>
      
      <div className="player-selection">
        <div className="player-category">
          <h3>Player 1 Category:</h3>
          <div className="category-options">
            {Object.entries(emojiCategories).map(([category, emojis]) => (
              <button
                key={category}
                className={`category-btn ${player1Category === category ? 'selected' : ''}`}
                onClick={() => setPlayer1Category(category)}
                disabled={player2Category === category}
              >
                <div className="category-name">{category.charAt(0).toUpperCase() + category.slice(1)}</div>
                <div className="category-emojis">{emojis.slice(0, 4).join(' ')}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="player-category">
          <h3>Player 2 Category:</h3>
          <div className="category-options">
            {Object.entries(emojiCategories).map(([category, emojis]) => (
              <button
                key={category}
                className={`category-btn ${player2Category === category ? 'selected' : ''}`}
                onClick={() => setPlayer2Category(category)}
                disabled={player1Category === category}
              >
                <div className="category-name">{category.charAt(0).toUpperCase() + category.slice(1)}</div>
                <div className="category-emojis">{emojis.slice(0, 4).join(' ')}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <button 
        className="start-btn"
        onClick={onStartGame}
        disabled={!player1Category || !player2Category}
       
      >
        Start Game
      </button>
    </div>
  );
};

export default CategorySelection;