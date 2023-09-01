import React from "react";
import './portfolio.css'

import PigGame from "./../../assets/PigGame.png";
import Starwars from "./../../assets/Starwars.png";
import BudgetApp from "./../../assets/BudgetApp.png";
import GuessMyNumber from "./../../assets/GuessMyNumber.png";
import MovieSearch from "./../../assets/MovieSearch.png";
import BioBIo from "./../../assets/BioBIo.png";

const data = [
  {
    id: 1,
    image: PigGame,
    title: "Pig Game",
    github: "https://github.com/nurrashed/Pig-Game",
    demo: "https://rashed-pig-game.netlify.app/",
  },
  {
    id: 2,
    image: Starwars,
    title: "Star wars app",
    github: "https://github.com/nurrashed/starwar-app-node",
    demo: "https://my-star-wars-app.netlify.app/",
  },
  {
    id: 3,
    image: BudgetApp,
    title: "Budget App",
    github: "https://github.com/nurrashed/BudgetApp-JavaScript",
    demo: "https://budget-app-rashed.netlify.app/",
  },
  {
    id: 4,
    image: GuessMyNumber,
    title: "Guess My Number Game",
    github: "https://github.com/nurrashed/Guess-my-number-game",
    demo: "https://guess-my-number-app.netlify.app/",
  },
  {
    id: 5,
    image: MovieSearch,
    title: "Movie Search App",
    github: "https://github.com/nurrashed/MovieDatabase",
    demo: "https://mymoviesearchapp.netlify.app/",
  },
  {
    id: 6,
    image: BioBIo,
    title: "Bio Bio App",
    github: "https://github.com/nurrashed/BioBio",
    demo: "https://mybiobio.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
