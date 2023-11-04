import { footer } from "../data/translation";

const FooterComp = ({language}) => {
  return (
    <>
      <footer>
        <p>
          {footer.description[language]}
        </p>
      </footer>
    </>
  );
};

export default FooterComp;
