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
          <button
            onClick={() =>
              setLanguage(language === "english" ? "french" : "english")
            }
          >
            {language === "english" ? "Version française" : "English version"}
          </button>
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
