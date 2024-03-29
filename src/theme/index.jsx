import { createTheme} from "@mui/material/styles";


const customTheme = createTheme({
  typography: {
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2.6rem",
    },
    h3: {
      fontSize: "2.4rem",
    },
    h4: {
      fontSize: "2rem",
    },
    h5: {
      fontSize: "1.6rem",
    },
    h6: {
      fontSize: "1.2rem",
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "var(--color-primary)",
          color: "var(--color-white)",
          fontFamily: 'sans-serif',
          fontSize: '12px',
          fontWeight: '600'
        },
      },
    },
  },
});



export default customTheme;

