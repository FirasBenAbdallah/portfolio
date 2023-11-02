import {
  EnvironmentOutlined,
  LinkOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { educations } from "../data/data";

const AsideComp = () => {
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
          <h2>Compétences</h2>
          <br />
          <p>
            <div class="inline-container">
              <strong>• Langages de programmation :</strong>
              <hr />
            </div>
            <br />
            Java, C#, Python, C, C++
            <br />
            <br />
            <div class="inline-container">
              <strong>• Développement web :</strong>
              <hr />
            </div>
            <br />
            Angular, ReactJS, Express NodeJS, Spring Boot, .Net core, Symfony,
            jQuery, JavaScript, Bootstrap5, HTML5, CSS3, JEE.
            <br />
            <br />
            <div class="inline-container">
              <strong>• Développement mobile :</strong>
              <hr />
            </div>
            <br />
            Flutter, Android (Kotlin,XML,Jetpack Compose),
            iOS(SwiftUI,Storyboard)
            <br />
            <br />
            <div class="inline-container">
              <strong>• Conception et gestion de bases de données :</strong>
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
            En savoir plus sur Github
          </Button>
        </div>
        <div className="section">
          <h2>Témoignages</h2>
          <p>
            <q>
              Firas Ben Abdallah se distingue par son expertise approfondie en
              tant qu'ingénieur informatique. Sa rigueur professionnelle et son
              dévouement au métier garantissent la réussite de chaque projet
              qu'il entreprend. Le confier une mission, c'est assurer sa
              réalisation à la perfection.
            </q>
          </p>
          <Button type="link" icon={<LinkOutlined />}>
            En savoir plus sur LinkedIn
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
          <h2>Langues</h2>
          <div className="language-item">
            <h3>Arabe</h3>
            <span>Locuteur natif</span>
            <div className="full">
              <div className="percent first"></div>
            </div>
          </div>
          <div className="language-item">
            <h3>Francais</h3>
            <span>Competances professionnelles</span>
            <div className="full">
              <div className="percent second"></div>
            </div>
          </div>
          <div className="language-item">
            <h3>Anglais</h3>
            <span>Competances professionnelles</span>
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
