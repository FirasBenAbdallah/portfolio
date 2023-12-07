import { Button, Divider } from "antd";
import { LikeOutlined, LinkOutlined } from "@ant-design/icons";
import {
  body,
  aboutMe,
  recentProjects,
  projects,
  experience,
} from "../data/body";
import AsideComp from "./AsideComp";
import "../styles/Aside.css";

const BodyComp = ({ language, theme }) => {
  const themeClass = theme === "dark" ? "body-dark" : "body-light";

  return (
    <div className={`body-container ${themeClass}`}>
      <div className="left">
        <section className="about">
          <article>
            <h2>{aboutMe.title[language]}</h2>
            <p>{aboutMe.description[language]}</p>
          </article>
        </section>
        <section className="projects">
          <h2>{body.project[language]}</h2>
          <article>
            <a
              href="https://imgur.com/a/hKTAcYf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="featured-img"
                src={recentProjects.image}
                alt="slug"
              />
            </a>
            <div className="project-info">
              <h3>{recentProjects.title[language]}</h3>
              <p>
                {recentProjects.description[language]
                  .split("\n")
                  .map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>
              <div className="project-link">
                <Button className="btn" icon={<LikeOutlined />}>
                  Soutenir mon projet
                </Button>
              </div>
            </div>
          </article>
          <Divider style={{ backgroundColor: "#fff" }} />
          {projects.map((item, index) => {
            return (
              <article className="article-item" key={index}>
                <div className="left">
                  <a
                    href={item.imgLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item.image} alt="project-slug" />
                  </a>
                </div>
                <div className="right">
                  <div className="projects-info">
                    <h3>{item.title[language]}</h3>
                    <span>{item.date}</span>
                  </div>
                  {item.description[language].split("\n").map((line, index) => (
                    <span
                      key={index}
                      style={{ textAlign: "justify", display: "block" }}
                    >
                      {line}
                      <br />
                    </span>
                  ))}
                  <p>
                    {item.tools[language].split("\n").map((str, index) => {
                      // Split the string at ":"
                      const parts = str.split(":");
                      // Check if the first part is one of the titles
                      const isTitle = [
                        "Environnements techniques",
                        "Key Words",
                        "Outil de gestion",
                        "Management Tools",
                        "IDE",
                      ].includes(parts[0].trim());
                      return (
                        <span key={index}>
                          {/* Apply the style conditionally if the part is a title */}
                          {isTitle && (
                            <span style={{ color: "#909090" }}>
                              {parts[0]}:
                            </span>
                          )}
                          {parts[1]}
                          <br />
                        </span>
                      );
                    })}
                  </p>
                  <Button
                    type="link"
                    icon={<LinkOutlined />}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {language === "french" ? "En savoir plus" : "Learn more"}
                  </Button>
                </div>
              </article>
            );
          })}
        </section>

        <section className="experiences">
          <h2>{body.title[language]}</h2>
          {experience.map((item) => {
            return (
              <article key={item.id}>
                <div className="experience-info">
                  <h3>
                    {item.title[language]}
                    <hr />
                  </h3>
                  <span>{item.date[language]}</span>
                </div>
                <p>
                  {item.description[language]
                    .split("\n")
                    .map((str, index, array) =>
                      index === array.length - 1 ? (
                        str
                      ) : (
                        <>
                          {str}
                          <br />
                          <span style={{ color: "#909090" }}>
                            {body.environment[language]}
                          </span>
                        </>
                      )
                    )}
                </p>
              </article>
            );
          })}
        </section>
      </div>
      <AsideComp language={language} theme={theme} />
    </div>
  );
};

export default BodyComp;
