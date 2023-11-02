import {
  EnvironmentOutlined,
  LinkOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { educations } from "../data/data";
import { translationA } from "../data/translation";

const AsideComp = ({ language }) => {
  return (
    <>
      <aside>
        <div className="section contacts">
          <div className="contact-item">
            <EnvironmentOutlined />
            <span>Ariana, Tunisie</span>
          </div>
          <div className="contact-item">
            <MailOutlined />
            <span>
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=firas.benabdallah@esprit.tn"
                target="_blank"
                rel="noopener noreferrer"
              >
                firas.benabdallah@esprit.tn
              </a>
            </span>
          </div>
          <div className="contact-item">
            <LinkOutlined />
            <span>
              <a href="">www.siteweb.com</a>
            </span>
          </div>
        </div>
        <div className="section">
          <h2>{translationA.title1[language]}</h2>
          <br />
          <p>
            <div class="inline-container">
              <strong>{translationA.theme1[language]}</strong>
              <hr />
            </div>
            <br />
            Java, C#, Python, C, C++
            <br />
            <br />
            <div class="inline-container">
              <strong>{translationA.theme2[language]}</strong>
              <hr />
            </div>
            <br />
            Angular, ReactJS, Express NodeJS, Spring Boot, .Net core, Symfony,
            jQuery, JavaScript, Bootstrap5, HTML5, CSS3, JEE.
            <br />
            <br />
            <div class="inline-container">
              <strong>{translationA.theme3[language]}</strong>
              <hr />
            </div>
            <br />
            Flutter, Android (Kotlin,XML,Jetpack Compose),
            iOS(SwiftUI,Storyboard)
            <br />
            <br />
            <div class="inline-container">
              <strong>{translationA.theme4[language]}</strong>
              <hr />
            </div>
            <br />
            MongoDB, Oracle SQL, MySQL, Firebase
          </p>
          <Button
            type="link"
            icon={<LinkOutlined />}
            href="https://github.com/FirasBenAbdallah/FirasBenAbdallah"
            target="_blank"
            rel="noopener noreferrer"
          >
            {translationA.link1[language]}
          </Button>
        </div>
        <div className="section">
          <h2>{translationA.title2[language]}</h2>
          <p>{translationA.description[language]}</p>
          <Button type="link" icon={<LinkOutlined />}>
            {translationA.link2[language]}
          </Button>
        </div>
        <div className="section">
          <h2>Éducation</h2>
          {educations.map((item, index) => {
            return (
              <div className="education-item" key={index}>
                <h3>{item.title}</h3>
                <div className="education-item-nd">
                  <span>{item.name}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="section">
          <h2>{translationA.title3[language]}</h2>
          <div className="language-item">
            <h3>{translationA.language1[language]}</h3>
            <span>{translationA.type1[language]}</span>
            <div className="full">
              <div className="percent first"></div>
            </div>
          </div>
          <div className="language-item">
            <h3>{translationA.language2[language]}</h3>
            <span>{translationA.type2[language]}</span>
            <div className="full">
              <div className="percent second"></div>
            </div>
          </div>
          <div className="language-item">
            <h3>{translationA.language3[language]}</h3>
            <span>{translationA.type2[language]}</span>
            <div className="full">
              <div className="percent third"></div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AsideComp;
