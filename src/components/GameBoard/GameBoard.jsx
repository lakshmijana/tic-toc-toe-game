import React from 'react';
import GameCell from '../GameCell/GameCell.jsx';
import { emojiCategories } from '../../utils/constants.js';
import './GameBoard2.css';

const GameBoard = ({
  board,
  currentPlayer,
  player1Category,
  player2Category,
  player1Emojis,
  player2Emojis,
  winner,
  onCellClick,
  onResetGame,
  onPlayAgain,
  onShowHelp
}) => {
  return (
    <div className="game-container">
      <div className="game-header">
        <div className="player-info">
          <div className={`player-indicator ${currentPlayer === 1 ? 'active' : ''}`}>
            Player 1: {player1Category && emojiCategories[player1Category][0]} ({player1Emojis.length}/3)
          </div>
          <div className={`player-indicator ${currentPlayer === 2 ? 'active' : ''}`}>
            Player 2: {player2Category && emojiCategories[player2Category][0]} ({player2Emojis.length}/3)
          </div>
        </div>
      </div>

      <div className="board">
        {board.map((cell, index) => (
          <GameCell
            key={index}
            cell={cell}
            index={index}
            onCellClick={onCellClick}
          />
        ))}
      </div>

      <div className="game-controls">
        {winner ? (
          <div className="winner-controls">
            <button className="control-btn play-again-btn" onClick={onPlayAgain}>
              🎮 Play Again
            </button>
            <button className="control-btn" onClick={onResetGame}>
              🔄 New Game
            </button>
          </div>
        ) : (
          <>
            <button className="control-btn" onClick={onResetGame}>
              🔄 New Game
            </button>
            <button className="control-btn help-btn" onClick={onShowHelp}>
              ❓ Help
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default GameBoard;