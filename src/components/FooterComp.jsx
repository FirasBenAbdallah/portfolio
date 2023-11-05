import { footer } from "../data/headerFooter";

const FooterComp = ({ language, theme }) => {
  const themeClass = theme === "dark" ? "footer-dark" : "footer-light";
  
  return (
    <>
      <footer className={themeClass}>
        <p>{footer.description[language]}</p>
      </footer>
    </>
  );
};

export default FooterComp;
