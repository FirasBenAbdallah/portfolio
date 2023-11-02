import { Button, Divider } from "antd";
import { LikeOutlined, LinkOutlined } from "@ant-design/icons";
import { experience, projects } from "../data/data";
import AsideComp from "./AsideComp";

const BodyComp = ({ language }) => {
  return (
    <div className="body-container">
      <div className="left">
        <section className="about">
          <article>
            <h2>A propos de moi</h2>
            <p>
              En ma troisième année d'ingénierie en informatique à l'École
              Supérieure Privée d'Ingénieurs et de Technologie (ESPRIT), je me
              suis distingué dans les domaines du développement web et mobile,
              du testing et des pratiques DevOps. Avec une solide formation
              académique associée à une passion pour l'assurance qualité et
              l'intégration continue, je suis actuellement à la recherche d'un
              stage PFE. Mon objectif est de mettre en œuvre ces compétences et
              de contribuer de manière significative à des initiatives
              innovantes, tout en optimisant les processus de développement et
              de déploiement.
            </p>
          </article>
        </section>
        <section className="projects">
          <h2>Mes recents projets</h2>
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
                    <h3>{item.title}</h3>
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
                  <p>
                    {item.description.split("\n").map((str, index) => {
                      const parts = str.split(":");
                      if (
                        parts[0] === "Environnements techniques " ||
                        parts[0] === "Outil de gestion " ||
                        parts[0] === "IDE "
                      ) {
                        return (
                          <span key={index}>
                            <span style={{ color: "#909090" }}>
                              {parts[0]}:
                            </span>
                            {parts[1]}
                            <br />
                          </span>
                        );
                      } else {
                        return (
                          <span key={index}>
                            {str}
                            <br />
                          </span>
                        );
                      }
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
          <h2>Experience professionnelle</h2>
          {experience.map((item) => {
            return (
              <article key={item.id}>
                <div className="experience-info">
                  <h3>
                    {item.title}
                    <hr />
                  </h3>
                  <span>{item.date}</span>
                </div>
                <p>
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
