import { useState } from 'react';
import { GAME_STATES } from '../utils/constants.js';
import { getUniqueEmoji, checkWinner } from '../utils/gameUtils.js';

export const useGameLogic = () => {
  const [gameState, setGameState] = useState(GAME_STATES.CATEGORY_SELECTION);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [player1Category, setPlayer1Category] = useState('');
  const [player2Category, setPlayer2Category] = useState('');
  const [player1Emojis, setPlayer1Emojis] = useState([]);
  const [player2Emojis, setPlayer2Emojis] = useState([]);
  const [player1UsedEmojis, setPlayer1UsedEmojis] = useState([]);
  const [player2UsedEmojis, setPlayer2UsedEmojis] = useState([]);
  const [winner, setWinner] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const [moveHistory, setMoveHistory] = useState([]);
  const [showWinnerModal, setShowWinnerModal] = useState(false);

  const handleCellClick = (index) => {
    if (gameState !== GAME_STATES.PLAYING || board[index] || winner) return;

    const currentCategory = currentPlayer === 1 ? player1Category : player2Category;
    const currentEmojis = currentPlayer === 1 ? player1Emojis : player2Emojis;
    const currentUsedEmojis = currentPlayer === 1 ? player1UsedEmojis : player2UsedEmojis;
    const emoji = getUniqueEmoji(currentCategory, currentUsedEmojis);

    let newBoard = [...board];
    let newMoveHistory = [...moveHistory];
    let newPlayer1Emojis = [...player1Emojis];
    let newPlayer2Emojis = [...player2Emojis];
    let newPlayer1UsedEmojis = [...player1UsedEmojis];
    let newPlayer2UsedEmojis = [...player2UsedEmojis];

    // Check if player already has 3 emojis on board
    if (currentEmojis.length >= 3) {
      const oldestMove = currentEmojis[0];
      
      // Check if trying to place on the same cell as the oldest emoji
      if (oldestMove.position === index) {
        return; // Cannot place on the same position as the oldest emoji
      }

      // Remove the oldest emoji from board
      newBoard[oldestMove.position] = null;
      
      // Remove from player's emoji array
      if (currentPlayer === 1) {
        newPlayer1Emojis.shift();
      } else {
        newPlayer2Emojis.shift();
      }
    }

    // Place new emoji
    const newEmojiData = {
      emoji: emoji,
      player: currentPlayer,
      category: currentCategory,
      position: index
    };

    newBoard[index] = newEmojiData;
    newMoveHistory.push({ player: currentPlayer, position: index, emoji: emoji });

    // Add to player's emoji array and used emojis
    if (currentPlayer === 1) {
      newPlayer1Emojis.push(newEmojiData);
      if (!newPlayer1UsedEmojis.includes(emoji)) {
        newPlayer1UsedEmojis.push(emoji);
      }
    } else {
      newPlayer2Emojis.push(newEmojiData);
      if (!newPlayer2UsedEmojis.includes(emoji)) {
        newPlayer2UsedEmojis.push(emoji);
      }
    }

    setBoard(newBoard);
    setMoveHistory(newMoveHistory);
    setPlayer1Emojis(newPlayer1Emojis);
    setPlayer2Emojis(newPlayer2Emojis);
    setPlayer1UsedEmojis(newPlayer1UsedEmojis);
    setPlayer2UsedEmojis(newPlayer2UsedEmojis);

    // Check for winner
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setGameState(GAME_STATES.GAME_OVER);
      setShowWinnerModal(true);
    } else {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  const startGame = () => {
    if (player1Category && player2Category) {
      setGameState(GAME_STATES.PLAYING);
      setCurrentPlayer(1);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer(1);
    setPlayer1Category('');
    setPlayer2Category('');
    setPlayer1Emojis([]);
    setPlayer2Emojis([]);
    setPlayer1UsedEmojis([]);
    setPlayer2UsedEmojis([]);
    setWinner(null);
    setGameState(GAME_STATES.CATEGORY_SELECTION);
    setMoveHistory([]);
    setShowWinnerModal(false);
  };

  const playAgain = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer(1);
    setPlayer1Emojis([]);
    setPlayer2Emojis([]);
    setPlayer1UsedEmojis([]);
    setPlayer2UsedEmojis([]);
    setWinner(null);
    setGameState(GAME_STATES.PLAYING);
    setMoveHistory([]);
    setShowWinnerModal(false);
  };

  const closeWinnerModal = () => {
    setShowWinnerModal(false);
    // Reset the board to initial state when closing the modal
    setBoard(Array(9).fill(null));
    setCurrentPlayer(1);
    setPlayer1Emojis([]);
    setPlayer2Emojis([]);
    setPlayer1UsedEmojis([]);
    setPlayer2UsedEmojis([]);
    setWinner(null);
    setMoveHistory([]);
    setGameState(GAME_STATES.PLAYING);
  };

  return {
    // State
    gameState,
    board,
    currentPlayer,
    player1Category,
    player2Category,
    player1Emojis,
    player2Emojis,
    winner,
    showHelp,
    showWinnerModal,
    
    // Actions
    handleCellClick,
    setPlayer1Category,
    setPlayer2Category,
    setShowHelp,
    startGame,
    resetGame,
    playAgain,
    closeWinnerModal
  };
};