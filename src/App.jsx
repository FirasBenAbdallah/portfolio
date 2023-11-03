import { useState, useEffect } from "react";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import HeaderComp from "./components/HeaderComp";
import BodyComp from "./components/BodyComp";
import FooterComp from "./components/FooterComp";

function App() {
  const [language, setLanguage] = useState("english"); // state to control language
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEntered(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isEntered ? (
        <div className="main">
          <div className="horizontal-line">
            <h1>FBA Portfolio</h1>
            <div>
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
            </div>
          </div>
          <div className={language}>
            <HeaderComp language={language} />
            <BodyComp language={language} />
            <FooterComp language={language} />
          </div>
        </div>
      ) : (
        <SplashScreen />
      )}
    </>
  );
}

export default App;
