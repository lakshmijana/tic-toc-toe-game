🛠 Tech Stack
React (Functional Components & Hooks)

JavaScript

CSS for styling

😃 Emoji Categories
🐶 Animals

🍎 Food

⚽ Sports

🚗 Vehicles

🎵 Music

🪄 “Vanishing” Feature Implementation
When players select a matching pair of emojis:

A setTimeout is triggered to briefly show the pair

Then their visibility is toggled using conditional rendering (isMatched state)

Matched emoji cards are removed from the board by not rendering them

Example logic:

jsx
Copy
Edit
{!card.isMatched && (
  <div className="emoji-card">{card.emoji}</div>
)}
🧠 If I Had More Time...
Add sound effects and animations

Improve responsive design and accessibility

Implement a scoring system with a timer

Add difficulty levels or multiplayer mode

