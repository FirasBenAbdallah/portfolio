import React from "react";
// import palestine from "../assets/images/palestine.png";
import fba from "../assets/images/signature_FBA_Black.png";

const SplashScreen = () => {
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
