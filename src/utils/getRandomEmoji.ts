const emojisList = ['🚀', '🌌', '🛸', '🦄', '🎉', '🔮', '🌀'];

export const getRandomEmoji = () => {
  const randomId = Math.floor(Math.random() * (6 - 0 + 1) + 0);

  return emojisList[randomId];
};