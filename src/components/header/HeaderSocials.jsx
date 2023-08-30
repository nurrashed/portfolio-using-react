import React from "react";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const HeaderSocials = () => {
  return (
    <>
      <Box className="header__socials">
        <a href="https://linkedin.com" target="_blank"><LinkedInIcon /></a>
        <a href="https://github.com" target="_blank"><GitHubIcon /></a>
        <a href="https://linkedin.com" target="_blank"></a>
      </Box>
    </>
  );
};

export default HeaderSocials;
