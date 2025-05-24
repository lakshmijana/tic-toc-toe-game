import React from 'react';
import './GameCell2.css';

const GameCell = ({ cell, index, onCellClick }) => {
  return (
    <div
      className={`cell ${cell ? 'occupied' : 'empty'}`}
      onClick={() => onCellClick(index)}
    >
      {cell && cell.emoji}
    </div>
  );
};

export default GameCell;