import React from "react";
import { Footer } from "../../../constants";
import "./GamesPage.css"
const gamesData = [
  {
    id: 1,
    title: "Math Quiz",
    description: "Test your math skills with our quiz game.",
    imageUrl: "/images/math-quiz.jpg",
    link: "/games/math-quiz",
  },
  {
    id: 2,
    title: "Word Search",
    description: "Find hidden words in this exciting word search game.",
    imageUrl: "/images/word-search.jpg",
    link: "/games/word-search",
  },
  // Add more game data
];

const GamesPage = () => {
  return (
    <div className="games-page">
     
      <section className="hero">
        <h1 className="page-title">Educational Games</h1>
        <p className="page-description">
          Explore a world of fun and learning through our educational games.
        </p>
      </section>
      <section className="game-cards">
        {gamesData.map((game) => (
          <div className="game-card" key={game.id}>
            <div className="game-card-inner">
              <img className="game-image" src={game.imageUrl} alt={game.title} />
              <div className="game-details">
                <h2 className="game-title">{game.title}</h2>
                <p className="game-description">{game.description}</p>
                <a className="play-button" href={game.link}>
                  Play Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer/>
      
    </div>
  );
};

export default GamesPage;
