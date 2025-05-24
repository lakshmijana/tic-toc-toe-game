export const emojiCategories = {
  animals: ['🐶', '🐱', '🐵', '🐰', '🦊', '🐸'],
  food: ['🍕', '🍟', '🍔', '🍩', '🌮', '🍪'],
  sports: ['⚽️', '🏀', '🏈', '🎾', '🏐', '🎱'],
  nature: ['🌸', '🌻', '🌺', '🍀', '🌿', '🌳'],
  transport: ['🚗', '🚲', '✈️', '🚂', '🚢', '🛴'],
};

export const GAME_STATES = {
  CATEGORY_SELECTION: 'category-selection',
  PLAYING: 'playing',
  GAME_OVER: 'game-over'
};

export const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];