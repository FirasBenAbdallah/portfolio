import { useState } from "react";
import "./App.css";
import "./styles/Theme.css";
import "./styles/Header.css";
import SplashScreen from "./components/SplashScreen";
import HeaderComp from "./components/HeaderComp";
import BodyComp from "./components/BodyComp";
import FooterComp from "./components/FooterComp";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  const [language, setLanguage] = useState("english"); // state to control language
  const [isEntered, setIsEntered] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Add a class to your main div based on the theme state
  const themeClass = theme === "dark" ? "" : "light-mode";

  const handleEnterSite = () => {
    setIsEntered(true);
  };

  return (
    <>
      {isEntered ? (
        <div className={`main ${themeClass}`}>
          <div className="horizontal-line">
            <h1>FBA Portfolio</h1>
            <div className="buttons">
              <button
                className="language-btn"
                onClick={() =>
                  setLanguage(language === "french" ? "english" : "french")
                }
              >
                {language === "french" ? (
                  <>
                    Version française
                    <img
                      width="25"
                      height="25"
                      src="https://img.icons8.com/emoji/48/france-emoji.png"
                      alt="france-emoji"
                      className="versionEmoji"
                    />
                  </>
                ) : (
                  <>
                    English version
                    <img
                      width="25"
                      height="25"
                      src="https://img.icons8.com/color/48/great-britain.png"
                      alt="great-britain"
                      className="versionEmoji"
                    />
                  </>
                )}
              </button>
              <ThemeSwitch checked={theme === "dark"} onChange={toggleTheme} />
            </div>
          </div>
          <div className={language}>
            <HeaderComp language={language} theme={theme} />
            <BodyComp language={language} theme={theme} />
            <FooterComp language={language} theme={theme} />
          </div>
        </div>
      ) : (
        <SplashScreen onEnterSite={handleEnterSite} />
      )}
    </>
  );
}

export default App;
