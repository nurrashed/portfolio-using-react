import React from "react";
import "./header.css";
import { Box, Typography } from "@mui/material";
import Actions from "./Actions";
import Me from '../../assets/Rashed Image without background.png'
const Header = () => {
  return (
    <header>
      <Box className="container header__container">
        <Typography variant="h6">Hello I am</Typography>
        <Typography variant="h1">Nur Mohammad Rashed</Typography>
        <Typography variant="h6" className="text-light">
          Front-end Developer
        </Typography>
        <Actions />

        <Box className="me">
          <img src={Me} alt="Nur Mohammad Rashed" />
        </Box>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </Box>
    </header>
  );
};

export default Header;
