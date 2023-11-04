import { Button, Divider } from "antd";
import { LikeOutlined, LinkOutlined } from "@ant-design/icons";
import { body, aboutMe, projects, experience } from "../data/body";
import AsideComp from "./AsideComp";

const BodyComp = ({ language }) => {
  return (
    <div className="body-container">
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
            <img
              className="featured-img"
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221123132725/Top-Software-Engineering-Projects-Ideas.png"
              alt="slug"
            />
            <div className="project-info">
              <h3>Site web de gestion de medias sociaux</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                ducimus laudantium maiores perspiciatis commodi quae excepturi
                magni! Veniam eos voluptates eius accusantium saepe fuga atque
                ab hic animi, quisquam dicta? Eligendi temporibus reprehenderit
                fuga quos nisi beatae et neque doloribus nulla similique
                blanditiis labore corrupti non animi facere obcaecati modi iure,
                maxime accusamus cumque, id, consequatur quae aut ducimus!
                Consequatur.
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
                  <img src={item.image} alt="project-slug" />
                </div>
                <div className="right">
                  <div className="projects-info">
                    <h3>{item.title[language]}</h3>
                    <span>{item.date}</span>
                  </div>
                  {/* <p>
                    {item.description.split("\n").map((str, index, array) =>
                      index === array.length - 1 ? (
                        str
                      ) : (
                        <>
                          {str}
                          <br />
                          <span style={{ color: "#909090" }}>
                            Environnements techniques :
                          </span>
                        </>
                      )
                    )}
                  </p> */}
                  <p>{item.description[language]}</p>
                  <p>
                    {item.tools[language].split("\n").map((str, index) => {
                      // Split the string at ":"
                      const parts = str.split(":");
                      // Check if the first part is one of the titles
                      const isTitle = [
                        "Environnements techniques",
                        "Technical Environments",
                        "Outil de gestion",
                        "Management Tool",
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
                    En savoir plus
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
      <AsideComp language={language} />
    </div>
  );
};

export default BodyComp;
