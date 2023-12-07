import { useState } from "react";
import Modal from "react-modal";
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>
              <br />
              <p>
                {recentProjects.tools[language]
                  .split("\n")
                  .map((str, index) => {
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
                          <span style={{ color: "#909090" }}>{parts[0]}:</span>
                        )}
                        {parts[1]}
                        <br />
                      </span>
                    );
                  })}
              </p>
              <br />
              <Button
                type="link"
                icon={<LinkOutlined />}
                onClick={() => setModalIsOpen(true)}
                // rel="noopener noreferrer"
              >
                {language === "french" ? "En savoir plus" : "Learn more"}
              </Button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Details Modal"
                style={{
                  content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    transform: "translate(-50%, -50%)",
                    background: "#fff",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  },
                  overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  },
                }}
              >
                <h2
                  style={{
                    marginTop: 0,
                    borderBottom: "2px solid #f2f2f2",
                    paddingBottom: "10px",
                    marginBottom: "15px",
                  }}
                >
                  {language === "french" ? "Liens" : "Links"}
                </h2>
                <div className="links">
                  <a
                    href={recentProjects.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    talan-pfe_mangement_front
                  </a>
                  <br />
                  <br />
                  <a
                    href={recentProjects.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    talan-pfe_mangement_back
                  </a>
                </div>
              </Modal>
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
