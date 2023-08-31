import React from "react";
import "./about.css";
import { Box } from "@mui/material";
import Me from "./../../assets/Rashed at Linköping.jpg";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import Button from "@mui/material/Button";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <Box className="container about__container">
        <Box className="about__me">
          <Box className="about__me-image">
            <img src={Me} alt="About Me" />
          </Box>
        </Box>
        <Box className="about__content">
          <Box className="about__cards">
            <article className="about__card">
              <MilitaryTechOutlinedIcon
                sx={{
                  color: "var(--color-primary)",
                  fontSize: "1.4rem",
                  marginBottom: "1rem",
                }}
              />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <PeopleAltOutlinedIcon
                sx={{
                  color: "var(--color-primary)",
                  fontSize: "1.4rem",
                  marginBottom: "1rem",
                }}
              />
              <h5>Clients</h5>
              <small>200+ clients Worldwide</small>
            </article>
            <article className="about__card">
              <LibraryBooksOutlinedIcon
                sx={{
                  color: "var(--color-primary)",
                  fontSize: "1.4rem",
                  marginBottom: "1rem",
                }}
              />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </Box>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            eaque cumque, accusantium fugit eligendi quaerat quidem, recusandae
            nesciunt laborum enim rem? Neque autem quis expedita tempore magnam
            doloremque porro quae.
          </p>
          <Button
            href="#contact"
            sx={{
              background: "var(--color-primary)",
              color: "var(--color-bg)",
              padding: "0.75rem 1.2rem",
              cursor: "pointer",
              border: "1px solid var(--color-primary)",
              transition: "var(--transition)",
              "&:hover": {
                background: "var(--color-white)",
                color: "var(--color-bg)",
                borderColor: "transparent",
              },
            }}
          >
            Let's Talk
          </Button>
        </Box>
      </Box>
    </section>
  );
};

export default About;


