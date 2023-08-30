import React from "react";
import "./header.css";
import { Box, Typography } from "@mui/material";
import Actions from "./Actions";
import HeaderSocials from "./HeaderSocials";
import Me from "../../assets/Rashed Image without background.png";
import AnimatedButton from "./animatedButton";
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
        <HeaderSocials />
        <Box className="me">
          <img src={Me} alt="Nur Mohammad Rashed" />
        </Box>
        <Box
          className="scroll__down"
          sx={{
            position: "absolute",
            right: "-2.3rem",
            bottom: "6rem",
            animation: "down 1.5s infinite",
          }}
        >
          <AnimatedButton />
        </Box>
      </Box>
    </header>
  );
};

export default Header;
