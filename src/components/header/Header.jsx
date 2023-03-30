import React from "react";
import "./header.css";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <header>
      <Box className="container header__container">
        <Typography variant="h6">Hello I am</Typography>
        <Typography variant="h1">Nur Mohammad Rashed</Typography>
        <Typography variant="h6" className="text-light">Front-end Developer</Typography>
        <h5>Hello I am</h5>
        <h1>Nur Mohammad Rashed</h1>
        <h5 className="text-light">Front-end Developer</h5>
      </Box>
    </header>
  );
};

export default Header;
