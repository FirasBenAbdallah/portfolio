import { footer } from "../data/headerFooter";

const FooterComp = ({ language }) => {
  return (
    <>
      <footer>
        <p>{footer.description[language]}</p>
      </footer>
    </>
  );
};

export default FooterComp;
