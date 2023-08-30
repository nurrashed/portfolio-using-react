import React from "react";
import CV from "./../../assets/CV_Nur Mohammad Rashed_English.pdf";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
const Actions = () => {
  return (
    <>
      <Box className="action">
        <Button
          endIcon={<DownloadForOfflineOutlinedIcon />}
          href={CV}
          download
          sx={{
            color: "var(--color-primary)",
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
          Download CV
        </Button>
        <Button
          href="#contact"
          endIcon={<ContactPhoneOutlinedIcon />}
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
    </>
  );
};

export default Actions;
