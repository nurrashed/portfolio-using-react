import React from "react";
import Button from "@mui/material/Button";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const animatedButton = () => {
  return (
    <Button
      href="#contact"
      startIcon={
        <ArrowCircleRightIcon style={{ width: "24px", height: "24px" }} />
      }
      sx={{
        border: "none",
        transform: "rotate(90deg)",
        fontWeight: 300,
        fontSize: "12px",
        color: "var(--color-primary)",
      }}
    >
      Scroll Down
    </Button>
  );
};

export default animatedButton;
