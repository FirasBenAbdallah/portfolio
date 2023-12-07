import {
  EnvironmentOutlined,
  LinkOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import {
  aside,
  skills,
  testimonial,
  languages,
  education,
} from "../data/aside";

const AsideComp = ({ language, theme }) => {
  const themeClass = theme === "dark" ? "aside-dark" : "aside-light";

  return (
    <>
      <aside className={themeClass}>
        <div className="section contacts">
          <div className="contact-item">
            <EnvironmentOutlined />
            <span>{aside.location[language]}</span>
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
        {/* Skills/Compétences */}
        <div className="section">
          <h2>{skills.title[language]}</h2>
          <br />
          <p>
            <div class="inline-container">
              <strong>{skills.theme1[language]}</strong>
              <hr />
            </div>
            <br />
            Java, C#, JavaScript, Python, C, C++
            <br />
            <br />
            <div class="inline-container">
              <strong>{skills.theme2[language]}</strong>
              <hr />
            </div>
            <br />
            Angular, ReactJS, Express.JS/NodeJS, Spring Boot, Symfony, ASP.Net
            core. jQuery, HTML5, CSS3, Bootstrap5, JEE.
            <br />
            <br />
            <div class="inline-container">
              <strong>{skills.theme3[language]}</strong>
              <hr />
            </div>
            <br />
            Flutter, Android (Kotlin/XML/Jetpack Compose), iOS
            (SwiftUI/Storyboard)
            <br />
            <br />
            <div class="inline-container">
              <strong>{skills.theme4[language]}</strong>
              <hr />
            </div>
            <br />
            MongoDB, Oracle SQL, MySQL, Firebase
            <br />
            <br />
            <div class="inline-container">
              <strong>{skills.theme5[language]}</strong>
              <hr />
            </div>
            <br />
            Jenkins, Docker, Nexus, Grafana/Prometheus, Vagrant
            <br />
            <br />
            <div class="inline-container">
              <strong>{skills.theme6[language]}</strong>
              <hr />
            </div>
            <br />
            JUNIT, SonarQube
            <br />
            <br />
            <div class="inline-container">
              <strong>{skills.theme7[language]}</strong>
              <hr />
            </div>
            <br />
            Computer-Vision, ML/DL
          </p>
          <Button
            type="link"
            icon={<LinkOutlined />}
            href="https://github.com/FirasBenAbdallah/FirasBenAbdallah"
            target="_blank"
            rel="noopener noreferrer"
          >
            {skills.link[language]}
          </Button>
        </div>
        {/* Testimonials/Témoignages */}
        <div className="section">
          <h2>{testimonial.title[language]}</h2>
          <p>{testimonial.description[language]}</p>
          <Button type="link" icon={<LinkOutlined />}>
            {testimonial.link[language]}
          </Button>
        </div>
        {/* Education/Éducation */}
        <div className="section">
          <h2>{aside.title[language]}</h2>
          {education.map((item, index) => {
            return (
              <div className="education-item" key={index}>
                <h3>{item.title[language]}</h3>
                <div className="education-item-nd">
                  <span>{item.name[language]}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            );
          })}
        </div>
        {/* Languages/Langues */}
        <div className="section">
          <h2>{languages.title[language]}</h2>
          <div className="language-item">
            <h3>{languages.language1[language]}</h3>
            <span>{languages.type1[language]}</span>
            <div className="full">
              <div className="percent first"></div>
            </div>
          </div>
          <div className="language-item">
            <h3>{languages.language2[language]}</h3>
            <span>{languages.type2[language]}</span>
            <div className="full">
              <div className="percent second"></div>
            </div>
          </div>
          <div className="language-item">
            <h3>{languages.language3[language]}</h3>
            <span>{languages.type2[language]}</span>
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
