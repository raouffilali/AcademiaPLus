// GameCard.tsx
import React from 'react';

interface GameCardProps {
  name: string;
  backgroundImage: string;
  rating: number;
  platforms: string[];
}

const GameCard: React.FC<GameCardProps> = ({
  name,
  backgroundImage,
  rating,
  platforms,
}) => {
  return (
    <div className="game-card">
      <img src={backgroundImage} alt={name} className="game-card-image" />
      <div className="game-card-content">
        <h3 className="game-card-title">{name}</h3>
        <p className="game-card-rating">Rating: {rating}</p>
        <p className="game-card-platforms">Platforms: {platforms.join(', ')}</p>
        <button className="game-card-button">Play Now</button>
      </div>
    </div>
  );
};

export default GameCard;
    