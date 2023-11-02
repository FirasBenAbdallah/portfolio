const SplashScreen = () => {
  return (
    <>
      <div className="welcome-container">
        <img
          src="src/assets/images/palestine.png"
          alt="Palestine"
          className="top-right-image"
        />
        <h1 className="welcome-title">Welcome/Bienvenue</h1>
        <p className="welcome-subtitle">To</p>
        <img src="src/assets/images/signature_FBA_Black.png" alt="FBA" className="fba-img"/>
        <p className="welcome-subtitle">Portfolio</p>
      </div>
    </>
  );
};

export default SplashScreen;
