import React from "react";
import { useState } from "react";
import "./portfolio.css";

import PigGame from "./../../assets/PigGame.png";
import Starwars from "./../../assets/Starwars.png";
import BudgetApp from "./../../assets/BudgetApp.png";
import GuessMyNumber from "./../../assets/GuessMyNumber.png";
import MovieSearch from "./../../assets/MovieSearch.png";
import BioBIo from "./../../assets/BioBIo.png";
import { Box, Typography } from "@mui/material";
import { Padding } from "@mui/icons-material";
const data = [
  {
    id: 1,
    image: PigGame,
    title: "Pig Game",
    github: "https://github.com/nurrashed/Pig-Game",
    demo: "https://rashed-pig-game.netlify.app/",
    imageText: "Image 1",
    description: "Tech stack - JavaScript , HTML and CSS",
  },
  {
    id: 2,
    image: Starwars,
    title: "Star wars app",
    github: "https://github.com/nurrashed/starwar-app-node",
    demo: "https://my-star-wars-app.netlify.app/",
    imageText: "Image 2",
    description: "Tech stack - JavaScript , HTML and CSS",
  },
  {
    id: 3,
    image: BudgetApp,
    title: "Budget App",
    github: "https://github.com/nurrashed/BudgetApp-JavaScript",
    demo: "https://budget-app-rashed.netlify.app/",
    imageText: "Image 3",
    description:
      "Tech stack - JavaScript , HTML and CSS, React, hkdjfh, hasgdjhb,",
  },
  {
    id: 4,
    image: GuessMyNumber,
    title: "Guess My Number Game",
    github: "https://github.com/nurrashed/Guess-my-number-game",
    demo: "https://guess-my-number-app.netlify.app/",
    imageText: "Image 4",
    description: "Tech stack - JavaScript , HTML and CSS",
  },
  {
    id: 5,
    image: MovieSearch,
    title: "Movie Search App",
    github: "https://github.com/nurrashed/MovieDatabase",
    demo: "https://mymoviesearchapp.netlify.app/",
    imageText: "Image 5",
    description: "Tech stack - JavaScript , HTML and CSS",
  },
  {
    id: 6,
    image: BioBIo,
    title: "Bio Bio App",
    github: "https://github.com/nurrashed/BioBio",
    demo: "https://mybiobio.netlify.app/",
    imageText: "Image 6",
    description: "Tech stack - JavaScript , HTML and CSS",
  },
];

const Portfolio = () => {
  const [isHovering, setIsHovering] = useState(-1);

  const handleMouseEnter = (event, id) => {
    setIsHovering(id);
  };

  const handleMouseLeave = () => {
    setIsHovering(-1);
  };
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(
          ({ id, image, title, github, demo, imageText, description }) => {
            return (
              <div
                key={id}
                style={{
                  position: "relative",
                  textAlign: "center",
                  color: "white",
                  border:
                    isHovering === id
                      ? "1px solid var(--color-primary-variant)"
                      : "1px solid var(--color-primary)",
                  backgroundColor:
                    isHovering === id ? "var(--color-bg-variant)" : "none",
                  borderRadius: "16px",
                }}
                onMouseEnter={(e) => {
                  handleMouseEnter(e, id);
                }}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={image}
                  alt={title}
                  className={isHovering === id ? "isHover" : "isNotHover"}
                />

                <h4
                  className={`descriptionStyle
                    ${
                      isHovering === id
                        ? "fade-in-style-mouseEnter"
                        : "fade-in-style-mouseLeave"
                    }`}
                >
                  {description}
                </h4>

                <h4
                  className={
                    isHovering !== id
                      ? "fade-in-style-mouseEnter"
                      : "fade-in-style-mouseLeave"
                  }
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "block",
                  }}
                >
                  {title}
                </h4>

                <div
                  className={
                    isHovering === id
                      ? "fade-in-style-mouseEnter"
                      : "fade-in-style-mouseLeave"
                  }
                  style={{
                    display: "flex",
                    gap: "1rem",
                    position: "absolute",
                    bottom: "8%",
                    left: "5%",
                  }}
                >
                  <a
                    style={{
                      pointerEvents: isHovering === id ? "auto" : "none",
                    }}
                    href={github}
                    className="btn_portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    style={{
                      pointerEvents: isHovering === id ? "auto" : "none",
                      color: "black",
                    }}
                    href={demo}
                    className="btn_portfolio btn_portfolio-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
