import { emojiCategories, WINNING_LINES } from './constants.js';

export const getUniqueEmoji = (category, usedEmojis) => {
  const emojis = emojiCategories[category];
  const availableEmojis = emojis.filter(emoji => !usedEmojis.includes(emoji));
  
  // If all emojis have been used, reset and start over
  if (availableEmojis.length === 0) {
    return emojis[Math.floor(Math.random() * emojis.length)];
  }
  
  return availableEmojis[Math.floor(Math.random() * availableEmojis.length)];
};

export const checkWinner = (board) => {
  for (let line of WINNING_LINES) {
    const [a, b, c] = line;
    if (board[a] && board[b] && board[c]) {
      // Check if all three emojis belong to the same player
      const category1 = board[a].category;
      const category2 = board[b].category;
      const category3 = board[c].category;
      
      if (category1 === category2 && category2 === category3) {
        return board[a].player;
      }
    }
  }
  return null;
};