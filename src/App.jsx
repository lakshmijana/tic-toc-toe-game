import React from 'react';
import { useGameLogic } from './hooks/useGameLogic.js';
import { GAME_STATES } from './utils/constants.js';
import CategorySelection from './components/CategorySelection/CategorySelection.jsx';
import GameBoard from './components/GameBoard/GameBoard.jsx';
import WinnerModal from './components/WinnerModal/WinnerModal.jsx';
import HelpModal from './components/HelpModal/HelpModal.jsx';
import "./styles/global.css"
import './styles/animations.css';

const App = () => {
  const {
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
  } = useGameLogic();

  return (
    <div className="game-wrapper">
      <div className="app">
        {gameState === GAME_STATES.CATEGORY_SELECTION && (
          

          <CategorySelection
            player1Category={player1Category}
            player2Category={player2Category}
            setPlayer1Category={setPlayer1Category}
            setPlayer2Category={setPlayer2Category}
            onStartGame={startGame}
          />
         
        )}
        
        {(gameState === GAME_STATES.PLAYING || gameState === GAME_STATES.GAME_OVER) && (
          <GameBoard
            board={board}
            currentPlayer={currentPlayer}
            player1Category={player1Category}
            player2Category={player2Category}
            player1Emojis={player1Emojis}
            player2Emojis={player2Emojis}
            winner={winner}
            onCellClick={handleCellClick}
            onResetGame={resetGame}
            onPlayAgain={playAgain}
            onShowHelp={() => setShowHelp(true)}
          />
        )}
        
        <WinnerModal
          show={showWinnerModal}
          winner={winner}
          player1Category={player1Category}
          player2Category={player2Category}
          onPlayAgain={playAgain}
          onResetGame={resetGame}
          onClose={closeWinnerModal}
        />
        
        <HelpModal
          show={showHelp}
          onClose={() => setShowHelp(false)}
        />
      </div>
    </div>
  );
};

export default App;