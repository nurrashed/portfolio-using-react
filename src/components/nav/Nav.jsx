/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <Tooltip title="Home" placement="top-start">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <HomeOutlinedIcon
            sx={{
              "&:hover": {
                animation: "iconShake 1s ",
              },
            }}
          />
        </a>
      </Tooltip>
      <Tooltip title="About" placement="top-start">
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <PersonOutlineOutlinedIcon
            sx={{
              "&:hover": {
                animation: "iconShake 1s ",
              },
            }}
          />
        </a>
      </Tooltip>
      <Tooltip title="Experience" placement="top-start">
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BadgeOutlinedIcon
            sx={{
              "&:hover": {
                animation: "iconShake 1s ",
              },
            }}
          />
        </a>
      </Tooltip>
      <Tooltip title="Services" placement="top-start">
        <a
          href="#services"
          onClick={() => setActiveNav("#Services")}
          className={activeNav === "#Services" ? "active" : ""}
        >
          <MiscellaneousServicesOutlinedIcon
            sx={{
              "&:hover": {
                animation: "iconShake 1s ",
              },
            }}
          />
        </a>
      </Tooltip>
      <Tooltip title="Contact" placement="top-start">
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <ContactMailOutlinedIcon
            sx={{
              "&:hover": {
                animation: "iconShake 1s ",
              },
            }}
          />
        </a>
      </Tooltip>
    </nav>
  );
};

export default Nav;
