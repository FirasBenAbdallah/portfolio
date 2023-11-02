/* import "./App.css";
import HeaderComp from "./components/HeaderComp";
import BodyComp from "./components/BodyComp";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <>
      <div className="main">
        <HeaderComp />
        <BodyComp />
        <FooterComp />
      </div>
    </>
  );
}

export default App;
 */
import { useState } from "react";
import "./App.css";
import HeaderComp from "./components/HeaderComp";
import BodyComp from "./components/BodyComp";
import FooterComp from "./components/FooterComp";

function App() {
  const [language, setLanguage] = useState("english"); // state to control language

  return (
    <>
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
    </>
  );
}

export default App;
