import "./App.css";
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
