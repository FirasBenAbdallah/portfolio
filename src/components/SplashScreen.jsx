import { useEffect } from "react";
import fba from "../assets/images/signature_FBA_Black.png";

const SplashScreen = ({ onEnterSite }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onEnterSite();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onEnterSite]);
  
  return (
    <>
      <div className="welcome-container">
        <img
          src="https://img.icons8.com/emoji/75/palestinian-territories-emoji.png"
          alt="Palestine"
          className="top-right-image"
        />
        <h1 className="welcome-title">Welcome/Bienvenue</h1>
        <p className="welcome-subtitle">To</p>
        <img src={fba} alt="FBA" className="fba-img" />
        <p className="welcome-subtitle">Portfolio</p>
      </div>
    </>
  );
};

export default SplashScreen;
