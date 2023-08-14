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
import customTheme from "./theme";
import { responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
let theme = responsiveFontSizes(customTheme);

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
