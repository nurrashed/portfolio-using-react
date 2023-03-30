import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

let theme = createTheme({
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
});
theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
