import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import Header from "./components/Header";
import Accueil from "./components/Accueil";
import Apropos from "./components/Apropos";
import Competences from "./components/Competences";
import Projets from "./components/Projets";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <main>
        <Accueil />
        <Apropos />
        <Competences />
        <Projets />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;